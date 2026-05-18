import type { Question } from '../../types'

// Spectrum: low = stability/comfort → high = continuous growth/adaptation
export const marriedGrowthQuestions: Question[] = [
  // ── Quick tier (0-2) ─────────────────────────────────────────────────────
  {
    text: '在你们在一起的这段时间里，你觉得自己成长了多少？',
    textEn: "Over the time you've been together, how much do you feel you've grown?",
    options: [
      { text: '很多----这段关系让我成为了更好的人', textEn: "A lot -- this relationship has made you a better person", score: 9 },
      { text: '有一些，在某些方面有所改变', textEn: "Some -- changed in certain areas", score: 7 },
      { text: '不确定，也许有，也许没有', textEn: "Uncertain -- maybe, maybe not", score: 4 },
      { text: '感觉某些方面反而受到了限制', textEn: "In some ways you feel more constrained than before", score: 2 },
    ],
  },
  {
    text: '当你想要改变自己的某些习惯或追求新的方向时，伴侣的态度通常是：',
    textEn: "When you want to change a habit or pursue a new direction, your partner's usual attitude is:",
    options: [
      { text: '支持并鼓励，TA是我改变的助力', textEn: "Supportive and encouraging -- they're an engine for your change", score: 9 },
      { text: '支持，但比较被动，不会主动推动', textEn: "Supportive but passive -- doesn't actively push", score: 7 },
      { text: '中性，不干涉也不积极参与', textEn: "Neutral -- neither interferes nor actively participates", score: 5 },
      { text: '有时会质疑或担心，让我犹豫', textEn: "Sometimes questions or worries, making you hesitate", score: 2 },
    ],
  },
  {
    text: '你们两人的兴趣爱好和关注点在过去几年里有什么变化？',
    textEn: 'How have your interests and areas of focus changed over the past few years?',
    options: [
      { text: '越来越有交集，也相互影响发展了新兴趣', textEn: "Growing overlap -- you've influenced each other and developed new interests", score: 8 },
      { text: '基本维持各自的兴趣，没有太多重叠', textEn: "Mostly maintained separate interests -- little overlap", score: 6 },
      { text: '在向不同方向发散，共同话题在减少', textEn: "Diverging in different directions -- fewer shared topics", score: 3 },
      { text: '一方的兴趣开始主导我们共同生活', textEn: "One person's interests have started to dominate your shared life", score: 4 },
    ],
  },
  // ── Standard tier (3-5) ──────────────────────────────────────────────────
  {
    text: '在这段关系里，你们有多少是"各自独立完成"的个人目标，又有多少是共同追求的？',
    textEn: 'In this relationship, how much is individual goals pursued independently vs. goals pursued together?',
    options: [
      { text: '两者都有，保持了良好的个人与共同的平衡', textEn: "Both -- you've maintained a healthy balance between individual and shared goals", score: 8 },
      { text: '大多是共同目标，个人目标较少', textEn: "Mostly shared goals -- limited individual ones", score: 5 },
      { text: '大多是各自目标，缺少真正的共同项目', textEn: "Mostly individual goals -- lacking truly shared projects", score: 5 },
      { text: '说实话，我不太确定我们有什么共同的目标', textEn: "Honestly, you're not sure what your shared goals even are", score: 2 },
    ],
  },
  {
    text: '当伴侣对某件你不熟悉的事情产生热情（一个新领域、新课程、新的人生方向），你的反应通常是：',
    textEn: 'When your partner gets excited about something unfamiliar to you (a new field, course, or life direction), you usually:',
    options: [
      { text: '真心好奇，会主动了解TA在关注什么', textEn: "Genuinely curious -- proactively find out what they're into", score: 8 },
      { text: '支持TA，但不会深入参与', textEn: "Support them but don't dive in yourself", score: 7 },
      { text: '有些担心----这是否会占用太多时间或资源', textEn: "A bit worried -- will this take too much time or resources?", score: 4 },
      { text: '觉得TA变了，有点不安', textEn: "Feel unsettled -- they're changing", score: 2 },
    ],
  },
  {
    text: '你们有没有定期（哪怕不正式地）讨论"我们这段关系是否还在向好的方向走"？',
    textEn: 'Do you and your partner periodically (even informally) discuss "is our relationship still moving in a good direction"?',
    options: [
      { text: '有，这是我们关系健康的一部分', textEn: "Yes -- it's part of how you keep the relationship healthy", score: 9 },
      { text: '偶尔有，通常是在某个触发点之后', textEn: "Occasionally -- usually triggered by something specific", score: 6 },
      { text: '几乎没有，感觉有点奇怪', textEn: "Barely -- feels a bit awkward", score: 3 },
      { text: '我们回避谈这类话题', textEn: "You avoid these kinds of conversations", score: 1 },
    ],
  },
  // ── Full tier (6-8) ──────────────────────────────────────────────────────
  {
    text: '如果伴侣告诉你，TA想做一件与目前生活完全不同的事（转行、去进修、创业），你的第一感受是：',
    textEn: 'If your partner told you they want to do something completely different from your current life (career change, further education, starting a business), your first feeling would be:',
    options: [
      { text: '兴奋----为TA高兴，想支持TA探索', textEn: "Excited -- happy for them and wanting to support their exploration", score: 9 },
      { text: '谨慎但开放，想了解更多再判断', textEn: "Cautious but open -- want to understand more before judging", score: 7 },
      { text: '担忧----担心对家庭/财务的冲击', textEn: "Worried -- concerned about the impact on family and finances", score: 4 },
      { text: '抵触----这与我们目前的规划不符', textEn: "Resistant -- this doesn't fit your current plans", score: 2 },
    ],
  },
  {
    text: '回顾你们共同的挑战（比如经历困难时期、跨越某个重大关口），这些经历：',
    textEn: "Looking back at challenges you've faced together (difficult periods, major hurdles), those experiences:",
    options: [
      { text: '让我们更了解彼此，关系更深了', textEn: "Made you know each other better and deepened the relationship", score: 9 },
      { text: '度过了，但没有显著改变我们的关系质量', textEn: "You got through them, but they didn't significantly change the relationship", score: 6 },
      { text: '是有压力的经历，但我们基本撑过来了', textEn: "Were stressful, but you basically managed", score: 5 },
      { text: '留下了一些没有完全处理的痕迹', textEn: "Left some marks that haven't been fully processed", score: 3 },
    ],
  },
  {
    text: '和刚在一起的时候相比，你觉得你们的关系现在：',
    textEn: 'Compared to when you first got together, your relationship now feels:',
    options: [
      { text: '更深厚----我们更了解彼此，更有默契', textEn: "Deeper -- you know each other better and are more in sync", score: 9 },
      { text: '不同----失去了一些热情但有了更多稳定', textEn: "Different -- less passion but more stability", score: 6 },
      { text: '有些停滞，缺少新鲜感和成长动力', textEn: "Somewhat stagnant -- lacking freshness and growth momentum", score: 3 },
      { text: '我有时怀念刚在一起时的状态', textEn: "You sometimes miss what it was like at the beginning", score: 4 },
    ],
  },
]
