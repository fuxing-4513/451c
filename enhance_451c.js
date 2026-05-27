const fs = require('fs');
const p = 'C:/Users/4513/.openclaw/workspace/451c-site/assets/js/main.js';
let a = fs.readFileSync(p, 'utf8');

const addition = `
    function displayEnhanced(result) {
        const comboDiv = document.getElementById('comboAnalysis');
        if (comboDiv) {
            comboDiv.innerHTML = '';
            result.segments.forEach(seg => {
                if (!seg.fieldKey || seg.fieldKey === 'unknown' || !MAGNETIC_FIELDS[seg.fieldKey]) return;
                const f = MAGNETIC_FIELDS[seg.fieldKey];
                const pm = f.pairMeanings && f.pairMeanings[String(seg.pair)];
                if (pm) {
                    const p = document.createElement('p');
                    p.className = 'combo-item';
                    p.innerHTML = '<span class="combo-pair">[' + seg.pairStr + ']</span> ' + pm;
                    comboDiv.appendChild(p);
                }
            });
        }

        let maxKey = '', maxCount = 0;
        for (const k of Object.keys(MAGNETIC_FIELDS)) {
            if ((result.fieldCounts[k]||0) > maxCount) { maxCount = result.fieldCounts[k]; maxKey = k; }
        }
        const domDiv = document.getElementById('dominantAnalysis');
        if (domDiv && maxKey && MAGNETIC_FIELDS[maxKey]) {
            const f = MAGNETIC_FIELDS[maxKey];
            let html = '<div class="dominant-header">主' + f.name + ' : ' + (f.star7 || '') + '</div>';
            html += f.strengths ? '<div class="dom-section"><div class="dom-label pos">✦ 优点</div><div class="dom-text">' + f.strengths + '</div></div>' : '';
            html += f.weaknesses ? '<div class="dom-section"><div class="dom-label neg">✦ 缺点</div><div class="dom-text">' + f.weaknesses + '</div></div>' : '';
            html += f.personality ? '<div class="dom-section"><div class="dom-label">性格</div><div class="dom-text">' + f.personality + '</div></div>' : '';
            html += f.wealth ? '<div class="dom-section"><div class="dom-label">财运</div><div class="dom-text">' + f.wealth + '</div></div>' : '';
            html += f.feelings ? '<div class="dom-section"><div class="dom-label">感情</div><div class="dom-text">' + f.feelings + '</div></div>' : '';
            html += f.marriage ? '<div class="dom-section"><div class="dom-label">婚姻</div><div class="dom-text">' + f.marriage + '</div></div>' : '';
            html += f.health ? '<div class="dom-section"><div class="dom-label">健康</div><div class="dom-text">' + f.health + '</div></div>' : '';
            html += f.career ? '<div class="dom-section"><div class="dom-label">事业</div><div class="dom-text">' + f.career + '</div></div>' : '';
            domDiv.innerHTML = html;
        }

        const star7 = [
          {name:'天枢·贪狼',field:'生气',wx:'木',level:'次吉'},
          {name:'天璇·巨门',field:'天医',wx:'土',level:'次吉'},
          {name:'天玑·禄存',field:'祸害',wx:'土',level:'凶'},
          {name:'天权·文曲',field:'六煞',wx:'水',level:'次凶'},
          {name:'玉衡·廉贞',field:'五鬼',wx:'火',level:'大凶'},
          {name:'开阳·武曲',field:'延年',wx:'金',level:'大吉'},
          {name:'摇光·破军',field:'绝命',wx:'金',level:'凶'},
        ];
        const starDiv = document.getElementById('star7Analysis');
        if (starDiv) {
            starDiv.innerHTML = '';
            star7.forEach(s => {
                const fk = Object.keys(MAGNETIC_FIELDS).find(k => MAGNETIC_FIELDS[k].name === s.field);
                const cnt = fk ? (result.fieldCounts[fk]||0) : 0;
                const div = document.createElement('div');
                div.className = 'star7-item' + (cnt > 0 ? ' active' : '');
                div.innerHTML = '<div class="star7-level-em">' + s.level + '</div><div class="star7-field">' + s.field + '</div><div class="star7-wx">' + s.wx + '</div>' + (cnt > 0 ? '<div class="star7-count">' + cnt + '次</div>' : '');
                starDiv.appendChild(div);
            });
        }
    }

    const _origDisp = displayResult;
    displayResult = function(r) { _origDisp(r); setTimeout(() => { try { displayEnhanced(r); document.getElementById('comboContainer').style.display = 'block'; } catch(e){} }, 200); };
`;
const ip = a.indexOf('function init()');
a = a.slice(0, ip) + addition + a.slice(ip);
fs.writeFileSync(p, a);
console.log('Done');
