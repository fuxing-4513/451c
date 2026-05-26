/**
 * 451C 数字能量分析引擎
 * 八星磁场手机号码分析系统
 * 
 * 四吉星：天医、生气、延年、伏位
 * 四凶星：祸害、绝命、六煞、五鬼
 */

const MAGNETIC_FIELDS = {
  tianyi: {
    name: '天医',
    nameEn: 'Tian Yi',
    type: '吉',
    color: '#2ecc71',
    bgColor: '#eafaf1',
    numbers: [13, 31, 68, 86, 94, 49, 72, 27],
    keywords: ['财运', '财富', '婚姻', '正桃花', '聪明'],
    description: '主财运、婚姻、健康，是最吉祥的数字组合。天医磁场强的人通常财运亨通，婚姻美满。',
    detail: '天医磁场是八大磁场中最吉祥的磁场，代表财富、婚姻和智慧。拥有天医磁场的手机号码，能为使用者带来良好的财运和美满的婚姻。天医能量强的人思维敏捷，心地善良。'
  },
  shengqi: {
    name: '生气',
    nameEn: 'Sheng Qi',
    type: '吉',
    color: '#3498db',
    bgColor: '#ebf5fb',
    numbers: [14, 41, 67, 76, 93, 39, 82, 28],
    keywords: ['贵人', '人脉', '开朗', '随缘'],
    description: '主贵人运、人脉广、性格开朗乐观。有生气磁场的人容易遇到贵人相助。',
    detail: '生气磁场代表贵人运和人际关系。拥有生气磁场的号码使用者，往往性格开朗、人缘好，容易得到他人的帮助和支持。生气磁场也被称为"贵人星"。'
  },
  yannian: {
    name: '延年',
    nameEn: 'Yan Nian',
    type: '吉',
    color: '#9b59b6',
    bgColor: '#f4ecf7',
    numbers: [19, 91, 78, 87, 34, 43, 26, 62],
    keywords: ['事业', '领导力', '才干', '专业'],
    description: '主事业运、领导能力、专业才干。延年磁场强的人事业有成，能力强。',
    detail: '延年磁场代表事业和领导能力。拥有延年磁场的人通常事业心强，有领导才能，在专业领域表现出色。延年是"事业星"，代表能力和担当。'
  },
  fuwei: {
    name: '伏位',
    nameEn: 'Fu Wei',
    type: '平',
    color: '#1abc9c',
    bgColor: '#e8f8f5',
    numbers: [11, 22, 88, 99, 77, 66, 44, 33],
    keywords: ['稳定', '保守', '耐心', '积蓄'],
    description: '主稳定、保守、积蓄。伏位磁场让人性格沉稳，做事有耐心，但也可能过于保守。',
    detail: '伏位磁场代表稳定和积蓄。拥有伏位磁场的人性格稳重，做事有耐心，适合从事需要长期坚持的工作。伏位是中性磁场，吉凶取决于前后搭配。'
  },
  huohai: {
    name: '祸害',
    nameEn: 'Huo Hai',
    type: '凶',
    color: '#e74c3c',
    bgColor: '#fdedec',
    numbers: [17, 71, 89, 98, 64, 46, 32, 23],
    keywords: ['口舌', '是非', '小人', '病痛'],
    description: '主口舌是非、小人、身体病痛。祸害磁场容易招来争吵和麻烦。',
    detail: '祸害磁场代表口舌是非和身体问题。拥有祸害磁场的号码，容易引发争吵、官非和小人困扰。身体方面可能容易出现咽喉、肺部等问题。'
  },
  jueming: {
    name: '绝命',
    nameEn: 'Jue Ming',
    type: '凶',
    color: '#c0392b',
    bgColor: '#f9ebea',
    numbers: [12, 21, 69, 96, 84, 48, 37, 73],
    keywords: ['破财', '冲动', '投资', '大起大落'],
    description: '主破财、冲动、投资失利。绝命磁场让人敢拼敢闯但也容易大起大落。',
    detail: '绝命磁场代表破财和大起大落的人生。拥有绝命磁场的人有冲劲、敢冒险，但也容易因冲动而导致财务损失。绝命磁场需要搭配吉星才能化解。'
  },
  liusha: {
    name: '六煞',
    nameEn: 'Liu Sha',
    type: '凶',
    color: '#e67e22',
    bgColor: '#fdf2e9',
    numbers: [16, 61, 74, 47, 38, 83, 92, 29],
    keywords: ['烂桃花', '情绪', '忧郁', '服务业'],
    description: '主烂桃花、情绪不稳定、忧郁。六煞磁场的人情感丰富但容易情绪化。',
    detail: '六煞磁场代表烂桃花和情绪问题。拥有六煞磁场的人情感丰富，但也容易陷入感情纠纷和情绪波动。六煞磁场适合从事服务业和美容行业。'
  },
  wugui: {
    name: '五鬼',
    nameEn: 'Wu Gui',
    type: '凶',
    color: '#8e44ad',
    bgColor: '#f5eef8',
    numbers: [18, 81, 79, 97, 36, 63, 42, 24],
    keywords: ['变动', '才华', '熬夜', '血光'],
    description: '主变动、才华横溢但易招血光。五鬼磁场的人聪明有创意但人生多波折。',
    detail: '五鬼磁场代表变动和才华。拥有五鬼磁场的人聪明过人、有创造力，但也容易经历人生变故和波折。五鬼是"变动星"，代表不稳定的能量。'
  }
};

