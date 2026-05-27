const fs = require('fs');
let c = fs.readFileSync('C:/Users/4513/.openclaw/workspace/451c-site/assets/css/style.css', 'utf8');
const css = `

/* Enhanced Result Sections */
.result-section { margin-top: 20px; padding: 16px; background: rgba(255,255,255,.04); border-radius: 12px; border: 1px solid rgba(255,255,255,.06); }
.result-section-title { color: #f0c674; font-size: 14px; font-weight: 600; font-family: Noto Serif SC,serif; margin-bottom: 10px; }
.combo-item { font-size: 12px; color: #bbb; line-height: 1.7; margin-bottom: 4px; }
.combo-pair { color: #d4a843; font-family: monospace; font-weight: 600; }
.dominant-header { color: #f0c674; font-size: 13px; font-weight: 600; font-family: Noto Serif SC,serif; margin-bottom: 8px; }
.dom-section { margin-bottom: 6px; }
.dom-label { font-size: 11px; color: #888; font-weight: 600; margin-bottom: 1px; }
.dom-label.pos { color: #4ade80; }
.dom-label.neg { color: #f87171; }
.dom-text { font-size: 11px; color: #ccc; line-height: 1.5; margin-bottom: 4px; }
.star7-grid { display: grid; grid-template-columns: repeat(7,1fr); gap: 6px; }
.star7-item { text-align: center; padding: 6px 2px; border-radius: 8px; border: 1px solid rgba(255,255,255,.08); background: rgba(255,255,255,.03); }
.star7-item.active { border-color: rgba(212,168,67,.5); background: rgba(212,168,67,.08); }
.star7-level-em { font-size: 9px; padding: 1px 4px; border-radius: 3px; display: inline-block; margin-bottom: 2px; }
.star7-field { font-size: 12px; color: #d4a843; font-weight: 600; font-family: Noto Serif SC,serif; }
.star7-wx { font-size: 9px; color: #777; }
.star7-count { font-size: 12px; color: #f0c674; font-weight: 700; margin-top: 2px; }
`;
c = c.replace('/* ===== Animations =====', css + '\n/* ===== Animations =====');
fs.writeFileSync('C:/Users/4513/.openclaw/workspace/451c-site/assets/css/style.css', c);
console.log('Done');
