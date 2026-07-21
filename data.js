const publications = [
  {
    id: 'normguard',
    title: 'NormGuard: Reward-Preserving Norm Constraints in Flow-Matching Reinforcement Learning',
    image: 'images/rewardpreserving.png',
    authors: [
      { name: 'Tianlin Pan', isSelf: true, equal: true },
      { name: 'Lianyu Pang', url: 'https://scholar.google.com/citations?user=Ld-2assAAAAJ&hl=en', equal: true },
      { name: 'Cheng Da', url: 'https://scholar.google.com/citations?hl=en&user=A1FqXioAAAAJ' },
      { name: 'Huan Yang', url: 'https://hyang0511.github.io/' },
      { name: 'Changqian Yu', url: 'https://yu-changqian.github.io/' },
      { name: 'Kun Gai', url: 'https://scholar.google.com/citations?user=PXO4ygEAAAAJ&hl=zh-CN' },
      { name: 'Wenhan Luo', url: 'https://whluo.github.io/' }
    ],
    venue: 'arXiv Preprint, 2026',
    links: [
      { type: 'arxiv', url: 'https://arxiv.org/abs/2606.27771', icon: 'fa-solid fa-file-lines', text: 'Paper' }
    ],
    highlighted: true
  },
  {
    id: 'maskalign',
    title: 'MaskAlign: Token-Subset Representation Alignment for Efficient Diffusion Training',
    image: 'images/maskalign.png',
    authors: [
      { name: 'Lianyu Pang', url: 'https://scholar.google.com/citations?user=Ld-2assAAAAJ&hl=en', equal: true },
      { name: 'Tianlin Pan', isSelf: true, equal: true },
      { name: 'Cheng Da', url: 'https://scholar.google.com/citations?hl=en&user=A1FqXioAAAAJ' },
      { name: 'Changqian Yu', url: 'https://yu-changqian.github.io/' },
      { name: 'Huan Yang', url: 'https://hyang0511.github.io/' },
      { name: 'Kun Gai', url: 'https://scholar.google.com/citations?user=PXO4ygEAAAAJ&hl=zh-CN' },
      { name: 'Song Guo', url: 'https://cse.hkust.edu.hk/~songguo/' },
      { name: 'Wenhan Luo', url: 'https://whluo.github.io/' }
    ],
    venue: 'arXiv Preprint, 2026',
    links: [
      { type: 'arxiv', url: 'https://arxiv.org/abs/2606.08788', icon: 'fa-solid fa-file-lines', text: 'Paper' }
    ],
    highlighted: true
  },
  {
    id: 'nova',
    title: 'NOVA: Sparse Control, Dense Synthesis for Pair-Free Video Editing',
    image: 'images/nova.png',
    authors: [
      { name: 'Tianlin Pan', isSelf: true },
      { name: 'Jiayi Dai', url: 'https://openreview.net/profile?id=~Jiayi_Dai5' },
      { name: 'Chenpu Yuan', url: 'https://openreview.net/profile?id=~Chenpu_Yuan2' },
      { name: 'Zhengyao Lv', url: 'https://scholar.google.com/citations?user=FkkaUgwAAAAJ&hl=en' },
      { name: 'Binxin Yang', url: 'https://binxinyang.github.io/' },
      { name: 'Hubery Yin', url: 'https://openreview.net/profile?id=~Hubery_Yin1' },
      { name: 'Chen Li', url: 'https://scholar.google.com/citations?user=WDJL3gYAAAAJ&hl=zh-CN' },
      { name: 'Jing Lyu', url: 'https://openreview.net/profile?id=~Jing_LYU2' },
      { name: 'Caifeng Shan', url: 'https://caifeng-shan.github.io/' },
      { name: 'Chenyang Si', url: 'https://chenyangsi.top/' }
    ],
    venue: 'CVPR 2026',
    links: [
      { type: 'arxiv', url: 'https://arxiv.org/abs/2603.02802', icon: 'fa-solid fa-file-pdf', text: 'Paper' },
      { type: 'code', url: 'https://github.com/WeChatCV/NovaEdit', icon: 'fa-brands fa-github', text: 'Code' }
    ],
    highlighted: true
  },
  {
    id: 'stableworld',
    title: 'StableWorld: Towards Stable and Consistent Long Interactive Video Generation',
    image: 'images/stableworld.png',
    authors: [
      { name: 'Ying Yang', url: 'https://github.com/xbyym' },
      { name: 'Zhengyao Lv', url: 'https://scholar.google.com/citations?user=FkkaUgwAAAAJ&hl=en' },
      { name: 'Tianlin Pan', isSelf: true },
      { name: 'Haofan Wang', url: 'https://haofanwang.github.io/' },
      { name: 'Binxin Yang', url: 'https://binxinyang.github.io/' },
      { name: 'Hubery Yin', url: 'https://openreview.net/profile?id=~Hubery_Yin1' },
      { name: 'Chen Li', url: 'https://scholar.google.com/citations?user=WDJL3gYAAAAJ&hl=zh-CN' },
      { name: 'Ziwei Liu', url: 'https://liuziwei7.github.io/' },
      { name: 'Chenyang Si', url: 'https://chenyangsi.top/' }
    ],
    venue: 'arXiv Preprint, 2026',
    links: [
      { type: 'project', url: 'https://sd-world.github.io/', icon: 'fa-solid fa-globe', text: 'Project' },
      { type: 'arxiv', url: 'https://arxiv.org/abs/2601.15281', icon: 'fa-solid fa-file-pdf', text: 'Paper' },
      { type: 'code', url: 'https://github.com/xbyym/StableWorld', icon: 'fa-brands fa-github', text: 'Code' }
    ],
    highlighted: false
  },
  {
    id: 'multiworld',
    title: 'MultiWorld: A Multi-View World Model with Spatiotemporally Synchronized Interaction',
    image: '',
    authors: [
      { name: 'Jiayi Dai' },
      { name: 'Zhengyao Lv' },
      { name: 'Chenpu Yuan' },
      { name: 'Xiansong Song' },
      { name: 'Haofan Wang' },
      { name: 'Tianlin Pan', isSelf: true },
      { name: 'Yueming Lyu' },
      { name: 'Youjin Lee' },
      { name: 'Jaeyun Jeong' },
      { name: 'Zikun Liu' },
      { name: 'Liang Wang' },
      { name: 'Chenyang Si' }
    ],
    venue: 'ACMMM 2026',
    links: [],
    highlighted: false
  },
  {
    id: 'diversear',
    title: 'Boosting Diversity in Bitwise Autoregressive Image Generation',
    image: 'images/diverse_ar.png',
    authors: [
      { name: 'Ying Yang', url: 'https://openreview.net/profile?id=%7EYing_Yang2', equal: true },
      { name: 'Zhengyao Lv', url: 'https://scholar.google.com/citations?user=FkkaUgwAAAAJ&hl=en', equal: true },
      { name: 'Tianlin Pan', isSelf: true },
      { name: 'Haofan Wang', url: 'https://haofanwang.github.io/' },
      { name: 'Binxing Yang', url: 'https://binxinyang.github.io/' },
      { name: 'Hubery Yin', url: 'https://openreview.net/profile?id=~Hubery_Yin1' },
      { name: 'Chen Li', url: 'https://scholar.google.com/citations?user=WDJL3gYAAAAJ&hl=zh-CN' },
      { name: 'Chenyang Si', url: 'https://chenyangsi.github.io/' }
    ],
    venue: 'CVPR 2026 Findings',
    links: [
      { type: 'project', url: 'https://diverse-ar.github.io/', icon: 'fa-solid fa-globe', text: 'Project' },
      { type: 'arxiv', url: 'https://arxiv.org/abs/2512.02931', icon: 'fa-solid fa-file-pdf', text: 'Paper' },
      { type: 'code', url: 'https://github.com/xbyym/DiverseAR', icon: 'fa-brands fa-github', text: 'Code' }
    ],
    highlighted: false
  },
  {
    id: 'taca',
    title: 'Rethinking Cross-Modal Interaction in Multimodal Diffusion Transformers',
    image: 'images/taca.png',
    authors: [
      { name: 'Zhengyao Lv', url: 'https://scholar.google.com/citations?user=FkkaUgwAAAAJ&hl=en', equal: true },
      { name: 'Tianlin Pan', isSelf: true, equal: true },
      { name: 'Chenyang Si', url: 'https://chenyangsi.github.io/' },
      { name: 'Zhaoxi Chen', url: 'https://frozenburning.github.io/' },
      { name: 'Wangmeng Zuo', url: 'https://homepage.hit.edu.cn/wangmengzuo' },
      { name: 'Ziwei Liu', url: 'https://liuziwei7.github.io/' },
      { name: 'Kwan-Yee K. Wong', url: 'https://i.cs.hku.hk/~kykwong/' }
    ],
    venue: 'ICCV 2025',
    links: [
      { type: 'project', url: 'https://vchitect.github.io/TACA/', icon: 'fa-solid fa-globe', text: 'Project' },
      { type: 'arxiv', url: 'https://arxiv.org/abs/2506.07986', icon: 'fa-solid fa-file-pdf', text: 'Paper' },
      { type: 'code', url: 'https://github.com/Vchitect/TACA', icon: 'fa-brands fa-github', text: 'Code' }
    ],
    highlighted: true
  },
  {
    id: 'dcm',
    title: 'Dual-Expert Consistency Model for Efficient and High-Quality Video Generation',
    image: 'images/dcm.jpg',
    authors: [
      { name: 'Zhengyao Lv', url: 'https://scholar.google.com/citations?user=FkkaUgwAAAAJ&hl=en', equal: true },
      { name: 'Chenyang Si', url: 'https://chenyangsi.github.io/', equal: true },
      { name: 'Tianlin Pan', isSelf: true },
      { name: 'Zhaoxi Chen', url: 'https://frozenburning.github.io/' },
      { name: 'Kwan-Yee K. Wong', url: 'https://i.cs.hku.hk/~kykwong/' },
      { name: 'Yu Qiao', url: 'https://mmlab.siat.ac.cn/yuqiao' },
      { name: 'Ziwei Liu', url: 'https://liuziwei7.github.io/' }
    ],
    venue: 'ICCV 2025',
    links: [
      { type: 'project', url: 'https://vchitect.github.io/DCM/', icon: 'fa-solid fa-globe', text: 'Project' },
      { type: 'arxiv', url: 'https://arxiv.org/abs/2506.03123', icon: 'fa-solid fa-file-pdf', text: 'Paper' },
      { type: 'code', url: 'https://github.com/Vchitect/DCM', icon: 'fa-brands fa-github', text: 'Code' }
    ],
    highlighted: false
  }
];

