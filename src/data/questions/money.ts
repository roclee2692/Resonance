import type { Question } from '../types'

// Spectrum: low = spend/quality-of-life now · high = save/invest for future security
export const moneyQuestions: Question[] = [
  // ── Quick tier (0-2) ─────────────────────────────────────────────────────
  {
    text: '月收入分配，你理想的储蓄或投资比例是：',
    textEn: "What's your ideal savings or investment rate out of monthly income?",
    options: [
      { text: '10%就不错了，生活质量优先', textEn: "10% is enough -- quality of life comes first", score: 2 },
      { text: '20-30%，平衡生活和积累', textEn: "20-30% -- balanced between living well and building wealth", score: 5 },
      { text: '40-50%，财务自由是首要目标', textEn: "40-50% -- financial independence is the top priority", score: 8 },
      { text: '看情况，收入高时多存，低时少存', textEn: "Flexible -- save more in good months, less in lean ones", score: 4 },
    ],
  },
  {
    text: '关于贷款买房，你的态度是：',
    textEn: 'Your view on buying a home with a mortgage:',
    options: [
      { text: '能全款绝不贷款，不喜欢欠钱的感觉', textEn: "Pay cash if at all possible -- dislike the feeling of debt", score: 3 },
      { text: '合理利用杠杆，低利率时贷款是理性的', textEn: "Use leverage sensibly -- a mortgage at low rates is rational", score: 7 },
      { text: '租房也很好，不需要为了买房背负压力', textEn: "Renting is fine -- no need to take on the pressure of buying", score: 8 },
      { text: '有房才有安全感，贷款也必须买', textEn: "Owning is necessary for security -- worth taking on the debt", score: 2 },
    ],
  },
  {
    text: '伴侣想花两个月工资买一件「非必需但很想要」的东西，你会：',
    textEn: "Your partner wants to spend two months' salary on something non-essential but really desired. You would:",
    options: [
      { text: '完全支持，开心最重要', textEn: "Fully support it -- happiness matters most", score: 2 },
      { text: '理解，但建议存几个月再买', textEn: "Understand but suggest saving up for a few months first", score: 6 },
      { text: '反对，非必需品不应该花这么多', textEn: "Object -- you shouldn't spend that much on something non-essential", score: 9 },
      { text: '商量一下预算，看有没有替代方案', textEn: "Discuss the budget and explore whether there's a better alternative", score: 5 },
    ],
  },
  // ── Standard tier (3-6) ──────────────────────────────────────────────────
  {
    text: '钱对你来说最主要代表什么？',
    textEn: 'What does money primarily represent to you?',
    options: [
      { text: '安全感----有钱才不怕意外', textEn: "Security -- money means not being afraid of the unexpected", score: 3 },
      { text: '自由----有足够的钱才有选择权', textEn: "Freedom -- enough money means having real choices", score: 8 },
      { text: '享受----钱是用来让生活更好的', textEn: "Enjoyment -- money is for making life better now", score: 2 },
      { text: '证明----经济能力代表个人价值', textEn: "Proof -- financial ability reflects personal worth", score: 4 },
    ],
  },
  {
    text: '你的父母拿出一大笔钱帮你们付首付，条件没有明说，但隐约意味着他们会有一定发言权。你会：',
    textEn: "Your parents offer a large sum for a down payment with no explicit strings, but it implies they'll expect some say. You would:",
    options: [
      { text: '接受，家人支持就应该接受', textEn: "Accept -- family support should be received graciously", score: 2 },
      { text: '接受钱，但事先谈清楚边界', textEn: "Accept the money but clarify boundaries upfront", score: 7 },
      { text: '谢绝，我不想让钱成为控制的理由', textEn: "Decline -- you don't want money to become a lever for control", score: 9 },
      { text: '视金额和条件具体决定', textEn: "Decide based on the specific amount and implied terms", score: 5 },
    ],
  },
  {
    text: '投资上，你能接受的最大风险是：',
    textEn: "The maximum investment risk you're comfortable with:",
    options: [
      { text: '银行存款或国债，本金安全最重要', textEn: "Bank deposits or government bonds -- principal safety is paramount", score: 2 },
      { text: '指数基金，接受市场波动', textEn: "Index funds -- accept market fluctuations", score: 5 },
      { text: '部分主动股票或基金，愿意承受较大回撤', textEn: "Some active stocks or funds -- willing to stomach significant drawdowns", score: 7 },
      { text: '包括加密货币或集中持仓，高风险高回报', textEn: "Including crypto or concentrated positions -- high risk, high reward", score: 9 },
    ],
  },
  {
    text: '家庭财务透明度，你的理想模式是：',
    textEn: 'Your ideal financial transparency model for a shared household:',
    options: [
      { text: '完全共同账户，所有收支对方都知道', textEn: "Fully shared accounts -- every transaction is known to both", score: 3 },
      { text: '共同账户负责主要开销，各自保留一定私房钱', textEn: "Joint account for shared costs, personal accounts for individual spending", score: 6 },
      { text: '各自独立账户，按比例分摊共同开支', textEn: "Fully separate accounts with proportional contributions to shared costs", score: 8 },
      { text: '不太在意形式，感觉信任就好', textEn: "Don't care much about structure -- trust is enough", score: 4 },
    ],
  },
  // ── Full tier (7-10) ─────────────────────────────────────────────────────
  {
    text: '伴侣的父母遇到财务困难，需要比较大额的支援，你们：',
    textEn: "Your partner's parents face financial hardship and need substantial support. You would:",
    options: [
      { text: '当然支持，家人有困难就帮', textEn: "Of course support them -- family in need gets help", score: 2 },
      { text: '支持，但需要双方商量金额和形式', textEn: "Support, but the amount and form must be decided together", score: 6 },
      { text: '力所能及地帮，但必须设上限', textEn: "Help within your means, but set a firm upper limit", score: 7 },
      { text: '这是TA的家庭问题，我们自己的财务要优先保护', textEn: "That's their family's issue -- your own finances must come first", score: 9 },
    ],
  },
  {
    text: '你们有一笔积蓄，伴侣想拿出1/3投入一个他/她看好但你不太懂的机会。你会：',
    textEn: "You have savings and your partner wants to put a third into an opportunity they're confident about but you don't understand. You would:",
    options: [
      { text: '反对，家庭资金不应该这么冒险', textEn: "Object -- household funds shouldn't be risked this way", score: 2 },
      { text: '要求对方详细解释，理解后再决定', textEn: "Ask for a full explanation and decide once you understand", score: 6 },
      { text: '支持，投资自己懂的领域是合理的', textEn: "Support it -- investing in what you know is reasonable", score: 7 },
      { text: '划定个人可以自由支配的资金比例，在那范围内TA可以自决', textEn: "Agree on a personal discretionary fund -- within that amount, they decide freely", score: 8 },
    ],
  },
  {
    text: '关于信用卡分期和消费贷，你的态度是：',
    textEn: 'Your view on credit card installments and consumer loans:',
    options: [
      { text: '坚决不碰，负债会让我非常不安', textEn: "Never touch them -- debt makes you deeply anxious", score: 2 },
      { text: '偶尔大额消费可以短期分期，但不作为习惯', textEn: "Occasional short-term installments for big purchases are fine, but not a habit", score: 5 },
      { text: '合理运用信用工具，不是坏事', textEn: "Using credit tools smartly is fine -- nothing wrong with it", score: 7 },
      { text: '只要能还得上就行，现在享受比什么都重要', textEn: "As long as you can pay it back, enjoying now is what matters most", score: 9 },
    ],
  },
  {
    text: '如果你们决定分居或离婚，你对"钱"的态度是：',
    textEn: 'If you and your partner were to separate, your attitude toward finances would be:',
    options: [
      { text: '婚前财产归各自，婚后共同财产对半分，简单清楚', textEn: "Pre-marriage assets stay separate, post-marriage shared assets split evenly -- simple and clear", score: 5 },
      { text: '谁付出更多（时间或金钱）谁应该分得更多', textEn: "Whoever contributed more (time or money) should receive more", score: 6 },
      { text: '没到那一步不考虑这些，会显得不信任', textEn: "Don't think about it unless it happens -- discussing it implies distrust", score: 2 },
      { text: '婚前应该谈好财产协议，保护各自利益', textEn: "A prenuptial agreement should be arranged to protect both parties", score: 9 },
    ],
  },
]
