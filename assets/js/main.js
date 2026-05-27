/**
 * 451C.com - Main Script
 * Navigation, i18n, scroll effects
 */
(function() {
    'use strict';

    /* ==========================================
       i18n 三语翻译系统
       ========================================== */
    const LANG_KEYS = ['zh-CN', 'zh-TW', 'en'];
    const STORAGE_KEY = '451c_lang';
    const DEFAULT_LANG = 'zh-CN';

    const i18n = {
        // 导航
        'nav.home':       { 'zh-CN': '首页',          'zh-TW': '首頁',          'en': 'Home' },
        'nav.analyzer':   { 'zh-CN': '号码分析',      'zh-TW': '號碼分析',      'en': 'Analysis' },
        'nav.yijing':     { 'zh-CN': '数字与易经',    'zh-TW': '數字與易經',    'en': 'I-Ching & Numbers' },
        'nav.apps':       { 'zh-CN': '数字应用',      'zh-TW': '數字應用',      'en': 'Applications' },
        'nav.app':        { 'zh-CN': 'APP下载',       'zh-TW': 'APP下載',       'en': 'App' },
        'nav.contact':    { 'zh-CN': '联系我们',      'zh-TW': '聯繫我們',      'en': 'Contact' },

        // Hero
        'hero.title':     { 'zh-CN': '探索数字背后的能量',       'zh-TW': '探索數字背後的能量',       'en': 'Discover the Power Behind Numbers' },
        'hero.subtitle':  { 'zh-CN': '依托八星磁场理论，解读手机号码中的数字能量密码，助您了解财运、事业、感情与健康', 'zh-TW': '依託八星磁場理論，解讀手機號碼中的數字能量密碼，助您了解財運、事業、感情與健康', 'en': 'Based on the Eight Star Magnetic Field Theory, decode the energy patterns in your phone number to gain insights into wealth, career, relationships, and health.' },
        'hero.cta':       { 'zh-CN': '免费分析号码', 'zh-TW': '免費分析號碼', 'en': 'Analyze Your Number Free' },

        // Analyzer
        'ana.title':      { 'zh-CN': '手机号 · 测吉凶',  'zh-TW': '手機號 · 測吉凶',  'en': 'Phone Number Analysis' },
        'ana.placeholder':{ 'zh-CN': '输入11位手机号',    'zh-TW': '輸入11位手機號',    'en': 'Enter 11-digit phone number' },
        'ana.btn':        { 'zh-CN': '提交分析',          'zh-TW': '提交分析',          'en': 'Analyze Now' },
        'ana.hint':       { 'zh-CN': '已加密处理，本站不留存任何号码信息', 'zh-TW': '已加密處理，本站不留存任何號碼信息', 'en': 'Encrypted. We do not store any phone numbers.' },
        'ana.analyzing':  { 'zh-CN': '分析中...',         'zh-TW': '分析中...',         'en': 'Analyzing...' },
        'ana.rescore':    { 'zh-CN': '综合评分',          'zh-TW': '綜合評分',          'en': 'Overall Score' },
        'ana.tail':       { 'zh-CN': '尾号能量',          'zh-TW': '尾號能量',          'en': 'Last Digits Energy' },
        'ana.reanalyze':  { 'zh-CN': '重新分析',          'zh-TW': '重新分析',          'en': 'Re-analyze' },

        // 数字与易经
        'yj.title':       { 'zh-CN': '数字与易经',      'zh-TW': '數字與易經',      'en': 'I-Ching & Numbers' },
        'yj.desc':        { 'zh-CN': '数字与易经同源，河图洛书揭示了数字的宇宙密码，八卦对应着世间万物。', 'zh-TW': '數字與易經同源，河圖洛書揭示了數字的宇宙密碼，八卦對應著世間萬物。', 'en': 'Numbers and I-Ching share the same origin. The River Map and Lo Shu reveal the cosmic codes of numbers, while the eight trigrams correspond to all things in the universe.' },
        'yj.hetu':        { 'zh-CN': '河图洛书',         'zh-TW': '河圖洛書',         'en': 'He Tu & Luo Shu' },
        'yj.hetuDesc':    { 'zh-CN': '河图洛书是易经的源头，以数字矩阵揭示天地万物的生成规律。一六共宗为水，二七同道为火，三八为朋为木，四九为友为金，五十同途为土。', 'zh-TW': '河圖洛書是易經的源頭，以數字矩陣揭示天地萬物的生成規律。一六共宗為水，二七同道為火，三八為朋為木，四九為友為金，五十同途為土。', 'en': 'The River Map and Lo Shu are the origins of I-Ching, revealing the generative patterns of all things through numerical matrices. 1&6=Water, 2&7=Fire, 3&8=Wood, 4&9=Metal, 5&10=Earth.' },
        'yj.bagua':       { 'zh-CN': '八卦与数字',       'zh-TW': '八卦與數字',       'en': 'Trigrams & Numbers' },
        'yj.baguaDesc':   { 'zh-CN': '先天八卦对应数字：乾一、兑二、离三、震四、巽五、坎六、艮七、坤八。每个卦象都代表着特定的能量频率。', 'zh-TW': '先天八卦對應數字：乾一、兌二、離三、震四、巽五、坎六、艮七、坤八。每個卦象都代表著特定的能量頻率。', 'en': 'The eight trigrams correspond to numbers: Qian-1, Dui-2, Li-3, Zhen-4, Xun-5, Kan-6, Gen-7, Kun-8. Each trigram represents a specific energy frequency.' },
        'yj.wuxing':      { 'zh-CN': '五行生克',         'zh-TW': '五行生剋',         'en': 'Five Elements' },
        'yj.wuxingDesc':  { 'zh-CN': '五行（金木水火土）之间存在着相生相克的关系。数字能量中的八星磁场与五行密切对应，生克平衡则吉，失衡则凶。', 'zh-TW': '五行（金木水火土）之間存在著相生相剋的關係。數字能量中的八星磁場與五行密切對應，生剋平衡則吉，失衡則凶。', 'en': 'The Five Elements (Metal, Wood, Water, Fire, Earth) interact through generation and control cycles. In number energy, the Eight Stars closely correspond to the Five Elements. Balanced elements bring fortune, imbalance brings challenges.' },

        // 数字应用
        'appsec.title':   { 'zh-CN': '数字应用场景',    'zh-TW': '數字應用場景',    'en': 'Number Applications' },
        'appsec.desc':    { 'zh-CN': '数字能量在生活中的广泛应用，帮助您在各个方面做出更好的选择。', 'zh-TW': '數字能量在生活中的廣泛應用，幫助您在各個方面做出更好的選擇。', 'en': 'Number energy has wide applications in daily life, helping you make better choices in every aspect.' },
        'appsec.card1':   { 'zh-CN': '选号技巧',         'zh-TW': '選號技巧',         'en': 'Number Selection' },
        'appsec.card1Desc':{ 'zh-CN': '学会如何根据八星磁场选择对自己有利的手机号码，避开凶星组合。天医+延年组合最利财运。', 'zh-TW': '學會如何根據八星磁場選擇對自己有利的手機號碼，避開凶星組合。天醫+延年組合最利財運。', 'en': 'Learn how to choose favorable phone numbers based on the Eight Star magnetic fields, avoiding harmful combinations. Tian Yi + Yan Nian is best for wealth.' },
        'appsec.card2':   { 'zh-CN': '车牌号分析',       'zh-TW': '車牌號分析',       'en': 'License Plate Analysis' },
        'appsec.card2Desc':{ 'zh-CN': '车牌号码的能量同样影响出行安全。分析车牌数字组合，选择适合您命理五行的号码。', 'zh-TW': '車牌號碼的能量同樣影響出行安全。分析車牌數字組合，選擇適合您命理五行的號碼。', 'en': 'License plate numbers also affect travel safety. Analyze plate number combinations to choose one that matches your elemental profile.' },
        'appsec.card3':   { 'zh-CN': '门牌与公司名',     'zh-TW': '門牌與公司名',     'en': 'Address & Business Names' },
        'appsec.card3Desc':{ 'zh-CN': '门牌号和公司名称中的数字组合影响着居住和办公环境的能量场，合理选择有利于事业发展和家庭和睦。', 'zh-TW': '門牌號和公司名稱中的數字組合影響著居住和辦公環境的能量場，合理選擇有利於事業發展和家庭和睦。', 'en': 'Address numbers and business name numbers influence the energy field of your living and working environment. Smart choices benefit career growth and family harmony.' },

        // APP下载
        'app.title':      { 'zh-CN': '随时随地 · 数字能量', 'zh-TW': '隨時隨地 · 數字能量', 'en': 'Number Energy · Anywhere' },
        'app.desc':       { 'zh-CN': '下载 451C App，随时随地查询手机号码能量、学习数字知识、获取每日运势提醒。', 'zh-TW': '下載 451C App，隨時隨地查詢手機號碼能量、學習數字知識、獲取每日運勢提醒。', 'en': 'Download the 451C App to analyze phone numbers, learn number energy knowledge, and get daily fortune alerts anytime, anywhere.' },
        'app.store':      { 'zh-CN': 'App Store',        'zh-TW': 'App Store',        'en': 'App Store' },
        'app.android':    { 'zh-CN': 'Google Play',      'zh-TW': 'Google Play',      'en': 'Google Play' },
        'app.coming':     { 'zh-CN': '即将上线',         'zh-TW': '即將上線',         'en': 'Coming Soon' },

        // Contact
        'contact.title':  { 'zh-CN': '联系我们',         'zh-TW': '聯繫我們',         'en': 'Contact Us' },
        'contact.desc':   { 'zh-CN': '有任何问题或建议，欢迎随时与我们联系。', 'zh-TW': '有任何問題或建議，歡迎隨時與我們聯繫。', 'en': 'Have questions or suggestions? Feel free to reach out anytime.' },
        'contact.email':  { 'zh-CN': '邮箱',             'zh-TW': '郵箱',             'en': 'Email' },
        'contact.wechat': { 'zh-CN': '微信',             'zh-TW': '微信',             'en': 'WeChat' },
        'contact.phone':  { 'zh-CN': '电话',             'zh-TW': '電話',             'en': 'Phone' },
        'contact.formName':  { 'zh-CN': '您的姓名',      'zh-TW': '您的姓名',         'en': 'Your Name' },
        'contact.formEmail': { 'zh-CN': '您的邮箱',      'zh-TW': '您的郵箱',         'en': 'Your Email' },
        'contact.formMsg':   { 'zh-CN': '您的留言',      'zh-TW': '您的留言',         'en': 'Your Message' },
        'contact.formBtn':   { 'zh-CN': '发送消息',      'zh-TW': '發送消息',         'en': 'Send Message' },
        'contact.formHint':  { 'zh-CN': '我们会尽快回复您', 'zh-TW': '我們會盡快回覆您', 'en': 'We will get back to you soon' },

        // Footer
        'footer.tagline': { 'zh-CN': '专注于数字能量学研究，提供免费的手机号码八星磁场分析服务。', 'zh-TW': '專注於數字能量學研究，提供免費的手機號碼八星磁場分析服務。', 'en': 'Dedicated to the study of number energy, providing free Eight Star magnetic field analysis for phone numbers.' },
        'footer.nav':     { 'zh-CN': '快速导航',         'zh-TW': '快速導航',         'en': 'Quick Links' },
        'footer.social':  { 'zh-CN': '关注我们',         'zh-TW': '關注我們',         'en': 'Follow Us' },
        'footer.copyright': { 'zh-CN': '© 2025-2026 451C.com · 数字能量学 · 尽人事，听天命', 'zh-TW': '© 2025-2026 451C.com · 數字能量學 · 盡人事，聽天命', 'en': '© 2025-2026 451C.com · Number Energy · Do your best, let fate do the rest' },
        'footer.disclaimer': { 'zh-CN': '声明：本站内容仅供娱乐参考，请理性看待数字能量对生活的影响。', 'zh-TW': '聲明：本站內容僅供娛樂參考，請理性看待數字能量對生活的影響。', 'en': 'Disclaimer: All content is for entertainment and reference only. Please maintain a rational perspective on number energy.' },
    };

    /* ==========================================
       i18n Engine
       ========================================== */
    let currentLang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    if (!LANG_KEYS.includes(currentLang)) currentLang = DEFAULT_LANG;

    function t(key) {
        const entry = i18n[key];
        if (!entry) return key;
        return entry[currentLang] || entry[DEFAULT_LANG] || key;
    }

    function setLanguage(lang) {
        if (!LANG_KEYS.includes(lang)) return;
        currentLang = lang;
        localStorage.setItem(STORAGE_KEY, lang);
        applyI18n();
        updateSeo();
        // 更新语言切换按钮高亮
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        // 更新 html lang 属性
        const htmlMap = { 'zh-CN': 'zh-Hans', 'zh-TW': 'zh-Hant', 'en': 'en' };
        document.documentElement.lang = htmlMap[lang] || 'zh-Hans';
    }

    function applyI18n() {
        // 更新所有 data-i18n 元素
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            const text = t(key);
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                if (el.dataset.i18nType === 'placeholder') {
                    el.placeholder = text;
                }
            } else if (el.tagName === 'META') {
                // meta tags handled separately
            } else {
                el.textContent = text;
            }
        });

        // 更新 input placeholder
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            el.placeholder = t(el.dataset.i18nPlaceholder);
        });

        // 更新 title
        const titleMap = {
            'zh-CN': '451C 数字能量 - 手机号码磁场分析 | 八星灵数在线测算',
            'zh-TW': '451C 數字能量 - 手機號碼磁場分析 | 八星靈數在線測算',
            'en': '451C Number Energy - Phone Number Magnetic Field Analysis | Eight Stars Fortune'
        };
        document.title = titleMap[currentLang] || titleMap['zh-CN'];
    }

    function updateSeo() {
        const descMap = {
            'zh-CN': '451C数字能量学，基于八星磁场理论免费分析手机号码。提供天医、生气、延年、伏位、祸害、绝命、六煞、五鬼八大磁场详解与手机号在线测算工具。',
            'zh-TW': '451C數字能量學，基於八星磁場理論免費分析手機號碼。提供天醫、生氣、延年、伏位、禍害、絕命、六煞、五鬼八大磁場詳解與手機號在線測算工具。',
            'en': '451C Number Energy - Free phone number analysis based on Eight Star magnetic field theory. Analyze wealth, career, relationships and health through number patterns.'
        };
        const ogTitleMap = {
            'zh-CN': '451C 数字能量 - 免费手机号码分析',
            'zh-TW': '451C 數字能量 - 免費手機號碼分析',
            'en': '451C Number Energy - Free Phone Number Analysis'
        };
        const ogDescMap = {
            'zh-CN': '在线手机号码八星磁场分析工具，基于数字能量学免费测算手机号的能量组合。',
            'zh-TW': '在線手機號碼八星磁場分析工具，基於數字能量學免費測算手機號的能量組合。',
            'en': 'Online Eight Star magnetic field analysis tool for phone numbers. Free number energy analysis based on ancient wisdom.'
        };

        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.content = descMap[currentLang];

        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.content = ogTitleMap[currentLang];

        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.content = ogDescMap[currentLang];
    }

    /* ==========================================
       Navigation
       ========================================== */
    function initNav() {
        const menuBtn = document.getElementById('menuBtn');
        const mainNav = document.getElementById('mainNav');

        if (menuBtn && mainNav) {
            menuBtn.addEventListener('click', () => {
                mainNav.classList.toggle('open');
                menuBtn.textContent = mainNav.classList.contains('open') ? '✕' : '☰';
            });

            // 点击导航链接后关闭菜单
            mainNav.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    mainNav.classList.remove('open');
                    menuBtn.textContent = '☰';
                });
            });
        }
    }

    /* ==========================================
       Language Switcher
       ========================================== */
    function initLangSwitcher() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                setLanguage(btn.dataset.lang);
            });
        });
    }

    /* ==========================================
       Scroll Effects
       ========================================== */
    function initScrollEffects() {
        // 滚动时改变导航透明度
        const header = document.querySelector('.site-header');
        if (header) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
        }

        // 回到顶部按钮
        const scrollBtn = document.getElementById('scrollTop');
        if (scrollBtn) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 500) {
                    scrollBtn.classList.add('visible');
                } else {
                    scrollBtn.classList.remove('visible');
                }
            });
            scrollBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        // 滚动出现动画（Intersection Observer）
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    }

    /* ==========================================
       Analyzer Form
       ========================================== */
    function initAnalyzer() {
        const form = document.getElementById('analyzeForm');
        const phoneInput = document.getElementById('phoneInput');
        const analyzeBtn = document.getElementById('analyzeBtn');
        const btnText = document.getElementById('btnText');
        const btnSpinner = document.getElementById('btnSpinner');
        const resultArea = document.getElementById('result-area');

        if (!form) return;

        // 只允许输入数字
        phoneInput.addEventListener('input', () => {
            phoneInput.value = phoneInput.value.replace(/\D/g, '').slice(0, 11);
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const phone = phoneInput.value.trim();
            if (phone.length !== 11) {
                phoneInput.style.borderColor = '#f87171';
                phoneInput.focus();
                setTimeout(() => {
                    phoneInput.style.borderColor = '';
                }, 2000);
                return;
            }

            // 显示加载状态
            btnText.style.display = 'none';
            btnSpinner.style.display = 'inline-flex';
            analyzeBtn.disabled = true;

            setTimeout(() => {
                // 调用分析引擎
                const result = analyzePhone(phone);

                if (!result.valid) {
                    btnText.style.display = 'inline';
                    btnSpinner.style.display = 'none';
                    analyzeBtn.disabled = false;
                    alert(t('ana.error'));
                    return;
                }

                displayResult(result);
                resultArea.classList.add('visible');

                btnText.style.display = 'inline';
                btnSpinner.style.display = 'none';
                analyzeBtn.disabled = false;
            }, 800);
        });

        // 重新分析
        const resetBtn = document.getElementById('resetBtn');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                resultArea.classList.remove('visible');
                resultArea.style.display = 'none';
                phoneInput.value = '';
                phoneInput.focus();
            });
        }
    }

    /* ==========================================
       Display Analysis Result
       ========================================== */
    function displayResult(result) {
        // 手机号显示
        document.getElementById('phoneDisplay').textContent = result.formatted;

        // 综合评分
        const score = result.overallScore;
        const scoreRing = document.getElementById('scoreRing');
        scoreRing.textContent = score;
        scoreRing.className = 'score-ring-sm';
        if (score >= 75) scoreRing.classList.add('excellent');
        else if (score >= 60) scoreRing.classList.add('good');
        else if (score >= 40) scoreRing.classList.add('medium');
        else scoreRing.classList.add('poor');

        // 评分标题
        document.getElementById('verdictTitle').textContent = result.overall;

        // 段可视化
        const segmentRow = document.getElementById('segmentRow');
        segmentRow.innerHTML = '';
        result.segments.forEach(seg => {
            const block = document.createElement('div');
            block.className = 'segment-block';
            block.style.background = seg.fieldColor ? seg.fieldColor + '22' : 'rgba(255,255,255,.03)';
            block.style.color = seg.fieldColor || '#666';
            block.title = seg.fieldName;
            block.innerHTML = `<span class="pair-num">${seg.pairStr}</span><span class="field-label">${seg.fieldName}</span>`;
            segmentRow.appendChild(block);
        });

        // 字段统计
        const fieldStats = document.getElementById('fieldStats');
        fieldStats.innerHTML = '';
        const fieldOrder = ['tianyi', 'shengqi', 'yannian', 'fuwei', 'huohai', 'jueming', 'liusha', 'wugui'];
        fieldOrder.forEach(key => {
            const count = result.fieldCounts[key] || 0;
            if (count === 0) return;
            const field = MAGNETIC_FIELDS[key];
            const item = document.createElement('div');
            item.className = 'field-stat-item-hz';
            item.innerHTML = `
                <span class="stat-dot" style="background:${field.color}"></span>
                <span class="stat-name">${field.name}</span>
                <span class="stat-count">${count}</span>
                <span class="stat-badge ${field.type === '吉' ? 'badge-ji' : field.type === '凶' ? 'badge-xiong' : 'badge-ping'}">${field.type}</span>
            `;
            fieldStats.appendChild(item);
        });

        // 尾号分析
        const tailDiv = document.querySelector('.tail-text');
        if (result.tailAnalysis) {
            tailDiv.textContent = result.tailAnalysis.text;
        } else {
            tailDiv.textContent = '';
        }

        // 详情（亮点+警告）
        const details = document.getElementById('resultDetails');
        details.innerHTML = '';

        const highlights = result.highlights || [];
        const warnings = result.warnings || [];

        if (highlights.length > 0) {
            const mini = document.createElement('div');
            mini.className = 'detail-mini highlight-mini';
            const title = document.createElement('div');
            title.className = 'mini-title';
            title.textContent = t('ana.highlight') || '亮点';
            mini.appendChild(title);
            highlights.slice(0, 3).forEach(h => {
                const span = document.createElement('span');
                span.textContent = h;
                mini.appendChild(span);
            });
            details.appendChild(mini);
        }

        if (warnings.length > 0) {
            const mini = document.createElement('div');
            mini.className = 'detail-mini warning-mini';
            const title = document.createElement('div');
            title.className = 'mini-title';
            title.textContent = t('ana.warning') || '注意';
            mini.appendChild(title);
            warnings.slice(0, 3).forEach(w => {
                const span = document.createElement('span');
                span.textContent = w;
                mini.appendChild(span);
            });
            details.appendChild(mini);
        }
    }

    /* ==========================================
       Contact Form
       ========================================== */
    function initContactForm() {
        const form = document.getElementById('contactForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const btn = form.querySelector('.btn-submit');
                const originalText = btn.textContent;
                const successMsg = {
                    'zh-CN': '✅ 已发送',
                    'zh-TW': '✅ 已發送',
                    'en': '✅ Sent'
                };
                btn.textContent = successMsg[currentLang] || '✅ Sent';
                btn.disabled = true;
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.disabled = false;
                    form.reset();
                }, 3000);
            });
        }
    }

    /* ==========================================
       Init
       ========================================== */
    function init() {
        initNav();
        initLangSwitcher();
        initScrollEffects();
        initAnalyzer();
        initContactForm();

        // 加载时应用默认语言
        setLanguage(currentLang);

        // 移除加载指示器
        const loader = document.getElementById('pageLoader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 500);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