const experiences = [
  {
    id: 'kling',
    logo: 'images/logos/kling.png',
    organization: 'Kling AI, Kuaishou Technology',
    role: '',
    date: '2026.03 - Present',
    location: 'Beijing, China',
    description: 'Advised by <a href="https://scholar.google.com/citations?hl=en&user=A1FqXioAAAAJ">Cheng Da</a>, <a href="https://hyang0511.github.io/">Huan Yang</a> and <a href="https://yu-changqian.github.io/">Changqian Yu</a>'
  },
  {
    id: 'tencent',
    logo: 'images/logos/tencent.png',
    organization: 'WeChat, Tencent Inc.',
    role: '',
    date: '2025.08 - 2026.03',
    location: 'Beijing, China',
    description: 'Advised by <a href="https://binxinyang.github.io/">Binxin Yang</a> and <a href="https://scholar.google.com/citations?user=WDJL3gYAAAAJ&hl=zh-CN">Chen Li</a>'
  },
  {
    id: 'nju',
    logo: 'images/logos/nju.svg',
    organization: 'PRLab@Nanjing University',
    role: '',
    date: '2025.03 - 2026.03',
    location: 'Suzhou, China (Remote)',
    description: 'Advised by <a href="https://chenyangsi.top/">Chenyang Si</a>'
  },
  {
    id: 'ntu',
    logo: 'images/logos/ntu.png',
    organization: 'MMLab@Nanyang Technological University',
    role: '',
    date: '2024.11 - 2025.03',
    location: 'Singapore (Remote)',
    description: 'Advised by <a href="https://chenyangsi.top/">Chenyang Si</a> and <a href="https://liuziwei7.github.io/">Ziwei Liu</a>'
  }
];

const education = [
  {
    id: 'ucas',
    school: 'University of Chinese Academy of Sciences (UCAS)',
    date: '2023 - 2027 (Expected)',
    degree: 'B.E. in Artificial Intelligence',
    location: 'Beijing, China',
    detail: 'GPA: 3.95/4.00, Rank: 3/85'
  }
];

const awards = [
  {
    year: '2026',
    text: 'SenseTime Scholarship',
    detail: 'Top 30 students across China',
    isStrong: true
  },
  {
    year: '2025',
    text: 'National Scholarship',
    detail: 'Ministry of Education, China',
    isStrong: true
  },
  {
    year: '2025',
    text: 'Undergraduate "Qiyan" Program Grant',
    detail: 'Project Leader, Funded by Beijing Natural Science Foundation',
    isStrong: false
  },
  {
    year: '2025',
    text: 'First-Level Scholarship',
    detail: 'Top 5%, University of Chinese Academy of Sciences',
    isStrong: false
  }
];

const services = [
  {
    role: 'Teaching Assistant',
    detail: '<em>Introduction to Computer Sciences</em>, 25 Spring, UCAS'
  },
  {
    role: 'Reviewer',
    detail: 'CVPR 2026, ECCV 2026'
  }
];
