export interface ChapterData {
  id: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  highlights: string[];
  bgImagePrompt: string;
  theme: {
    bg: string;
    accent: string;
    text: string;
    gradient: string;
  };
}

export interface SummaryRow {
  perspective: string;
  answer: string;
}

export const chapters: ChapterData[] = [
  {
    id: 'biology',
    title: '生物学视角',
    subtitle: '物种分类 vs 功能属性',
    bgImagePrompt: 'abstract DNA helix, biological cell structure, science microscopic, deep blue atmosphere',
    paragraphs: [
      '从生物学分类来看，"人"（Homo sapiens）是一个物种名称。只要是这个物种的成员，无论死活，在分类学上都属于"人"。一具人类遗体在生物学意义上仍然属于人类——它的DNA、骨骼结构、细胞组织都指向同一个物种。',
      '但亚里士多德曾区分"自然种类"和"功能概念"——人既属于人类这个物种（自然种类），也是"有理性的、活着的存在"（功能概念）。死亡之后，自然种类的属性还在，但功能属性已经消失。',
      '这就引出了一个深刻的问题：当我们说"他是人"时，我们到底是在做生物学分类，还是在描述一种活着的状态？'
    ],
    highlights: [
      '生物学上，一具遗体仍然属于人类物种',
      '亚里士多德：自然种类 vs 功能概念',
      '"人"的生物学定义和日常使用之间存在裂缝'
    ],
    theme: {
      bg: '#080c14',
      accent: '#4a8fe0',
      text: '#c8d8f0',
      gradient: 'linear-gradient(135deg, #080c14 0%, #0d1a30 50%, #080c14 100%)'
    }
  },
  {
    id: 'everyday',
    title: '日常语言视角',
    subtitle: '语用中的含义漂移',
    bgImagePrompt: 'abstract language conversation, floating speech bubbles, warm amber tones, atmospheric',
    paragraphs: [
      '回到日常用语中，我们会发现一个有趣的现象：我们几乎不会指着一具遗体说"这是一个人"，而是说"这是一具尸体"。我们说"他生前是个人好人"——用过去时来描述。',
      '在日常对话中，"人"这个词确实更倾向于指向活着的个体。"那边有个人"自然指的是一个活人，而不是一具遗体或一个概念。这表明在日常语用中，"活着"是"人"这个词的核心语义特征。',
      '但事情并不绝对——我们同时也会说"他是一个伟大的人"来谈论孔子、苏格拉底这些已故的思想家。只不过这种用法有时间的梯度：刚去世的人我们仍用现在时，去世久远的人就用过去时了。'
    ],
    highlights: [
      '日常用语中，"人"默认指向活着的个体',
      '对逝者的称呼随死亡时间推移而渐变',
      '语言使用不是非黑即白的'
    ],
    theme: {
      bg: '#120c08',
      accent: '#d4956a',
      text: '#f0e0d0',
      gradient: 'linear-gradient(135deg, #120c08 0%, #2a1a10 50%, #120c08 100%)'
    }
  },
  {
    id: 'philosophy',
    title: '哲学经典视角',
    subtitle: '洛克、灵魂与人格同一性',
    bgImagePrompt: 'ancient marble statue face profile, classical greek philosophy, dark purple moody lighting',
    paragraphs: [
      '洛克在《人类理解论》中提出了一个影响深远的观点：人格同一性不依赖于实体（无论物质还是灵魂），而依赖于意识——即记忆和自我意识的连续性。只要你能记住过去的自己，你就是同一个人。',
      '从这个角度来说，"人"的本质是有意识、有理性、有自我认知能力的存在。当一个人失去意识且不可逆地无法恢复时（如脑死亡），洛克派的哲学家会倾向于认为：这个人格的连续性已经中断了。',
      '但这也引发了著名的"忒修斯之船"悖论：如果一个人全身细胞都替换了一遍，他还是原来那个人吗？如果一个人的大脑被移植到另一个身体里，他在哪里？这些问题至今没有定论。'
    ],
    highlights: [
      '洛克：人格同一性在于意识的连续性',
      '脑死亡——人格连续性的终结？',
      '忒修斯之船：人的同一性边界在哪里'
    ],
    theme: {
      bg: '#0e0a12',
      accent: '#b08ad0',
      text: '#e0d0f0',
      gradient: 'linear-gradient(135deg, #0e0a12 0%, #1e1430 50%, #0e0a12 100%)'
    }
  },
  {
    id: 'legal',
    title: '法律视角',
    subtitle: '法律拟制中的人',
    bgImagePrompt: 'courthouse pillars justice scales, dark academic atmosphere, structured geometric composition',
    paragraphs: [
      '法律对"人"的定义异常精妙。"自然人"的法律人格从出生开始，到死亡终止。一旦死亡，法律上的"人"就消失了——你的权利终止、遗产被继承、合同关系解除。在法律眼中，死者不叫"人"，叫"死者"或"被继承人"。',
      '更有趣的是"法人"（公司）——法律可以创造出一个"人"，它没有生物学意义上的生死，只有成立和解散。法人可以拥有财产、签订合同、起诉和被起诉。这里"人"完全是一种法律拟制，和"活着"毫无关系。',
      '所以从法律角度看：自然人的"人"确实依赖于活着的状态；而法人的"人"则彻底脱离了生物学意义。这本身就说明"人"这个概念已经被大大扩展了。'
    ],
    highlights: [
      '自然人：法律人格随死亡消失',
      '法人：一种与"活着"无关的法律拟制',
      '法律本身已经扩展了"人"的概念边界'
    ],
    theme: {
      bg: '#0c0c0a',
      accent: '#8a9a6a',
      text: '#d8e0c8',
      gradient: 'linear-gradient(135deg, #0c0c0a 0%, #1a1e14 50%, #0c0c0a 100%)'
    }
  },
  {
    id: 'social',
    title: '社会关系视角',
    subtitle: '人格的社会延续',
    bgImagePrompt: 'abstract network connected people nodes, social web weave, teal dark moody tones',
    paragraphs: [
      '在实际生活中，我们经常用现在时谈论已故的伟大人物——"孔子是伟大的思想家"。这暗示着"人"的人格可以在社会关系中延续，超越肉体的死亡。',
      '社会身份在时间中的投射有一个有趣的梯度：刚去世的亲人，我们仍说"他是……"（现在时）；去世多年的历史人物，我们说"他曾经是……"（过去时）；而远古神话人物，我们几乎不用"人"来称呼了。',
      '这说明社会对"人"的认定不是生物学的二分法，而是一个渐变的连续谱。一个人"成为人"的程度，取决于ta在社会关系网络中的活跃度和影响力。'
    ],
    highlights: [
      '人格可以在社会关系中超越肉体死亡',
      '"人"的认定是一个渐变谱，而非二分法',
      '社会影响力决定了"人"的延续程度'
    ],
    theme: {
      bg: '#0a0e10',
      accent: '#5a9a9a',
      text: '#c8e0e0',
      gradient: 'linear-gradient(135deg, #0a0e10 0%, #10202a 50%, #0a0e10 100%)'
    }
  },
  {
    id: 'phenomenology',
    title: '现象学视角',
    subtitle: '海德格尔与"向死而生"',
    bgImagePrompt: 'abstract void dark light beam, existential atmosphere, monochrome gradient deep shadows',
    paragraphs: [
      '海德格尔在《存在与时间》中提出，"人"（他称之为"Dasein"——此在）的本质是"向死而生"（Sein zum Tode）。这是一个颠覆性的观点：死亡不是生命的终点，而是生命的内在组成部分。',
      '人之所以为人，恰恰是因为人始终知道自己会死。一只猫不会知道自己终将死亡，所以它不"存在"于海德格尔所说的意义上。正是因为对死亡的意识，人才会追问意义、做出选择、承担责任。',
      '从这个角度看，"活着"和"死亡"不是两个对立的状态，而是同一存在方式的阴阳两面。一个没有死亡意识的"人"反而不是真正的人。所以"人"这个存在本身就包含了死亡。'
    ],
    highlights: [
      '海德格尔：人是"向死而生"的存在',
      '死亡不是终点，而是生命的内在组成部分',
      '没有死亡意识，就没有真正的"人"'
    ],
    theme: {
      bg: '#080808',
      accent: '#c0c0c0',
      text: '#e0e0e0',
      gradient: 'linear-gradient(135deg, #080808 0%, #181818 50%, #080808 100%)'
    }
  },
  {
    id: 'eastern',
    title: '东方哲学视角',
    subtitle: '佛学、儒家、庄子的回答',
    bgImagePrompt: 'zen garden raked sand pattern, minimal japanese temple silhouette, bamboo, earthy warm tones',
    paragraphs: [
      '佛教认为"人"是五蕴（色受想行识）的暂时聚合，没有固定不变的自我。所谓的"活着"只是因果链条中的一个环节，死亡不是终结，而是下一个轮回的开始。执着于"我"本身就是一种无明——在这个框架下，你的问题本身就已经预设了错误的假设。',
      '儒家则更看重"人"的道德属性。"人之所以为人者，何以也？曰：以其有义也。"——《礼记》。人与禽兽的区别在于仁义礼智。如果一个"活人"没有道德行为，在儒家眼里反而"不配为人"；而一个"已故"的圣贤，却在文化意义上更加"活着"。',
      '庄子走得更远："方生方死，方死方生。"生死是同一过程的两面，活着的同时也在死去，死去的同时也在新生。"人"这个概念本身就是人为划分的，在道的层面没有意义。'
    ],
    highlights: [
      '佛教："人"是五蕴的暂时聚合，无固定自我',
      '儒家：道德属性比生死更决定"人"的本质',
      '庄子：方生方死，方死方生——生死本是一体'
    ],
    theme: {
      bg: '#0a0a08',
      accent: '#8a7a4a',
      text: '#d8d0c0',
      gradient: 'linear-gradient(135deg, #0a0a08 0%, #1a1810 50%, #0a0a08 100%)'
    }
  },
  {
    id: 'scifi',
    title: '超人类主义视角',
    subtitle: '科幻前沿的挑战',
    bgImagePrompt: 'futuristic brain neural interface, digital consciousness upload, cybernetic implant, cyan blue glow',
    paragraphs: [
      '如果把视野拉远，这个问题在技术前沿变得更加复杂。意识上传：如果把你的大脑扫描上传到计算机，你的肉体死了但意识在数字世界"活着"，你还是"人"吗？还是变成了"数字人格"？',
      '人体冷冻：一个人被液氮冷冻，希望在未来复苏。他现在处于"活着"和"死了"之间——医学上他是死者，法律上他是"病人"，社会意义上他是"潜在的人"。他算"人"吗？',
      '赛博格：如果一个人的身体90%被机械替换，什么时候他就不再是"人"而是"机器人"？临界点在哪里？这些思想实验表明，"人"这个概念本身正在被技术重塑，我们可能站在一个概念革命的边缘。'
    ],
    highlights: [
      '意识上传：肉体死亡，数字世界中的你还是"人"吗？',
      '人体冷冻：生与死之间的第三状态',
      '赛博格：当身体被替换到何种程度就不再是"人"？'
    ],
    theme: {
      bg: '#080a14',
      accent: '#00c8c8',
      text: '#b0e8e8',
      gradient: 'linear-gradient(135deg, #080a14 0%, #0a2030 50%, #080a14 100%)'
    }
  },
  {
    id: 'cyberpunk',
    title: '赛博朋克2077视角',
    subtitle: 'Relic芯片、灵魂杀手与数字人格',
    bgImagePrompt: 'neon city night rain street, cyberpunk dystopia, magenta blue glow, futuristic cityscape',
    paragraphs: [
      '在夜之城，Relic芯片可以存储一个人的完整人格印记——Johnny Silverhand已死去50年，但他的意识、记忆和脾气仍活在芯片中，并在V的大脑里逐步覆盖宿主意识。更极端的是灵魂杀手（Soulkiller），它能把意识数字化复制，代价是杀死原体。荒坂的"神舆"（Mikoshi）囚禁着无数这样的数字灵魂——他们有思想、有情感、渴望自由，却没有肉体。他们算"人"吗？',
      '游戏最尖锐的质问落在V身上：两个"人"共享一个大脑，谁是真正的？是占据肉体的V，还是拥有完整人格的Johnny？游戏没有给答案，只给你选择——交出身体、进入神舆、或终结一切。每一种选择，都是对"人是什么"这个问题的不同回答。'
    ],
    highlights: [
      'Relic芯片：死后50年，你的数字人格还算"人"吗？',
      '灵魂杀手与神舆：被囚禁的数字灵魂渴望自由',
      'V与Johnny——两个意识共享大脑，谁才是真正的"人"？'
    ],
    theme: {
      bg: '#0c0814',
      accent: '#ff0090',
      text: '#d0c0f0',
      gradient: 'linear-gradient(135deg, #0c0814 0%, #1a0a2e 30%, #1a0a0a 70%, #0c0814 100%)'
    }
  },
  {
    id: 'wittgenstein',
    title: '维特根斯坦视角',
    subtitle: '"家族相似"与语言游戏',
    bgImagePrompt: 'abstract tangled threads network weave, family resemblance concept, dark rose purple tones',
    paragraphs: [
      '维特根斯坦在《哲学研究》中提出了"家族相似"理论，可能是解答你问题最有力的工具。他认为"人"没有一个单一的本质特征（如"活着"）来定义。相反，"人"这个词的各个用法相互重叠，像一个家族成员之间的相似性。',
      'A和B共享"有生命"；B和C共享"有社会关系"；C和D共享"有道德地位"；D和E共享"有法律权利"……没有任何一个特征是所有用法共有的。这就是"家族相似"——一根绳子的强度不在于某一根纤维贯穿始终，而在于无数纤维的相互缠绕。',
      '所以你的问题可能没有唯一的正确答案。"人"就是一个有着松散联系的家族概念。试图用一个标准（活着还是死了）来框住它，本身就是对语言本质的误解。'
    ],
    highlights: [
      '维特根斯坦："人"没有单一的本质特征',
      '家族相似——如绳索由无数纤维交织而成',
      '试图用一个标准框住"人"，可能误解了语言的本质'
    ],
    theme: {
      bg: '#0c080a',
      accent: '#d0608a',
      text: '#e0c8d0',
      gradient: 'linear-gradient(135deg, #0c080a 0%, #1e1018 50%, #0c080a 100%)'
    }
  }
];

