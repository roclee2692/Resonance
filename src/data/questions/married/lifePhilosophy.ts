import type { Question } from '../../types'

// Spectrum: low = security/routine → high = growth/change
export const marriedLifePhilosophyQuestions: Question[] = [
  // ── Quick tier (0-2) ─────────────────────────────────────────────────────
  {
    text: '在你们的日常生活中，谁更倾向于提出"换一种方式试试"？',
    textEn: "In daily life, who's more likely to suggest \"let's try a different way\"?",
    options: [
      { text: '几乎总是我----我更喜欢探索新的可能', textEn: "Almost always you -- you prefer exploring new possibilities", score: 9 },
      { text: '大多数时候是我', textEn: "Usually you", score: 7 },
      { text: '大多数时候是伴侣', textEn: "Usually your partner", score: 4 },
      { text: '几乎总是伴侣----我更喜欢维持熟悉的节奏', textEn: "Almost always your partner -- you prefer keeping the familiar rhythm", score: 2 },
    ],
  },
  {
    text: '回顾过去一年，你们共同做的最冒险的决定是：',
    textEn: 'Looking back at the past year, the riskiest decision you made together was:',
    options: [
      { text: '几乎没有，我们倾向于在确定范围内行动', textEn: "Barely any -- you tend to act within predictable parameters", score: 2 },
      { text: '有一两件稍微超出舒适区的事', textEn: "One or two things slightly outside your comfort zone", score: 4 },
      { text: '有几件需要承担真实风险的决定', textEn: "A few decisions involving real risk", score: 7 },
      { text: '我们主动寻求新体验，变化是常态', textEn: "You actively seek new experiences -- change is the norm", score: 9 },
    ],
  },
  {
    text: '当你们对"未来5年想过什么样的生活"各有想法时，通常怎么处理？',
    textEn: 'When you each have different ideas about "what life should look like in 5 years," you typically:',
    options: [
      { text: '倾向于回避这个话题，各自心里有数', textEn: "Avoid the topic -- each of you keeps it to yourselves", score: 2 },
      { text: '偶尔谈，但很难达成共识', textEn: "Discuss occasionally, but it's hard to align", score: 4 },
      { text: '会认真讨论，有时能对齐，有时有分歧', textEn: "Discuss seriously -- sometimes you align, sometimes you don't", score: 7 },
      { text: '我们定期一起规划，这是我们关系的重要部分', textEn: "Regularly plan together -- it's an important part of your relationship", score: 9 },
    ],
  },
  // ── Standard tier (3-5) ──────────────────────────────────────────────────
  {
    text: '在你们目前的安排中，谁的职业发展被优先照顾？',
    textEn: 'In your current arrangement, whose career development gets priority?',
    options: [
      { text: '基本上是我的，伴侣在配合我', textEn: "Mainly yours -- your partner accommodates you", score: 3 },
      { text: '基本上是伴侣的，我在配合', textEn: "Mainly your partner's -- you accommodate them", score: 3 },
      { text: '我们轮流优先，阶段性地调整', textEn: "You take turns -- adjusting priority by life stage", score: 7 },
      { text: '我们一直在努力平衡，但这个问题还没完全解决', textEn: "You're always trying to balance it, but haven't fully resolved it", score: 8 },
    ],
  },
  {
    text: '你们对"成功"的定义，在实际生活中有多接近？',
    textEn: 'How aligned are you on what "success" actually means in your lives?',
    options: [
      { text: '非常接近，我们在追求类似的事情', textEn: "Very aligned -- you're pursuing similar things", score: 8 },
      { text: '有些重叠，但侧重点不同', textEn: "Some overlap, but different emphases", score: 6 },
      { text: '差异明显，各自有自己的标准', textEn: "Noticeably different -- each has their own standard", score: 4 },
      { text: '我们没有认真讨论过这个', textEn: "You've never seriously discussed it", score: 2 },
    ],
  },
  {
    text: '当生活出现意外变化（失业、搬家、生病），你们的第一反应通常是：',
    textEn: 'When an unexpected change hits (job loss, moving, illness), your first response as a couple is usually:',
    options: [
      { text: '一起评估影响，马上讨论应对方案', textEn: "Assess the impact together and immediately discuss how to respond", score: 8 },
      { text: '各自先消化，然后再谈', textEn: "Each process it separately, then talk", score: 6 },
      { text: '有一方先稳定，另一方才跟上', textEn: "One person stabilizes first, then the other catches up", score: 4 },
      { text: '这类情况下我们容易陷入紧张或冲突', textEn: "These situations tend to create tension or conflict between you", score: 2 },
    ],
  },
  // ── Full tier (6-8) ──────────────────────────────────────────────────────
  {
    text: '你们在一起这段时间，你觉得对方对"时间应该花在哪里"的态度是否发生过变化？',
    textEn: "Over the time you've been together, has your partner's view of \"where time should be spent\" changed?",
    options: [
      { text: '基本没变，我们都很清楚各自的优先级', textEn: "Barely changed -- you both have clear priorities", score: 7 },
      { text: '有些变化，但变化方向一致', textEn: "Changed somewhat, and in the same direction", score: 8 },
      { text: '有变化，且方向不一样，有时让人困惑', textEn: "Changed, but in different directions -- sometimes confusing", score: 4 },
      { text: '对方变化很大，和刚在一起时完全不同', textEn: "Your partner has changed a lot -- completely different from when you first got together", score: 2 },
    ],
  },
  {
    text: '如果其中一方得到一个很好但需要大幅改变生活方式的机会，你们会如何决策？',
    textEn: 'If one of you got a great opportunity that would significantly change your lifestyle, how would you decide?',
    options: [
      { text: '充分讨论，两人的意见对最终决定同等重要', textEn: "Full discussion -- both voices carry equal weight", score: 8 },
      { text: '机会拥有者决定，另一方配合', textEn: "Whoever has the opportunity decides; the other adapts", score: 4 },
      { text: '以家庭整体利益为优先，个人机会次之', textEn: "Overall family benefit comes first -- individual opportunity is secondary", score: 6 },
      { text: '我们还没有讨论过这种情况', textEn: "You haven't discussed this kind of situation", score: 3 },
    ],
  },
  {
    text: '你们在日常生活中，有多少时间是"各自做自己的事"，有多少是共同活动？',
    textEn: 'In your daily life, how much time is "each doing your own thing" vs. doing things together?',
    options: [
      { text: '大部分时间共同活动，独处时间很少', textEn: "Mostly shared activities -- little alone time", score: 3 },
      { text: '有一定独处时间，但共同活动更多', textEn: "Some alone time, but shared activities dominate", score: 6 },
      { text: '两者大致平衡，都觉得健康', textEn: "Roughly balanced -- both feel it's healthy", score: 8 },
      { text: '各自时间较多，共同活动偶尔发生', textEn: "Mostly separate time -- shared activities happen occasionally", score: 5 },
    ],
  },
]
