import type { Question } from '../../types'

// Spectrum: low = avoid/suppress → high = confront/repair actively
export const marriedConflictQuestions: Question[] = [
  // ── Quick tier (0-2) ─────────────────────────────────────────────────────
  {
    text: '你们最近一次明显的争吵或冲突，最后是怎么结束的？',
    textEn: 'How did your most recent notable fight or conflict end?',
    options: [
      { text: '真正谈开了，双方都说出了想说的', textEn: "A real conversation -- both said what they needed to say", score: 9 },
      { text: '冷静下来后，一方主动修复', textEn: "Calmed down, and one person initiated repair", score: 7 },
      { text: '自然淡化，没有正式和解', textEn: "Faded naturally -- no formal resolution", score: 4 },
      { text: '有一方选择沉默/回避，矛盾没有真正解决', textEn: "One person went silent or withdrew -- the conflict wasn't really resolved", score: 2 },
    ],
  },
  {
    text: '在你们关系里，冲突之后通常是谁先开口重新沟通？',
    textEn: 'After a conflict, who usually speaks first to re-establish communication?',
    options: [
      { text: '基本上总是我', textEn: "Almost always you", score: 4 },
      { text: '基本上总是伴侣', textEn: "Almost always your partner", score: 4 },
      { text: '大致轮流，取决于情况', textEn: "Roughly takes turns, depending on the situation", score: 8 },
      { text: '我们都不太主动，经常靠时间"冲淡"', textEn: 'Neither is proactive -- usually just wait it out', score: 2 },
    ],
  },
  {
    text: '你们吵架时，有没有出现过"翻旧账"（提起之前已经解决的事）的情况？',
    textEn: 'When you argue, does "bringing up old issues" (things already supposedly resolved) happen?',
    options: [
      { text: '很少，我们基本能把新旧问题分开', textEn: "Rarely -- you mostly keep new and old issues separate", score: 8 },
      { text: '偶尔有，但我们意识到后会纠正', textEn: "Occasionally, but you catch it and correct yourselves", score: 6 },
      { text: '经常有，这是我们冲突的一个固定模式', textEn: "Often -- it's a recurring pattern in your conflicts", score: 2 },
      { text: '有时有，但说不准是我先翻还是对方先翻', textEn: "Sometimes, but hard to say who starts it", score: 4 },
    ],
  },
  // ── Standard tier (3-5) ──────────────────────────────────────────────────
  {
    text: '在你们的关系里，有没有反复出现但始终没有解决的问题？',
    textEn: 'Are there recurring issues in your relationship that have never been resolved?',
    options: [
      { text: '没有，出现过的问题基本都得到了处理', textEn: "No -- issues that come up are generally addressed", score: 8 },
      { text: '有一两个，但程度不严重', textEn: "One or two, but not serious", score: 6 },
      { text: '有，是真实存在的痛点', textEn: "Yes -- genuine pain points", score: 3 },
      { text: '有好几个，我们都知道但都绕着走', textEn: "Several -- you both know them but avoid them", score: 1 },
    ],
  },
  {
    text: '当你感到被伴侣误解或不公平对待，你通常的反应是：',
    textEn: 'When you feel misunderstood or treated unfairly by your partner, you typically:',
    options: [
      { text: '马上说出来，希望对方理解我的感受', textEn: "Say something immediately -- you want them to understand", score: 8 },
      { text: '等情绪平稳再说', textEn: "Wait until you're calm, then say something", score: 7 },
      { text: '自己消化，不说出来', textEn: "Process it internally and don't say anything", score: 3 },
      { text: '用其他方式表达不满（冷漠、刺话）', textEn: "Express dissatisfaction indirectly (coldness, sharp remarks)", score: 2 },
    ],
  },
  {
    text: '你们争吵时，有没有出现过说出"很重的话"（人身攻击、威胁分手/离婚）的情况？',
    textEn: 'During arguments, has either of you said something very harsh (personal attacks, threats of breaking up/divorce)?',
    options: [
      { text: '从未出现过', textEn: "Never", score: 9 },
      { text: '极少，且事后双方都认为不应该', textEn: "Extremely rarely, and both agreed afterward it was wrong", score: 6 },
      { text: '有过，这让我很难受', textEn: "It has happened, and it hurt you deeply", score: 2 },
      { text: '这是我们激烈冲突时的固定模式', textEn: "It's a recurring pattern in your intense conflicts", score: 1 },
    ],
  },
  // ── Full tier (6-8) ──────────────────────────────────────────────────────
  {
    text: '你伴侣在处理冲突时最让你欣赏的是什么？',
    textEn: 'What do you most appreciate about how your partner handles conflict?',
    options: [
      { text: '能冷静倾听，不急于反驳', textEn: "They listen calmly and don't rush to counter", score: 8 },
      { text: '愿意承认错误和道歉', textEn: "They're willing to admit mistakes and apologize", score: 8 },
      { text: '会主动修复关系', textEn: "They proactively repair the relationship", score: 7 },
      { text: '说实话，这个问题让我想不出来什么', textEn: "Honestly, nothing comes to mind right now", score: 2 },
    ],
  },
  {
    text: '当你们在某件重要事情上真的无法达成共识，通常的结局是：',
    textEn: "When you genuinely can't reach consensus on something important, the typical outcome is:",
    options: [
      { text: '认真协商，找到双方都能接受的方案', textEn: "Serious negotiation until you find something both can accept", score: 8 },
      { text: '暂时搁置，等时机更好时再谈', textEn: "Temporarily shelve it and revisit when the time is better", score: 6 },
      { text: '一方妥协，但内心不完全认同', textEn: "One concedes but doesn't fully agree internally", score: 3 },
      { text: '各自坚持，变成长期悬而未决的问题', textEn: "Each holds their position -- it becomes a long-standing unresolved issue", score: 2 },
    ],
  },
  {
    text: '在过去一年里，你们的冲突处理方式有没有进步？',
    textEn: 'Has the way you handle conflict as a couple improved in the past year?',
    options: [
      { text: '明显进步了，我们越来越擅长沟通', textEn: "Noticeably improved -- you're getting better at communicating", score: 9 },
      { text: '有一些进步，但还有提升空间', textEn: "Some progress, but room to grow", score: 7 },
      { text: '基本没变，维持原来的模式', textEn: "Basically unchanged -- same old patterns", score: 4 },
      { text: '某些方面反而更难处理了', textEn: "Some things have actually gotten harder to handle", score: 2 },
    ],
  },
]
