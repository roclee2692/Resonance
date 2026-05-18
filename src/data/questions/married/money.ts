import type { Question } from '../../types'

// Spectrum: low = spend/enjoy now → high = save/invest/control
export const marriedMoneyQuestions: Question[] = [
  // ── Quick tier (0-2) ─────────────────────────────────────────────────────
  {
    text: '你们目前管钱的方式是：',
    textEn: 'How you currently manage money:',
    options: [
      { text: '完全合并，所有收支统一管理', textEn: "Fully merged -- all income and expenses managed together", score: 5 },
      { text: '部分合并----共同账户支付家庭开销，个人账户保留', textEn: "Partially merged -- joint account for household costs, personal accounts kept separately", score: 7 },
      { text: 'AA制，各自管各自的钱，共同开销按比例分摊', textEn: "Separate -- each manages their own, shared costs split proportionally", score: 6 },
      { text: '没有明确安排，基本上谁有钱谁付', textEn: "No clear system -- whoever has money at the time pays", score: 3 },
    ],
  },
  {
    text: '当一方想要一笔较大的个人消费（旅行、爱好、装备），通常需要：',
    textEn: 'When one of you wants a significant personal expense (travel, hobbies, equipment), you typically:',
    options: [
      { text: '提前告知并得到另一方同意', textEn: "Inform in advance and get agreement from the other", score: 6 },
      { text: '告知一声，但不需要对方批准', textEn: "Let the other know, but approval isn't required", score: 7 },
      { text: '各自有自由支配额度，在额度内无需沟通', textEn: "Each has a discretionary budget -- no communication needed within that amount", score: 8 },
      { text: '没有明确规则，有时会引发争论', textEn: "No clear rule -- it sometimes causes arguments", score: 3 },
    ],
  },
  {
    text: '你们对当前家庭财务状况的了解程度（收入、负债、储蓄）是否对等？',
    textEn: 'Is your knowledge of your current household finances (income, debt, savings) equally shared?',
    options: [
      { text: '完全透明，双方清楚彼此所有财务细节', textEn: "Fully transparent -- both know all financial details", score: 9 },
      { text: '大致了解，但有些细节各自保留', textEn: "Generally informed, but some details kept private", score: 6 },
      { text: '一方知道更多，另一方较少参与', textEn: "One person knows more -- the other is less involved", score: 3 },
      { text: '我们回避深入讨论财务细节', textEn: "You avoid going deep on financial specifics", score: 1 },
    ],
  },
  // ── Standard tier (3-5) ──────────────────────────────────────────────────
  {
    text: '你们对"多少储蓄才算安全"的实际判断有多接近？',
    textEn: 'How aligned are you on what counts as a "safe" level of savings?',
    options: [
      { text: '非常一致，对应急储备的需求基本相同', textEn: "Very aligned -- you have the same sense of what's enough", score: 8 },
      { text: '有一些差异，但都能接受当前安排', textEn: "Some differences, but both can live with the current arrangement", score: 6 },
      { text: '有明显差距----一方觉得够了，另一方觉得远远不够', textEn: "Noticeable gap -- one feels it's enough, the other feels far from enough", score: 3 },
      { text: '我们没有认真讨论过这个', textEn: "You haven't seriously discussed this", score: 2 },
    ],
  },
  {
    text: '当你们在某个消费决策上意见不合（例如是否升级家电、是否出行），最后通常是：',
    textEn: 'When you disagree on a spending decision (e.g., whether to upgrade appliances, whether to travel), the usual outcome is:',
    options: [
      { text: '认真讨论，最终达成双方都接受的决定', textEn: "Serious discussion and a decision both can accept", score: 8 },
      { text: '一方让步，通常是同一个人让步', textEn: "One person gives in -- usually the same person", score: 3 },
      { text: '搁置讨论，以后再说', textEn: "Shelve it and talk later", score: 4 },
      { text: '各花各的，这件事由提出的人负责', textEn: "Each pays for their own -- whoever wanted it takes responsibility", score: 6 },
    ],
  },
  {
    text: '你们是否有共同的中长期财务目标（如买房、提前退休、子女教育基金）？',
    textEn: "Do you have shared medium-to-long-term financial goals (buying a home, early retirement, children's education fund)?",
    options: [
      { text: '有明确目标，并正在共同推进', textEn: "Clear goals, actively working toward them together", score: 9 },
      { text: '有大致方向，但计划不够具体', textEn: "General direction, but the plan isn't specific enough", score: 6 },
      { text: '各有各的目标，没有整合', textEn: "Each has separate goals -- not integrated", score: 4 },
      { text: '没有，我们更关注当下', textEn: "None -- you focus on the present", score: 2 },
    ],
  },
  // ── Full tier (6-8) ──────────────────────────────────────────────────────
  {
    text: '如果一方的收入突然大幅减少（失业、创业期、生病），目前的财务安排能支撑多久？',
    textEn: "If one person's income suddenly drops significantly (job loss, starting a business, illness), how long could your current finances sustain you?",
    options: [
      { text: '6个月以上，我们有充足的应急储备', textEn: "6+ months -- you have ample emergency savings", score: 9 },
      { text: '3-6个月，需要调整一些开支', textEn: "3-6 months -- you'd need to adjust some expenses", score: 7 },
      { text: '不到3个月，会比较紧张', textEn: "Less than 3 months -- it would be stressful", score: 4 },
      { text: '这种情况会对我们造成严重压力', textEn: "This would create serious strain for you both", score: 2 },
    ],
  },
  {
    text: '对方的金钱习惯（消费偏好、储蓄意识、对债务的态度），你有多接受？',
    textEn: "How accepting are you of your partner's money habits (spending style, savings awareness, attitude toward debt)?",
    options: [
      { text: '完全接受，我们的习惯很相似', textEn: "Fully accepting -- your habits are very similar", score: 8 },
      { text: '大部分接受，个别习惯我不太认同但能忍', textEn: "Mostly accepting -- a few habits you don't love but can tolerate", score: 6 },
      { text: '有些习惯让我不舒服，但我选择不说', textEn: "Some habits bother you, but you choose not to say anything", score: 3 },
      { text: '这是我们关系里真实存在的摩擦点', textEn: "This is a genuine ongoing friction point in your relationship", score: 2 },
    ],
  },
  {
    text: '你们对"退休后想过什么样的生活"的期望，有多大差异？',
    textEn: 'How different are your visions of life after retirement?',
    options: [
      { text: '非常接近，我们讨论过并大致对齐', textEn: "Very similar -- you've discussed it and mostly aligned", score: 8 },
      { text: '方向相似，细节未定', textEn: "Similar direction, details yet to be determined", score: 6 },
      { text: '有明显差距，一方想简单生活，另一方期望享受', textEn: "Noticeable gap -- one wants simple living, the other wants more", score: 3 },
      { text: '我们从来没有认真聊过这个', textEn: "You've never seriously talked about it", score: 2 },
    ],
  },
]