export const summaryData: SummaryRow[] = [
  { perspective: '生物学', answer: '算——仍属人类物种，但功能已消失' },
  { perspective: '日常语言', answer: '活着时最典型，死后逐渐脱离核心用法' },
  { perspective: '哲学经典（洛克）', answer: '意识连续性中断后，人格不再延续' },
  { perspective: '法律', answer: '自然人——不算；法人——与活着无关' },
  { perspective: '社会关系', answer: '介于算与不算之间，取决于社会影响' },
  { perspective: '现象学（海德格尔）', answer: '死亡是"人"的内在组成部分' },
  { perspective: '东方哲学', answer: '执着于"人"的概念本身就是错觉' },
  { perspective: '超人类主义', answer: '概念正在被技术重塑，边界模糊' },
  { perspective: '赛博朋克2077', answer: '人格可被数字化——"人"需要重新定义' },
  { perspective: '维特根斯坦', answer: '没有一个定义能覆盖所有用法' }
];

export const finalThoughts = [
  '所以，"人"不完全等于"活着的状态"——但活着确实是"人"这个概念最核心、最典型的使用场景。当你离开核心场景越远（脑死亡、冷冻、意识上传），分歧就越大——而正是这些分歧，才是最有趣的地方。',
  '换句话说——当你离开核心场景越远，分歧就越大。脑死亡、冷冻、意识上传、数字人格……每一种边缘状态都在逼问同一个问题："人"的边界，到底由什么来划定？',
  '也许"人"这个词就像一束光——在不同的棱镜下折射出不同的颜色。每种颜色都是真实的，但没有一种颜色能代表整束光。'
];