const FIELD_KEYS = Object.keys(MAGNETIC_FIELDS);

// 构建反向查找表：数字 -> 磁场
function buildLookup() {
  const lookup = {};
  for (const key of FIELD_KEYS) {
    const field = MAGNETIC_FIELDS[key];
    for (const num of field.numbers) {
      lookup[num] = key;
    }
  }
  return lookup;
}

const NUMBER_LOOKUP = buildLookup();

/**
 * 分析手机号码
 * @param {string} phone - 11位手机号码
 * @returns {object} 分析结果
 */
function analyzePhone(phone) {
  // 标准化输入
  const digits = phone.replace(/\D/g, '');
  
  if (digits.length !== 11) {
    return { error: '请输入11位手机号码', valid: false };
  }

  // 检查是否全是数字
  if (!/^\d{11}$/.test(digits)) {
    return { error: '手机号码只能包含数字', valid: false };
  }

  const results = {
    phone: digits,
    formatted: formatPhone(digits),
    valid: true,
    segments: [],
    fieldsFound: {},
    fieldCounts: {},
    auspiciousCount: 0,
    inauspiciousCount: 0,
    neutralCount: 0,
    overall: '',
    overallScore: 0,
    warnings: [],
    highlights: []
  };

  // 遍历所有相邻两位数组合
  for (let i = 0; i < digits.length - 1; i++) {
    const pair = parseInt(digits.substring(i, i + 2), 10);
    const fieldKey = NUMBER_LOOKUP[pair];
    
    const segment = {
      pair: pair,
      pairStr: String(pair).padStart(2, '0'),
      position: i + 1,
      fieldKey: fieldKey || 'unknown',
      fieldName: fieldKey ? MAGNETIC_FIELDS[fieldKey].name : '未知',
      fieldType: fieldKey ? MAGNETIC_FIELDS[fieldKey].type : '—',
      fieldColor: fieldKey ? MAGNETIC_FIELDS[fieldKey].color : '#999'
    };

    results.segments.push(segment);

    // 统计
    if (fieldKey) {
      results.fieldsFound[fieldKey] = (results.fieldsFound[fieldKey] || 0) + 1;
      
      if (fieldKey === 'fuwei') {
        results.neutralCount++;
      } else if (['tianyi', 'shengqi', 'yannian'].includes(fieldKey)) {
        results.auspiciousCount++;
      } else {
        results.inauspiciousCount++;
      }
    }
  }

  // 计算各磁场出现次数
  for (const key of FIELD_KEYS) {
    results.fieldCounts[key] = results.fieldsFound[key] || 0;
  }

  // 整体评分与判断
  const totalFields = results.auspiciousCount + results.inauspiciousCount + results.neutralCount;
  
  if (totalFields > 0) {
    // 计算百分比
    const ausPercent = (results.auspiciousCount / totalFields) * 100;
    const inausPercent = (results.inauspiciousCount / totalFields) * 100;
    
    // 综合评分 (0-100)
    let score = 50; // 基础分
    score += (ausPercent * 0.5);  // 吉星加分
    score -= (inausPercent * 0.4); // 凶星减分
    score = Math.max(0, Math.min(100, Math.round(score)));
    results.overallScore = score;

    // 整体评价
    if (score >= 75) {
      results.overall = '上等号码';
      results.highlights.push('号码整体能量非常优秀，财运、事业、人缘俱佳。');
    } else if (score >= 60) {
      results.overall = '中上号码';
      results.highlights.push('号码能量不错，吉星占优，整体运势良好。');
    } else if (score >= 40) {
      results.overall = '中等号码';
      results.highlights.push('号码吉凶参半，需要通过搭配改善整体能量。');
    } else if (score >= 25) {
      results.overall = '中下号码';
      results.highlights.push('凶星能量较多，建议结合个人八字谨慎使用。');
    } else {
      results.overall = '需要注意';
      results.highlights.push('号码凶星能量占主导，建议慎重考虑更换。');
    }

    // 具体告警和建议
    if (results.fieldCounts.huohai >= 2) {
      results.warnings.push('祸害磁场出现频繁，需注意口舌是非和呼吸系统健康。');
    }
    if (results.fieldCounts.jueming >= 2) {
      results.warnings.push('绝命磁场较多，投资需谨慎，避免冲动消费。');
    }
    if (results.fieldCounts.liusha >= 2) {
      results.warnings.push('六煞磁场较多，注意情绪管理和感情问题。');
    }
    if (results.fieldCounts.wugui >= 2) {
      results.warnings.push('五鬼磁场频繁，人生变动较大，注意安全。');
    }
    if (results.fieldCounts.tianyi >= 2) {
      results.highlights.push('天医磁场较强，财运亨通，有助婚姻美满。');
    }
    if (results.fieldCounts.shengqi >= 2) {
      results.highlights.push('生气磁场旺盛，贵人运好，人脉广阔。');
    }
    if (results.fieldCounts.yannian >= 2) {
      results.highlights.push('延年磁场充足，事业运强，有领导才能。');
    }

    // 尾号分析 (后4位)
    const tail4 = digits.slice(-4);
    const tailPairs = [
      parseInt(tail4.substring(0, 2), 10),
      parseInt(tail4.substring(1, 3), 10),
      parseInt(tail4.substring(2, 4), 10)
    ];
    
    const tailFields = tailPairs.map(p => NUMBER_LOOKUP[p]).filter(Boolean);
    const tailFieldNames = tailFields.map(k => MAGNETIC_FIELDS[k]?.name).filter(Boolean);
    
    if (tailFieldNames.length > 0) {
      results.tailAnalysis = {
        pairs: tailPairs,
        fields: tailFieldNames,
        text: `尾号 ${tail4} 包含 ${tailFieldNames.join('、')} 磁场能量`
      };
      
      // 尾号是否有吉星
      const tailHasAuspicious = tailFields.some(k => ['tianyi', 'shengqi', 'yannian'].includes(k));
      if (tailHasAuspicious) {
        results.highlights.push(`尾号含吉星磁场，收尾能量较好。`);
      } else {
        results.warnings.push(`尾号缺乏吉星，建议尾号带有天医或延年磁场。`);
      }
    }
  }

  return results;
}

/**
 * 格式化手机号显示
 */
function formatPhone(phone) {
  if (!phone || phone.length !== 11) return phone;
  return `${phone.slice(0, 3)} ${phone.slice(3, 7)} ${phone.slice(7)}`;
}

/**
 * 获取磁场的详细说明
 */
function getFieldDetail(key) {
  return MAGNETIC_FIELDS[key] || null;
}

/**
 * 获取所有磁场信息
 */
function getAllFields() {
  return FIELD_KEYS.map(key => ({ key, ...MAGNETIC_FIELDS[key] }));
}

// 导出（在浏览器环境下使用全局对象）
if (typeof window !== 'undefined') {
  window.analyzePhone = analyzePhone;
  window.MAGNETIC_FIELDS = MAGNETIC_FIELDS;
  window.getAllFields = getAllFields;
  window.getFieldDetail = getFieldDetail;
}
