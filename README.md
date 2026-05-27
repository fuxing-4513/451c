# 📱 451C 数字能量分析网站

> 域名：www.451C.com  
> 主题：八星磁场 · 手机号码数字能量分析

---

## 项目结构

```
451c-site/
├── index.html          # 主页面（分析工具 + 磁场知识 + 文章）
├── sitemap.xml         # SEO 站点地图
├── robots.txt          # 爬虫规则
├── nginx.conf          # Nginx 配置示例
├── assets/
│   ├── css/
│   │   └── style.css   # 样式文件
│   └── js/
│       └── analyzer.js # 核心分析引擎
```

## 快速部署

### 方式一：静态托管（推荐）

将整个 `451c-site/` 文件夹上传至任意静态托管服务：

- **Vercel**：`vercel --prod`
- **Netlify**：直接拖拽上传
- **GitHub Pages**：推送至 `gh-pages` 分支
- **Cloudflare Pages**：连接 Git 仓库自动部署

### 方式二：VPS / 服务器

1. 将 `451c-site/` 下所有文件上传到服务器 `/var/www/451c/`
2. 配置 Nginx（参考 `nginx.conf`）
3. 添加域名解析并申请 SSL（推荐 Let's Encrypt / certbot）

```bash
# 示例：使用 scp 上传
scp -r 451c-site/* root@your-server:/var/www/451c/

# 重启 Nginx
sudo systemctl reload nginx
```

## SEO 配置

1. **百度站长平台**：添加 https://www.451c.com ，验证所有权
2. **Google Search Console**：添加网站并提交 `sitemap.xml`
3. **更新统计代码**：修改 `index.html` 底部的 Umami 统计 ID（或替换为百度统计/GA4）

## 功能说明

### 1. 手机号分析核心算法
- 11 位号码拆解为 10 个相邻两位数组合
- 每个两位数匹配八星磁场对照表
- 吉星比例 → 综合评分（0-100）
- 自动检测尾号能量、给出亮点/警告

### 2. 八星磁场对照
- **四吉星**：天医（财）、生气（贵人）、延年（事业）、伏位（稳定）
- **四凶星**：祸害（口舌）、绝命（破财）、六煞（烂桃花）、五鬼（变动）

### 3. 文章内容
示例占位文章，建议根据数字能量知识逐步补充实际内容。

## 维护建议

- **文章更新**：编辑 `index.html` 中 `<section id="articles">` 部分
- **添加页面**：复制 `index.html` 模板，修改标题和内容
- **颜色/样式**：修改变量 `assets/css/style.css` 中的 `:root` 部分
- **分析逻辑**：编辑 `assets/js/analyzer.js` 中的 `MAGNETIC_FIELDS` 和评分算法

## 设计原则

- ✅ 纯静态，无需后端，极低成本
- ✅ 移动端优先，全响应式
- ✅ 零依赖，开箱即用
- ✅ SEO 基础优化（语义化 HTML、JSON-LD、sitemap）
- ✅ 干净清爽的现代 UI

## 免责声明

本站内容仅供学习参考，数字能量学属于传统文化范畴，不构成任何生活决策依据。
"尽人事，听天命" —— 理性看待，享受生活。

---

🦅 451C.com · 墨羽出品
