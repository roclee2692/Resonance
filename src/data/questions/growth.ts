import type { Question } from '../types'

// Spectrum: low = stability/routine preference · high = continuous change/growth orientation
export const growthQuestions: Question[] = [
  // ── Quick tier (0-2) ─────────────────────────────────────────────────────
  {
    text: '你每周花在学习新东西（读书、课程、技能）上的时间大约是：',
    textEn: 'How much time do you spend weekly on learning new things (reading, courses, skills)?',
    options: [
      { text: '几乎没有，工作已经够累了', textEn: "Almost none -- work is already exhausting", score: 2 },
      { text: '1-3小时，保持基本的信息输入', textEn: "1-3 hours -- keeping up with basic input", score: 4 },
      { text: '5-10小时，持续学习是习惯', textEn: "5-10 hours -- continuous learning is a habit", score: 7 },
      { text: '10小时以上，学习本身就是乐趣', textEn: "10+ hours -- learning itself is the pleasure", score: 9 },
    ],
  },
  {
    text: '如果伴侣对你说"你最近变了"，你的第一反应是：',
    textEn: "If your partner says \"you've changed lately,\" your first reaction is:",
    options: [
      { text: '紧张，变了是不是不好的信号', textEn: "Anxious -- is change a bad sign?", score: 3 },
      { text: '好奇，想知道TA观察到了什么', textEn: "Curious -- you want to know what they've noticed", score: 8 },
      { text: '自我检视，这种变化是否符合自己的方向', textEn: "Self-reflective -- checking whether the change aligns with where you want to go", score: 7 },
      { text: '无所谓，人本来就会变', textEn: "Indifferent -- people change, that's normal", score: 5 },
    ],
  },
  {
    text: '关于伴侣之间的独立空间，你认为：',
    textEn: 'Regarding personal space and independence within a relationship:',
    options: [
      { text: '在一起就应该尽量多待在一起', textEn: "Being together means spending as much time together as possible", score: 2 },
      { text: '可以有各自空间，但主要时间应共享', textEn: "Some separate space is fine, but most time should be shared", score: 4 },
      { text: '各自有独立的社交圈和兴趣是健康的', textEn: "Having separate social circles and interests is healthy", score: 7 },
      { text: '独立空间和共处时间应该大致平衡', textEn: "Personal space and shared time should be roughly balanced", score: 6 },
    ],
  },
  // ── Standard tier (3-6) ──────────────────────────────────────────────────
  {
    text: '过去一年，你的价值观或人生优先级有没有发生比较明显的变化？',
    textEn: 'Have your values or life priorities changed noticeably in the past year?',
    options: [
      { text: '几乎没有，我的核心判断比较稳定', textEn: "Barely -- your core judgments are quite stable", score: 3 },
      { text: '细节上有调整，大方向没变', textEn: "Adjusted on details, but the main direction is the same", score: 5 },
      { text: '有一些明显的变化，我在持续更新自己', textEn: "Noticeably changed -- you're continuously updating yourself", score: 7 },
      { text: '变化很大，我和一年前的自己很不一样了', textEn: "Changed a lot -- you're quite different from who you were a year ago", score: 9 },
    ],
  },
  {
    text: '你们在某个重要问题上一直有分歧（比如住哪里、要不要孩子），但都没有真正谈通。你会：',
    textEn: "You and your partner have an ongoing disagreement on a big issue (where to live, whether to have children) that's never been resolved. You would:",
    options: [
      { text: '接受这就是我们的分歧，不需要达成一致', textEn: "Accept it as a permanent difference -- you don't need to agree", score: 3 },
      { text: '继续等一个合适的时机谈', textEn: "Keep waiting for the right moment to bring it up", score: 5 },
      { text: '主动提出：这件事我们需要认真决定了', textEn: "Proactively raise it: \"We need to seriously decide on this\"", score: 8 },
      { text: '引入外部资源（咨询、书），一起找到框架', textEn: "Bring in outside resources (counseling, books) to find a framework together", score: 9 },
    ],
  },
  {
    text: '伴侣告诉你TA想做一件很不同于以往的事（换行业、学一门新语言、开始一种新生活方式）。你会：',
    textEn: 'Your partner says they want to do something very different (change industries, learn a new language, adopt a new lifestyle). You would:',
    options: [
      { text: '支持，这很令人兴奋', textEn: "Support them -- this is exciting", score: 9 },
      { text: '支持，但想多了解一下动机和计划', textEn: "Support, but want to understand the motivation and plan first", score: 7 },
      { text: '有些担心，不确定这是一时冲动还是认真的', textEn: "A bit worried -- not sure if it's an impulse or something serious", score: 4 },
      { text: '不太理解，希望TA继续走熟悉的路', textEn: "Don't really get it and wish they'd stick to the familiar path", score: 2 },
    ],
  },
  {
    text: '五年后，你希望自己和现在相比有多大的不同？',
    textEn: 'In five years, how different do you want to be from who you are today?',
    options: [
      { text: '基本一样，我对现在的自己很满意', textEn: "Basically the same -- you're satisfied with who you are now", score: 2 },
      { text: '有一些提升，但核心还是这个我', textEn: "Some improvement, but still fundamentally the same person", score: 4 },
      { text: '有明显进化，但认得出这还是我', textEn: "Noticeably evolved, but still recognizably you", score: 7 },
      { text: '很不一样----我一直希望持续地大幅成长', textEn: "Very different -- you always want to grow significantly and continuously", score: 9 },
    ],
  },
  // ── Full tier (7-10) ─────────────────────────────────────────────────────
  {
    text: '伴侣在某方面成长得比你快，TA的认知和视野已经有些超出你的舒适区。你感到：',
    textEn: 'Your partner is growing faster than you in some area, and their perspective is starting to stretch beyond your comfort zone. You feel:',
    options: [
      { text: '受到威胁，有些不安全感', textEn: "Threatened -- some insecurity", score: 2 },
      { text: '有些被落下的感觉，但会努力跟上', textEn: "A bit left behind, but motivated to catch up", score: 5 },
      { text: '被激励，这让我也想进步', textEn: "Inspired -- it makes you want to grow too", score: 8 },
      { text: '欣赏，TA的成长不需要和我一致', textEn: "Admiring -- their growth doesn't need to match yours", score: 9 },
    ],
  },
  {
    text: '对你来说，"维护一段关系"主要意味着：',
    textEn: 'To you, "maintaining a relationship" primarily means:',
    options: [
      { text: '保持稳定----少制造麻烦，避免不必要的波动', textEn: "Keeping things stable -- minimize friction and unnecessary disruption", score: 3 },
      { text: '定期检查----我们是否还在同一页上', textEn: "Regular check-ins -- making sure you're still on the same page", score: 7 },
      { text: '持续沟通----让两个人都知道彼此在哪里', textEn: "Continuous communication -- keeping each other informed about where you are", score: 8 },
      { text: '共同成长----关系应该让两个人都变得更好', textEn: "Growing together -- the relationship should make both people better", score: 9 },
    ],
  },
  {
    text: '你觉得一段长期关系需要多久"更新一次约定"（重新讨论生活方式、分工、目标）？',
    textEn: 'How often should a long-term relationship "renew its agreements" (re-discuss lifestyle, roles, and goals)?',
    options: [
      { text: '不需要----好的关系不需要刻意谈这些', textEn: "Never -- a good relationship doesn't need deliberate check-ins", score: 2 },
      { text: '遇到重大变化时再谈', textEn: "When major changes happen", score: 4 },
      { text: '每隔一两年主动复盘一次', textEn: "Proactively every year or two", score: 7 },
      { text: '越频繁越好----我喜欢定期聊这些', textEn: "As often as possible -- you enjoy these ongoing conversations", score: 9 },
    ],
  },
  {
    text: '如果你们的人生方向逐渐出现了较大分歧（比如一个想定居，一个想游走），你会：',
    textEn: 'If your life directions gradually diverge significantly (e.g., one wants to settle, one wants to roam), you would:',
    options: [
      { text: '认为这说明我们从根本上不合适', textEn: "See it as evidence you're fundamentally incompatible", score: 2 },
      { text: '很担心，但先看能不能找到妥协方案', textEn: "Feel worried but look for a compromise first", score: 5 },
      { text: '觉得这是需要认真谈的问题，不一定无解', textEn: "See it as a serious issue to work through -- not necessarily unsolvable", score: 7 },
      { text: '把这当作成长机会----关系应该能容纳变化', textEn: "See it as a growth opportunity -- relationships should be able to hold change", score: 9 },
    ],
  },
]
