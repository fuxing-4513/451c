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
    numbers: [13, 31, 68, 86, 94, 49, 72, 27],,pairMeanings:{"13":"天医最强组合，主大财运、正桃花。13/31组合的人财运旺盛，赚钱能力强，婚姻美满，是一等一的好组合。","27":"天医组合，财运平和，家庭和睦。","31":"天医次强组合，31与13同源，主财运好、心地善良。异性缘佳，婚姻幸福。","49":"天医组合，财运持续稳定。","68":"天医组合，主财运逐渐上升。发财后能够守财，财富积累能力较强。","72":"天医组合，72寓意妻儿，主家庭美满。","86":"天医组合，86与68同源。发财后能够守财。","94":"天医组合，94寓意久发，财运长久。"},star7:"天璇·巨门星（土）",strengths:"心地善良、聪明智慧、财运亨通、婚姻美满",weaknesses:"容易轻信他人、过于善良易被骗、缺乏防备心",personality:"天医磁场强的人，心地善良、为人真诚、聪明智慧。性格温和，善于交际，有同情心和包容力。",wealth:"天医为正财星，主财运亨通。赚钱能力较强，容易获得稳定的财富收入。",feelings:"天医磁场代表正桃花和美满感情。对感情专一真诚，重视家庭。",marriage:"婚姻较为幸福美满，配偶多为善良正派之人。天医磁场强的女性多为旺夫之命。",health:"天医主健康，身体状况较好。需要注意脾胃消化系统的问题。",career:"适合从事医疗、教育、金融、财务等正行职业。"
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
    numbers: [14, 41, 67, 76, 93, 39, 82, 28],,pairMeanings:{"14":"生气最强组合，主大贵人运。总能在关键时刻得到帮助。","28":"生气组合，人际关系和谐。","39":"生气组合，贵人运势持续。","41":"生气次强组合，41与14同源。人缘好，容易结识有地位的人。","67":"生气组合，主财运和贵人。适合出差、外务工作。","76":"生气组合，能够通过朋友获得机会。","82":"生气组合，财运通过人脉而来。","93":"生气组合，长久的好人缘。"},star7:"天枢·贪狼星（木）",strengths:"人缘好、朋友多、乐观开朗、贵人相助",weaknesses:"容易依赖他人、缺乏主见、不善拒绝",personality:"生气磁场强的人性格开朗、积极乐观。善于社交，朋友众多。有包容心，不计较小事。",wealth:"生气主贵人财，赚钱多靠人际关系和他人帮助。适合与人合作。",feelings:"生气磁场随缘的感情观。比较豁达，不执着不强求。",marriage:"婚姻较为和谐，但需要稳定的感情基础。",health:"生气主肝气，要注意肝胆方面的问题。",career:"适合公关、销售、中介等需要人际交往的工作。"
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
    numbers: [19, 91, 78, 87, 34, 43, 26, 62],,pairMeanings:{"19":"延年最强组合，主大事业、大领导力。适合做一把手。","26":"延年组合，事业发展顺利。","34":"延年组合，事业财运双旺。","43":"延年组合，工作能力强。","62":"延年组合，执行力强，做事有条理。","78":"延年组合，做事情有始有终，执行力强。","87":"延年组合，管理和领导能力强。","91":"延年次强组合，事业心极强，专业能力突出。"},star7:"开阳·武曲星（金）",strengths:"事业心强、有领导力、专业能力突出、执行力强",weaknesses:"工作狂倾向、容易操劳、固执己见",personality:"延年磁场强的人事业心很强，有领导才能和决策力。做事有主见，有责任心。",wealth:"延年主事业财，财富来自个人能力和专业成就。",feelings:"延年磁场对感情较为理性。不善于表达感情，但一旦认定就会很专一。",marriage:"婚姻中容易以自我为中心，需要学会平衡事业和家庭。",health:"延年主心脑，容易有心脑血管方面的压力。",career:"延年是最强的事业磁场。适合做管理者、创业者、专业技术人才。"
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
    numbers: [11, 22, 88, 99, 77, 66, 44, 33],,pairMeanings:{"11":"伏位最强组合，有超强的耐心和毅力，适合长期积累。","22":"伏位组合，做事有耐心，但容易犹豫不决。","33":"伏位组合，有生命力但需要时间成长。","44":"伏位组合，做事有条理但进展较慢。","66":"伏位组合，表面顺利但实际需耐心等待。","77":"伏位组合，家庭稳定，事业进展较慢。","88":"伏位组合，表面风光但实际进展缓慢。","99":"伏位组合，适合做需要长期投入的事情。"},star7:"伏位（辅星）",strengths:"有耐心毅力、等待机会、一鸣惊人",weaknesses:"不易变动、被动保守、不敢冒险、易有外债",personality:"处事沉着冷静，脚踏实地，一步一个脚印。有耐心有耐力，善于等待时机。",wealth:"财富需要时间积累，辛苦赚钱，保守求财，喜欢稳定的获利或持续的收入。",feelings:"思想保守、心神不宁，没有安全感。内心矛盾，情感不容易动情。",marriage:"很多人都是非自愿性结婚，婚后平淡无奇。稳定才是婚姻最大的特征。",health:"容易引发心脏或脑部方面的疾病，属于潜藏性的慢性疾病。",career:"喜欢等待时机，拖延，卧虎藏龙。想前进且无奈，没有安全感。"
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
    numbers: [17, 71, 89, 98, 64, 46, 32, 23],,pairMeanings:{"17":"祸害最强组合，主大是非。口舌之争较多。","23":"祸害组合，容易有小人作祟。","32":"祸害组合，口才不错但要注意说话方式。","46":"祸害组合，容易因说话不当影响人际关系。","64":"祸害组合，财运容易因口舌而流失。","71":"祸害组合，说话直接易得罪人。","89":"祸害组合，靠口才赚钱但易惹是非。","98":"祸害组合，事业发展中容易有口舌之争。"},star7:"天玑·禄存星（土）",strengths:"能言善辩、口才好、反应快",weaknesses:"口舌是非多、易得罪人、小人多、身体欠佳",personality:"祸害磁场强的人能言善辩，口才出众。反应快，思维敏捷。但说话直接容易得罪人。",wealth:"祸害主是非财，赚钱容易与人发生争执。适合靠口才赚钱的职业。",feelings:"祸害磁场的人感情中容易争吵，说话不饶人。需要学会控制情绪和言语。",marriage:"婚姻中需要多沟通，避免因小事争吵。需要学会柔和表达。",health:"祸害主呼吸系统，容易出现咽喉炎、气管炎等问题。",career:"适合销售、律师、主持、讲师等靠口才吃饭的职业。"
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
    numbers: [12, 21, 69, 96, 84, 48, 37, 73],,pairMeanings:{"12":"绝命最强组合，主大起大落。敢拼敢闯但风险很大。","21":"绝命组合，投资运强但风险也大。","37":"绝命组合，感情方面容易有波折。","48":"绝命组合，财运起伏大。","69":"绝命组合，看似顺利但暗藏危机。","73":"绝命组合，事业冲劲足但风险也大。","84":"绝命组合，投资容易失利。","96":"绝命组合，容易有意外破财。"},star7:"摇光·破军星（金）",strengths:"有冲劲、敢冒险、行动力强、能抓住机会",weaknesses:"冲动易怒、破财风险高、投资失利、大起大落",personality:"绝命磁场强的人敢拼敢闯，行动力强，有冒险精神。但容易冲动，做事不考虑后果。",wealth:"绝命主偏财，容易有大起大落的财运。赚钱快花钱也快，不容易存住钱。",feelings:"绝命磁场的人感情强烈，爱憎分明。对感情投入很深，但也容易因冲动而分手。",marriage:"婚姻中容易有波折，需要学会包容和冷静。",health:"绝命主心脑血管，容易出现高血压、心脏病等问题。",career:"适合创业、投资、冒险性行业。不适合安稳的固定工作。"
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
    numbers: [16, 61, 74, 47, 38, 83, 92, 29],,pairMeanings:{"16":"六煞最强组合，主烂桃花。感情复杂。","29":"六煞组合，容易陷入感情纠葛。","38":"六煞组合，情感丰富但不稳定。","47":"六煞组合，情绪化严重。","61":"六煞组合，情绪容易波动。","74":"六煞组合，感情不顺，容易因情破财。","83":"六煞组合，适合服务业但要注意情绪管理。","92":"六煞组合，长期的感情困扰。"},star7:"天权·文曲星（水）",strengths:"情感丰富、艺术天赋、服务意识强",weaknesses:"烂桃花多、情绪不稳、忧郁焦虑、缺乏安全感",personality:"六煞磁场强的人情感丰富，心思细腻，有艺术天赋。但情绪不稳定，容易忧郁焦虑。",wealth:"六煞主服务业财，适合通过服务他人赚钱。但需要防范因感情问题破财。",feelings:"六煞是烂桃花星，感情比较复杂。容易有多段感情经历。",marriage:"婚姻中容易因为情绪化和烂桃花而产生问题。",health:"六煞主神经系统，容易出现失眠、焦虑、抑郁等精神问题。",career:"适合美容、餐饮、咨询、设计等服务业。"
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
    numbers: [18, 81, 79, 97, 36, 63, 42, 24],,pairMeanings:{"18":"五鬼最强组合，主大变动。才华横溢但波折多。","24":"五鬼组合，思维活跃但有想法难落地。","36":"五鬼组合，靠创意和才华赚钱。","42":"五鬼组合，容易想太多，行动力不足。","63":"五鬼组合，事业变动大，适合灵活的工作。","79":"五鬼组合，感情方面容易有变动。","81":"五鬼组合，创意能力强，但需要注意安全和健康。","97":"五鬼组合，人生变动较多。"},star7:"玉衡·廉贞星（火）",strengths:"聪明有才华、创意无限、思维活跃",weaknesses:"变动频繁、血光之灾、熬夜伤身、人生波折",personality:"五鬼磁场强的人非常聪明，思维活跃，创意无限。但人生变动较大，容易有意外波折。",wealth:"五鬼主偏财，赚钱靠创意和点子。适合策划、设计、研发等创意行业。",feelings:"五鬼磁场的人感情多变，容易喜新厌旧。需要学会稳定感情。",marriage:"婚姻中变动较大，需要双方共同努力经营。",health:"五鬼主血光，需要注意意外伤害、车祸等。也容易有心血管方面的隐患。",career:"适合策划、设计、IT、研发、创意等需要灵感的行业。"
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
