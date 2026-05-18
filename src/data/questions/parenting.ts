import type { Question } from '../types'

// Spectrum: low = child-centric/intensive (child as life project) · high = independent person approach (child as person to support)
export const parentingQuestions: Question[] = [
  // ── Quick tier (0-2) ─────────────────────────────────────────────────────
  {
    text: '关于是否要孩子，你目前的真实想法是：',
    textEn: 'Your honest current thoughts about having children:',
    weight: 2,
    options: [
      { text: '确定想要，这是人生很重要的体验', textEn: "Definitely want children -- it's an important life experience", score: 2 },
      { text: '倾向于要，但需要经济和心理准备到位', textEn: "Lean toward yes, but need to be financially and emotionally ready first", score: 4 },
      { text: '开放态度，取决于未来状态和伴侣意愿', textEn: "Open -- depends on how life unfolds and what your partner wants", score: 6 },
      { text: '倾向于不要，更想把精力投入其他事', textEn: "Lean toward not having children -- prefer to invest energy elsewhere", score: 9 },
    ],
  },
  {
    text: '如果有孩子，在教育方式上你更倾向：',
    textEn: 'If you have children, your preferred approach to their education would be:',
    options: [
      { text: '给孩子最好的资源，尽全力铺路', textEn: "Provide the best resources possible and pave the way for them", score: 3 },
      { text: '提供支持但让孩子自己探索和选择', textEn: "Provide support but let them explore and choose for themselves", score: 7 },
      { text: '以品格和独立思考为核心，成绩次之', textEn: "Prioritize character and independent thinking over grades", score: 8 },
      { text: '跟着主流走，别掉队就行', textEn: "Follow mainstream norms -- just don't fall behind", score: 2 },
    ],
  },
  {
    text: '关于育儿的责任分配，你认为：',
    textEn: 'How should parenting responsibilities be divided?',
    options: [
      { text: '应该尽量平等，各承担50%', textEn: "As equally as possible -- roughly 50/50", score: 6 },
      { text: '根据各自工作和擅长领域灵活分配', textEn: "Flexibly, based on each person's work and strengths", score: 8 },
      { text: '主要由收入较低的一方承担更多', textEn: "The lower earner naturally takes on more", score: 2 },
      { text: '愿意为孩子牺牲自己的事业发展', textEn: "Willing to sacrifice personal career advancement for the child", score: 4 },
    ],
  },
  // ── Standard tier (3-6) ──────────────────────────────────────────────────
  {
    text: '如果你们的孩子成绩一直在班级中游，你会：',
    textEn: 'Your child consistently performs around the middle of their class. You would:',
    options: [
      { text: '积极干预----增加辅导，找出原因', textEn: "Intervene actively -- add tutoring and identify the cause", score: 3 },
      { text: '了解孩子是否开心、对什么感兴趣', textEn: "Ask whether they're happy and what they're interested in", score: 7 },
      { text: '尊重孩子的节奏，中游未必是问题', textEn: "Respect their pace -- being in the middle isn't necessarily a problem", score: 8 },
      { text: '给TA更多压力，成绩代表未来', textEn: "Apply more pressure -- grades determine the future", score: 2 },
    ],
  },
  {
    text: '孩子16岁说想放弃一直参加的课外活动（比如钢琴或运动队），你会：',
    textEn: "Your 16-year-old wants to quit an extracurricular they've done for years (e.g., piano, sports team). You would:",
    options: [
      { text: '坚持让TA继续----学了这么久不能半途而废', textEn: "Insist they continue -- quitting after all this time isn't right", score: 2 },
      { text: '认真了解原因，如果只是怕困难就鼓励坚持', textEn: "Find out why -- if it's just fear of difficulty, encourage them to push through", score: 5 },
      { text: '理解TA，但一起讨论最后的收尾方式', textEn: "Understand their decision but discuss how to wrap things up responsibly", score: 7 },
      { text: '支持，是TA的人生TA有权决定', textEn: "Support them -- it's their life and their choice", score: 9 },
    ],
  },
  {
    text: '你对孩子使用手机和平板的态度是：',
    textEn: "Your approach to your child's phone and tablet use:",
    options: [
      { text: '严格控制，屏幕时间应该最小化', textEn: "Strict limits -- screen time should be minimized", score: 2 },
      { text: '有规则地使用，内容和时长都要管理', textEn: "Structured use with managed content and time", score: 5 },
      { text: '适度引导，主要培养自我管理能力', textEn: "Moderate guidance focused on building self-management skills", score: 7 },
      { text: '这是他们那个时代的工具，过度限制适得其反', textEn: "It's the tool of their generation -- excessive restriction backfires", score: 9 },
    ],
  },
  {
    text: '孩子未来选择了一条你完全不理解的人生路（比如做自媒体或搞艺术），你会：',
    textEn: "Your grown child chooses a path you completely don't understand (e.g., becoming a content creator or artist). You would:",
    options: [
      { text: '难以接受，会持续表达反对意见', textEn: "Find it hard to accept and keep expressing your opposition", score: 2 },
      { text: '担心但尽量不干涉', textEn: "Worry, but try not to interfere", score: 5 },
      { text: '支持，但会提出我的顾虑，供TA参考', textEn: "Support them, but share your concerns for their reference", score: 7 },
      { text: '完全支持，这是TA的人生', textEn: "Fully support -- it's their life", score: 9 },
    ],
  },
  // ── Full tier (7-10) ─────────────────────────────────────────────────────
  {
    text: '你想要孩子，最核心的原因是：',
    textEn: 'The core reason you want children is:',
    options: [
      { text: '体验养育另一个生命的感受', textEn: "To experience nurturing another life", score: 5 },
      { text: '让家庭更完整，延续家族关系', textEn: "To complete the family and continue family bonds", score: 3 },
      { text: '老了有人陪伴和照顾', textEn: "To have companionship and care in old age", score: 2 },
      { text: '我想支持一个新的独立个体成长', textEn: "To support a new independent person as they grow", score: 8 },
    ],
  },
  {
    text: '如果有了孩子，育儿方式上出现严重分歧（比如一方主张严格，另一方主张宽松），你会：',
    textEn: 'If you have children and face a serious parenting disagreement (e.g., one of you is strict, the other lenient), you would:',
    options: [
      { text: '我的方式更对，最终TA应该跟我一致', textEn: "Your approach is better -- they should ultimately align with you", score: 2 },
      { text: '找一个都能接受的中间立场', textEn: "Find a middle ground both can accept", score: 6 },
      { text: '引入外部参考（书、咨询师），一起学习', textEn: "Bring in outside resources (books, counselor) and learn together", score: 8 },
      { text: '各自负责不同方面，减少正面冲突', textEn: "Each handle different areas to minimize direct conflict", score: 4 },
    ],
  },
  {
    text: '孩子出生后，你预期家务和育儿的分配会：',
    textEn: 'After a child is born, how do you expect household and childcare responsibilities to be divided?',
    options: [
      { text: '大体平等，我们提前商量好', textEn: "Roughly equal -- we'll work it out in advance", score: 7 },
      { text: '暂时由收入少的那方多承担，等孩子大了再调整', textEn: "Temporarily more on whoever earns less, revisited as the child grows", score: 4 },
      { text: '顺其自然，谁有空谁做', textEn: "Whoever has time does it -- see how things fall", score: 5 },
      { text: '坦白说，我担心分配不均----想提前谈清楚', textEn: "Honestly, I worry about imbalance and want to discuss it beforehand", score: 8 },
    ],
  },
  {
    text: '你的父母或对方的父母非常想参与带孩子，几乎等于长期同住。你会：',
    textEn: 'Either set of parents very much wants to be involved in raising the child, practically living with you long-term. You would:',
    options: [
      { text: '欢迎，有人帮忙太好了', textEn: "Welcome it -- having help is great", score: 2 },
      { text: '接受，但设定清楚育儿决策权归我们', textEn: "Accept, but clearly establish that parenting decisions belong to you two", score: 6 },
      { text: '感谢但婉拒，核心育儿责任应该由我们自己承担', textEn: "Thank them but politely decline -- core parenting should be on you", score: 8 },
      { text: '取决于是哪方的父母、关系是否融洽', textEn: "Depends on whose parents and how the relationship is", score: 5 },
    ],
  },
]
