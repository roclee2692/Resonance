import type { Question } from '../../types'

// Spectrum: low = pragmatic/flexible → high = principle-driven/consistent
export const marriedValuesQuestions: Question[] = [
  // ── Quick tier (0-2) ─────────────────────────────────────────────────────
  {
    text: '在你们的家庭里，对双方父母的支持（时间、金钱、精力）是否大致平衡？',
    textEn: 'In your household, is the support given to both sets of parents (time, money, energy) roughly balanced?',
    options: [
      { text: '基本平衡，我们有意识地保持公平', textEn: "Basically balanced -- you consciously maintain fairness", score: 8 },
      { text: '有些偏差，但双方都能接受', textEn: "Some imbalance, but both of you can live with it", score: 6 },
      { text: '明显不平衡，一方承担更多', textEn: "Clearly unbalanced -- one side carries more", score: 3 },
      { text: '这个问题目前还没完全理清楚', textEn: "This hasn't been fully sorted out yet", score: 4 },
    ],
  },
  {
    text: '当你们对同一件事的是非判断不同，通常结果是：',
    textEn: 'When you judge the same situation differently, the usual outcome is:',
    options: [
      { text: '一方说服另一方，形成统一立场', textEn: "One convinces the other -- you land on a unified position", score: 4 },
      { text: '各自保留意见，不强求一致', textEn: "Each keeps their own view -- no pressure to agree", score: 7 },
      { text: '认真讨论，有时改变观点，有时接受分歧', textEn: "Discuss seriously -- sometimes change views, sometimes accept the difference", score: 8 },
      { text: '这种情况会引发明显紧张', textEn: "This kind of situation creates noticeable tension", score: 2 },
    ],
  },
  {
    text: '在你们关系中，有没有某些事是"对方知道我不喜欢但仍会做"的？',
    textEn: 'In your relationship, are there things your partner knows you dislike but still does?',
    options: [
      { text: '几乎没有，我们很尊重彼此的底线', textEn: "Almost none -- you both respect each other's limits", score: 8 },
      { text: '有少数，但不是真正重要的事', textEn: "A few, but nothing truly important", score: 6 },
      { text: '有，且有时会引起矛盾', textEn: "Yes, and it sometimes causes conflict", score: 3 },
      { text: '有，我已经放弃提了', textEn: "Yes, and you've stopped bringing it up", score: 1 },
    ],
  },
  // ── Standard tier (3-5) ──────────────────────────────────────────────────
  {
    text: '你们对待各自朋友关系的态度是否一致？（比如应该花多少时间维系朋友关系）',
    textEn: "Are you consistent in how you view each other's friendships? (e.g., how much time should be spent maintaining them)",
    options: [
      { text: '非常一致，相互支持对方的朋友圈', textEn: "Very consistent -- you support each other's social lives", score: 8 },
      { text: '有一些差异，但没有引发冲突', textEn: "Some differences, but no conflict", score: 6 },
      { text: '有分歧，一方觉得另一方太投入/不够投入社交', textEn: "Disagreement -- one feels the other is too social/not social enough", score: 3 },
      { text: '这是一个我们有时会起摩擦的点', textEn: "This is a recurring friction point", score: 2 },
    ],
  },
  {
    text: '当你们中有一方在外人面前说了对方不太舒服的话，事后通常是：',
    textEn: 'When one of you says something in front of others that makes the other uncomfortable, afterward:',
    options: [
      { text: '当时或事后会提出，坦诚讨论', textEn: "You raise it at the time or afterward and discuss honestly", score: 8 },
      { text: '不舒服的一方自己消化，不说出来', textEn: "The uncomfortable one processes it silently and says nothing", score: 3 },
      { text: '说出来，但往往引发争论', textEn: "You say something, but it often starts an argument", score: 4 },
      { text: '这类情况很少发生，我们很注意', textEn: "Rarely happens -- you're both careful about this", score: 7 },
    ],
  },
  {
    text: '你们在一起时，对"家庭应该优先于个人需求"这一点的实际执行是怎样的？',
    textEn: 'In practice, how do you handle "family first vs. personal needs" in your relationship?',
    options: [
      { text: '家庭永远优先，个人需求放在其次', textEn: "Family always first -- personal needs come second", score: 3 },
      { text: '通常家庭优先，但重要个人需求会被保护', textEn: "Usually family first, but important personal needs are protected", score: 6 },
      { text: '视情况而定，两者都很重要', textEn: "Depends on the situation -- both matter", score: 7 },
      { text: '我们更鼓励彼此追求个人需求', textEn: "You encourage each other to pursue personal needs", score: 8 },
    ],
  },
  // ── Full tier (6-8) ──────────────────────────────────────────────────────
  {
    text: '在你们的关系里，有没有过一方觉得另一方"不诚实"或隐瞒了重要信息的经历？',
    textEn: 'Has there been a time in your relationship when one of you felt the other was dishonest or withheld important information?',
    options: [
      { text: '从来没有，透明是我们的基本原则', textEn: "Never -- transparency is a core principle for you", score: 9 },
      { text: '偶有误解，但没有主动隐瞒', textEn: "Occasional misunderstandings, but no deliberate concealment", score: 7 },
      { text: '有过，虽然已经处理，但留下了影响', textEn: "Yes, and although resolved, it left a mark", score: 3 },
      { text: '这是我们关系的薄弱环节', textEn: "This is a weak spot in your relationship", score: 1 },
    ],
  },
  {
    text: '对于家庭内的重大决定（买房、换城市、是否要孩子），你们的决策过程是：',
    textEn: 'For major family decisions (buying a home, moving cities, having children), your decision process is:',
    options: [
      { text: '平等参与，双方都有实质性否决权', textEn: "Equal participation -- both have substantive veto power", score: 8 },
      { text: '充分讨论后，通常一方的意见更有分量', textEn: "Full discussion, but one person's view typically carries more weight", score: 5 },
      { text: '一方主导，另一方跟随', textEn: "One leads, the other follows", score: 3 },
      { text: '我们在这类决定上还没建立起清晰的协商模式', textEn: "You haven't established a clear negotiation pattern for these decisions", score: 4 },
    ],
  },
  {
    text: '你觉得伴侣对你的核心价值观（哪些事是你最在乎的）理解程度如何？',
    textEn: 'How well does your partner understand your core values -- what matters most to you?',
    options: [
      { text: '非常了解，TA能说出什么对我最重要', textEn: "Very well -- they could name what matters most to you", score: 9 },
      { text: '大致了解，但有些方面可能理解不深', textEn: "Generally understood, but some aspects may be missed", score: 7 },
      { text: '了解有限，我们很少深聊这类话题', textEn: "Limited understanding -- you rarely have these deeper conversations", score: 4 },
      { text: '我不确定TA真的了解我在乎什么', textEn: "You're not sure they really know what you care about", score: 2 },
    ],
  },
]
