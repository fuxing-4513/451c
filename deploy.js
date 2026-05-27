const https = require('https');
const fs = require('fs');
const path = require('path');

const TOKEN = process.env.CF_API_TOKEN || ''; // 安全: 从环境变量读取;
const ACCOUNT = '34f11c06a7ff5558f3f637a2fefcf132';
const PROJECT = '451c';
const BASE = 'C:\\Users\\4513\\.openclaw\\workspace\\451c-site';

// Build manifest of all files (base64)
const manifest = {};
function walk(dir) {
    for (const item of fs.readdirSync(dir)) {
        if (item === '.vercel' || item === '.wrangler' || item === 'node_modules' || item === 'deploy.js') continue;
        const full = path.join(dir, item);
        if (fs.statSync(full).isDirectory()) { walk(full); }
        else if (['.html','.css','.js','.xml','.txt'].includes(path.extname(full).toLowerCase())) {
            const rel = path.relative(BASE, full).replace(/\\/g, '/');
            manifest[rel] = fs.readFileSync(full).toString('base64');
        }
    }
}
walk(BASE);
console.log('Files:', Object.keys(manifest).length);

// Multipart upload
const manifestJson = JSON.stringify({ manifest, branch: 'main' });
const boundary = '----WebKitFormBoundary' + Math.random().toString(36).slice(2, 10);

let body = Buffer.alloc(0);
const append = (s) => { body = Buffer.concat([body, Buffer.from(s, 'utf8')]); };

append('--' + boundary + '\r\n');
append('Content-Disposition: form-data; name="manifest"\r\n');
append('Content-Type: application/json\r\n\r\n');
append(manifestJson + '\r\n');
append('--' + boundary + '--\r\n');

console.log('Payload size:', body.length, 'bytes');

const req = https.request({
    hostname: 'api.cloudflare.com',
    path: '/client/v4/accounts/' + ACCOUNT + '/pages/projects/' + PROJECT + '/deployments',
    method: 'POST',
    headers: {
        'Authorization': 'Bearer ' + TOKEN,
        'Content-Type': 'multipart/form-data; boundary=' + boundary,
        'Content-Length': body.length
    }
}, (res) => {
    let data = '';
    res.on('data', c => data += c);
    res.on('end', () => {
        console.log('Status:', res.statusCode);
        const r = JSON.parse(data);
        if (r.success) console.log('鉁?URL:', r.result.url);
        else console.log('鉂?Errors:', JSON.stringify(r.errors));
    });
});
req.on('error', e => console.log('ERROR:', e.message));
req.write(body);
req.end();
