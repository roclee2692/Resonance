import type { Question } from '../types'

// Spectrum: low = externalize/suppress emotions · high = self-aware/communicative
export const emotionalQuestions: Question[] = [
  // ── Quick tier (0-2) ─────────────────────────────────────────────────────
  {
    text: '工作上遭受了严重打击，回到家你通常会：',
    textEn: 'After a serious setback at work, you come home and typically:',
    options: [
      { text: '主动跟伴侣倾诉，希望被倾听', textEn: "Talk to your partner about it -- you want to be heard", score: 6 },
      { text: '自己消化，不想把负面情绪带给别人', textEn: "Process it alone -- don't want to bring negativity to others", score: 3 },
      { text: '先独处调整，等情绪平复后再分享', textEn: "Take time alone first, then share once you've settled", score: 7 },
      { text: '转移注意力，做别的事忘掉它', textEn: "Distract yourself with something else and try to forget it", score: 4 },
    ],
  },
  {
    text: '伴侣情绪低落但不想说原因，你会：',
    textEn: "Your partner is visibly down but doesn't want to say why. You would:",
    options: [
      { text: '反复追问，直到TA说出来', textEn: "Keep asking until they open up", score: 2 },
      { text: '表达我在，但不施压，等TA准备好', textEn: "Let them know you're there, without pressure, and wait until they're ready", score: 8 },
      { text: '用行动陪伴----做饭或安静待在旁边', textEn: "Show up through actions -- cook, or just sit quietly nearby", score: 7 },
      { text: '给TA空间，等TA想说的时候自然会说', textEn: "Give them space and trust they'll talk when they're ready", score: 5 },
    ],
  },
  {
    text: '你意识到自己最近情绪不稳定已经影响到伴侣了，你会：',
    textEn: 'You realize your recent emotional instability has been affecting your partner. You would:',
    options: [
      { text: '向TA道歉并解释自己的状态', textEn: "Apologize and explain what's going on with you", score: 8 },
      { text: '自己想办法调整，不给TA增加负担', textEn: "Work on it yourself and not add to their burden", score: 4 },
      { text: '跟TA商量，暂时需要更多独处空间', textEn: "Talk to them and say you need more alone time for now", score: 7 },
      { text: '没太注意到，觉得对方应该理解我', textEn: "Didn't really notice -- they should understand", score: 1 },
    ],
  },
  // ── Standard tier (3-6) ──────────────────────────────────────────────────
  {
    text: '你感到很焦虑，但说不清楚具体原因。你通常会：',
    textEn: "You feel anxious but can't pinpoint exactly why. You typically:",
    options: [
      { text: '跟伴侣说"我最近有些焦虑"，即使说不清楚为什么', textEn: 'Tell your partner "I\'ve been anxious lately," even without knowing why', score: 7 },
      { text: '自己梳理清楚原因，再考虑要不要说', textEn: "Work out the reason yourself first, then decide whether to mention it", score: 6 },
      { text: '转移注意力，等情绪自然消散', textEn: "Distract yourself and wait for it to pass", score: 3 },
      { text: '让焦虑影响日常，伴侣会感受到但我不主动解释', textEn: "Let it affect your daily mood -- your partner will sense it but you won't explain", score: 2 },
    ],
  },
  {
    text: '伴侣指出了你一个让TA困扰的行为模式，你感到防御性上升。你：',
    textEn: 'Your partner points out a behavior pattern that bothers them, and you feel your defenses go up. You:',
    options: [
      { text: '先承认防御情绪，然后试着真正听对方说什么', textEn: "Acknowledge the defensiveness, then genuinely try to hear them out", score: 8 },
      { text: '反驳，解释为什么TA的看法不准确', textEn: "Push back and explain why their view is wrong", score: 3 },
      { text: '沉默，等情绪过了再回应', textEn: "Go quiet and respond once the emotion passes", score: 5 },
      { text: '转移话题，把焦点移到TA身上的问题', textEn: "Redirect to something they do wrong", score: 2 },
    ],
  },
  {
    text: '你需要情感支持时，你希望伴侣：',
    textEn: 'When you need emotional support, you prefer your partner to:',
    options: [
      { text: '主动察觉并来安慰，不需要我开口', textEn: "Notice without you having to ask and come comfort you", score: 3 },
      { text: '我告诉TA我需要支持，TA能好好回应', textEn: "Respond well when you tell them you need support", score: 7 },
      { text: '先听我说，不急着给建议', textEn: "Listen first without rushing to give advice", score: 8 },
      { text: '给我实际的解决方案，别只是安慰', textEn: "Give you practical solutions, not just comfort", score: 4 },
    ],
  },
  {
    text: '你在压力极大的情况下，对伴侣发了脾气。之后你通常：',
    textEn: 'Under intense stress you snap at your partner. Afterward you typically:',
    options: [
      { text: '主动道歉，承认是自己的情绪问题', textEn: "Apologize proactively and own that it was your emotional issue", score: 9 },
      { text: '冷静一阵后，间接地示好', textEn: "Calm down and make up indirectly after a while", score: 5 },
      { text: '等TA找我，觉得发脾气也情有可原', textEn: "Wait for them to come to you -- snapping was understandable given the pressure", score: 3 },
      { text: '说是发脾气，但觉得TA也有责任', textEn: "Acknowledge snapping, but feel they also share responsibility", score: 2 },
    ],
  },
  // ── Full tier (7-10) ─────────────────────────────────────────────────────
  {
    text: '你认为在亲密关系中，自己负责"管理自己的情绪"和"被伴侣照顾情绪"的比例应该是：',
    textEn: 'In a close relationship, how do you think the ratio of "managing your own emotions" vs. "being emotionally supported by your partner" should look?',
    options: [
      { text: '主要靠自己，伴侣是加分，不是必须', textEn: "Mostly self-reliant -- a partner's support is a bonus, not a requirement", score: 8 },
      { text: '大部分靠自己，但重要时刻需要伴侣的支持', textEn: "Mostly yourself, but you need your partner's support at key moments", score: 6 },
      { text: '大家互相照顾，比例差不多', textEn: "Mutual -- roughly equal support in both directions", score: 5 },
      { text: '更多需要伴侣----这正是关系的意义', textEn: "More from your partner -- that's what the relationship is for", score: 3 },
    ],
  },
  {
    text: '伴侣在你最需要支持的时候，没有做到你希望的回应。你会：',
    textEn: "When you needed support most, your partner didn't respond the way you hoped. You would:",
    options: [
      { text: '说出来，告诉TA那次我需要什么', textEn: "Say something -- tell them what you needed in that moment", score: 8 },
      { text: '自己消化失望，下次降低期待', textEn: "Process the disappointment alone and lower expectations next time", score: 4 },
      { text: '有些受伤，但不想让这件事成为问题', textEn: "Feel hurt but don't want to make it into an issue", score: 3 },
      { text: '想想TA可能也有难处，理解TA', textEn: "Consider that they may have had difficulties too and extend understanding", score: 6 },
    ],
  },
  {
    text: '你觉得伴侣在情绪上对你有哪种程度的依赖是健康的？',
    textEn: 'What level of emotional dependency from your partner do you consider healthy?',
    options: [
      { text: '重大危机时依赖，日常情绪主要靠自己处理', textEn: "Rely on you during major crises, handle everyday emotions independently", score: 8 },
      { text: '开心分享，难过倾诉，这是亲密关系的自然状态', textEn: "Share joy and unload sadness -- that's the natural state of intimacy", score: 6 },
      { text: '只要不影响我自己的状态，怎样都可以', textEn: "Whatever works, as long as it doesn't drain you", score: 4 },
      { text: '我希望成为对方最主要的情感依靠', textEn: "You want to be their primary emotional anchor", score: 3 },
    ],
  },
  {
    text: '你觉得"情绪劳动"（管理关系中的情绪、氛围、沟通）在你们关系中应该如何分配？',
    textEn: "\"Emotional labor\" -- managing the relationship's emotional tone, atmosphere, and communication -- should be distributed how?",
    options: [
      { text: '应该尽量对等，不由某一方单独承担', textEn: "As equally as possible -- it shouldn't fall on just one person", score: 8 },
      { text: '自然倾向于谁擅长谁多做', textEn: "Naturally gravitates to whoever is better at it", score: 5 },
      { text: '没想过这个问题，随缘', textEn: "Never really thought about it -- just let it happen", score: 3 },
      { text: '我愿意承担更多----我对这方面比较敏感', textEn: "You're willing to do more -- you're more attuned to this kind of thing", score: 4 },
    ],
  },
]
