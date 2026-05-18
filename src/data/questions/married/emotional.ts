import type { Question } from '../../types'

// Spectrum: low = externalize/reactive → high = self-aware/regulated/communicative
export const marriedEmotionalQuestions: Question[] = [
  // ── Quick tier (0-2) ─────────────────────────────────────────────────────
  {
    text: '当你压力很大或情绪不好时，伴侣通常能察觉吗？',
    textEn: "When you're under stress or feeling down, does your partner usually notice?",
    options: [
      { text: '几乎总是能，TA对我的状态很敏感', textEn: "Almost always -- they're very attuned to your emotional state", score: 8 },
      { text: '多数时候能，偶尔需要我提示', textEn: "Usually yes, occasionally you need to give a hint", score: 7 },
      { text: '有时能，有时注意不到', textEn: "Sometimes yes, sometimes no", score: 4 },
      { text: '经常感觉TA没有发现', textEn: "Often feels like they don't notice", score: 2 },
    ],
  },
  {
    text: '当你向伴侣倾诉烦恼时，TA最常见的反应是：',
    textEn: "When you share something that's bothering you, your partner's most common response is:",
    options: [
      { text: '先倾听，再问我需要什么（诉说还是建议）', textEn: "Listen first, then ask what you need (venting or advice)", score: 9 },
      { text: '认真倾听，给我情感支持', textEn: "Listen carefully and offer emotional support", score: 8 },
      { text: '马上给建议或帮我想解决办法', textEn: "Jump straight into advice or problem-solving", score: 5 },
      { text: '分心或快速转移到自己的事情', textEn: "Get distracted or quickly shift to their own things", score: 2 },
    ],
  },
  {
    text: '在你们的关系里，谁更容易在情绪激动时说出之后会后悔的话？',
    textEn: "In your relationship, who's more likely to say something they later regret when emotions run high?",
    options: [
      { text: '我更容易', textEn: "More likely you", score: 4 },
      { text: '伴侣更容易', textEn: "More likely your partner", score: 4 },
      { text: '我们两人都有这个倾向', textEn: "Both of you tend to do this", score: 2 },
      { text: '我们都比较能控制，很少说出后悔的话', textEn: "Both are fairly controlled -- rarely say things you regret", score: 8 },
    ],
  },
  // ── Standard tier (3-5) ──────────────────────────────────────────────────
  {
    text: '当你需要独处/冷静的时间，伴侣能给你这个空间而不会感到被排斥吗？',
    textEn: 'When you need alone time to decompress, can your partner give you that space without feeling rejected?',
    options: [
      { text: '完全可以，TA理解我的需求', textEn: "Absolutely -- they understand your need", score: 8 },
      { text: '大多数时候可以，偶尔TA会有些受伤', textEn: "Usually yes, but occasionally they feel a bit hurt", score: 6 },
      { text: '有时候会造成摩擦，TA觉得我在疏远TA', textEn: "Sometimes causes friction -- they feel you're pulling away", score: 3 },
      { text: '这是一个真实的问题，我们为此争论过', textEn: "This is a real issue -- you've argued about it", score: 2 },
    ],
  },
  {
    text: '你是否觉得在伴侣面前，你可以表达"负面情绪"（悲伤、恐惧、脆弱）而不用担心？',
    textEn: 'Do you feel safe expressing "negative emotions" (sadness, fear, vulnerability) in front of your partner without worry?',
    options: [
      { text: '完全可以，TA是我最安全的情感空间', textEn: "Completely -- they're your safest emotional space", score: 9 },
      { text: '大多数时候可以，偶尔会有顾虑', textEn: "Usually yes, occasionally some hesitation", score: 7 },
      { text: '部分可以，某类情绪我还是会收起来', textEn: "Partially -- some emotions you still hold back", score: 4 },
      { text: '我倾向于独自处理，不想让对方看到我脆弱的一面', textEn: "You tend to handle things alone -- don't want your partner to see your vulnerable side", score: 2 },
    ],
  },
  {
    text: '伴侣在面对自己的压力时，通常会如何处理？',
    textEn: 'When your partner faces their own stress, they typically:',
    options: [
      { text: '主动告诉我发生了什么，一起承担', textEn: "Proactively tell you what's happening and face it together", score: 8 },
      { text: '会跟我说，但不太需要我的介入', textEn: "Tell you, but don't really need you to step in", score: 7 },
      { text: '倾向于自己扛，不希望影响我', textEn: "Handle it alone -- don't want to affect you", score: 4 },
      { text: '有时会通过情绪爆发或冷漠来表达', textEn: "Sometimes express it through emotional outbursts or withdrawal", score: 2 },
    ],
  },
  // ── Full tier (6-8) ──────────────────────────────────────────────────────
  {
    text: '在你们最近半年，有没有哪次你觉得伴侣"真的很懂我"的时刻？',
    textEn: 'In the past six months, has there been a moment when you felt your partner "really gets me"?',
    options: [
      { text: '有过好几次，这种感觉很频繁', textEn: "Several times -- this feeling comes up often", score: 9 },
      { text: '有过几次，印象深刻', textEn: "A few memorable times", score: 7 },
      { text: '偶尔有，但不算多', textEn: "Occasionally, but not often", score: 4 },
      { text: '想不起来，这类时刻很少', textEn: "Can't think of one -- these moments are rare", score: 2 },
    ],
  },
  {
    text: '当你们两人都处于高压时期（工作、家庭、健康问题同时来临），你们的关系通常会：',
    textEn: "When you're both under high stress simultaneously (work, family, health issues at once), your relationship typically:",
    options: [
      { text: '反而更靠近，共同面对让我们更有连接感', textEn: "Gets closer -- facing it together strengthens your bond", score: 9 },
      { text: '维持稳定，各自处理但互相照顾', textEn: "Stays stable -- each handles their own while looking out for each other", score: 7 },
      { text: '有些摩擦增加，但最终能度过', textEn: "More friction, but you get through it", score: 5 },
      { text: '压力期是我们关系最紧张的时候', textEn: "Stressful periods are when your relationship is most strained", score: 2 },
    ],
  },
  {
    text: '如果你需要评价目前关系里的情感安全感，你会选：',
    textEn: "If you had to rate the emotional safety in your current relationship, you'd say:",
    options: [
      { text: '非常高----我可以完全做自己', textEn: "Very high -- you can be completely yourself", score: 9 },
      { text: '较高----总体安全，偶有不确定', textEn: "Fairly high -- generally safe, occasional uncertainty", score: 7 },
      { text: '一般----有些领域我还是会小心翼翼', textEn: "Moderate -- in some areas you still walk on eggshells", score: 4 },
      { text: '不够----我经常担心如何反应或被评判', textEn: "Not enough -- you often worry about how to respond or being judged", score: 2 },
    ],
  },
]
