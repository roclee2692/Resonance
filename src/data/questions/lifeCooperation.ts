import type { Question } from '../types'

// Spectrum: low = expects clear role division / reactive · high = proactive equal partner in household
export const lifeCooperationQuestions: Question[] = [
  {
    text: '公寓需要打扫了，你伴侣没有提起也没有动手的迹象。你会：',
    textEn: 'The apartment needs cleaning and your partner shows no sign of noticing or starting. You would:',
    options: [
      { text: '主动开始打扫，不需要TA提', textEn: "Start cleaning yourself -- no need for them to mention it", score: 9 },
      { text: '提醒TA：「我们该打扫了」', textEn: "Remind them: 'We should clean up'", score: 7 },
      { text: '等一等，看TA什么时候注意到', textEn: "Wait and see when they notice", score: 4 },
      { text: '觉得这主要是TA该注意的事', textEn: "Feel it is mainly their job to notice", score: 2 },
    ],
  },
  {
    text: '关于"不可见劳动"（计划购物、追踪账单、记住家人生日、协调日程），你认为：',
    textEn: '"Invisible labor" (planning shopping, tracking bills, remembering birthdays, coordinating schedules) -- your view:',
    options: [
      { text: '两人应该平等承担，包括这类心理和管理负担', textEn: "Should be shared equally, including this kind of mental and administrative load", score: 9 },
      { text: '自然谁更擅长谁来做', textEn: "Naturally falls to whoever is better at it", score: 6 },
      { text: '我主要负责执行，对方来做规划', textEn: "You mainly execute; they do the planning", score: 4 },
      { text: '没想过这个——这些事谁做都行', textEn: "Never thought about it -- whoever does it is fine", score: 3 },
    ],
  },
  {
    text: '你回到家，发现很累，家里也很乱，伴侣正在玩游戏或刷手机。你会：',
    textEn: 'You come home exhausted to a messy apartment and find your partner gaming or scrolling. You would:',
    options: [
      { text: '说出来：「我们能不能一起把家收拾一下」', textEn: "Say something: 'Can we tidy up together?'", score: 8 },
      { text: '自己默默整理，但心里有些不舒服', textEn: "Clean up silently but feel irritated inside", score: 4 },
      { text: '也去休息，觉得今天都累了算了', textEn: "Go rest too -- everyone is tired today", score: 5 },
      { text: '先休息，等情绪平复再提', textEn: "Rest first, then bring it up once you have calmed down", score: 6 },
    ],
  },
  {
    text: '做饭这件事，你对自己在关系中的角色期待是：',
    textEn: 'Regarding cooking, what role do you expect to play in the relationship?',
    options: [
      { text: '我不太会做，期待对方承担更多', textEn: "Not great at it -- you expect your partner to take more responsibility", score: 2 },
      { text: '愿意做但不擅长，会尽力学', textEn: "Willing but not skilled -- you will try to learn", score: 5 },
      { text: '我做饭，对方负责其他家务', textEn: "You cook; they handle other chores", score: 4 },
      { text: '我们轮流做，或者一起做', textEn: "Take turns or cook together", score: 7 },
    ],
  },
  {
    text: '一次家里需要重要维修或处理麻烦事（比如漏水、搬家、税务申报），你会：',
    textEn: "There is an important household task to handle (plumbing issue, moving, filing taxes). You would:",
    options: [
      { text: '主动搞定，TA来了解进展就好', textEn: "Take the lead and handle it -- they just need to stay updated", score: 7 },
      { text: '一起分工处理，不让一人独担', textEn: "Divide it up so neither person carries it alone", score: 9 },
      { text: '期待对方来主导，我配合', textEn: "Expect your partner to lead, with you supporting", score: 4 },
      { text: '希望外包给专业人士，我们都不擅长处理这类事', textEn: "Outsource to professionals -- neither of you is good at this stuff", score: 5 },
    ],
  },
  {
    text: '在你们的日常分工里，谁会做"记住要做什么"这件事（比如记得续签保险、提醒体检）？',
    textEn: 'Who in your relationship tracks "what needs to be done" (renewing insurance, scheduling check-ups, etc.)?',
    options: [
      { text: '大多是我来记', textEn: "Mostly you", score: 4 },
      { text: '大多是对方来记', textEn: "Mostly your partner", score: 5 },
      { text: '用共同的系统管理（日历、清单），不依赖某一人的记忆', textEn: "A shared system (calendar, list) -- not relying on one person's memory", score: 9 },
      { text: '各管各的，都靠自己', textEn: "Each handles their own -- everyone is responsible for themselves", score: 6 },
    ],
  },
  {
    text: '旅行规划这件事，你希望：',
    textEn: 'When planning a trip, you prefer:',
    options: [
      { text: '我来主导全部规划', textEn: "You lead all the planning", score: 4 },
      { text: '对方来主导，我配合', textEn: "Your partner leads, you follow along", score: 4 },
      { text: '分工合作，比如一人负责交通一人负责住宿', textEn: "Divide and conquer -- one handles transport, the other accommodation", score: 8 },
      { text: '一起规划，这是件值得一起做的有趣事', textEn: "Plan it together -- it is something worth doing as a team", score: 7 },
    ],
  },
  {
    text: '如果你比伴侣更善于处理生活事务（更有条理、更会规划），你会：',
    textEn: "If you are significantly better than your partner at managing household tasks (more organized, better at planning), you would:",
    options: [
      { text: '自然承担更多，因为我做得更好', textEn: "Naturally take on more -- you do it better anyway", score: 3 },
      { text: '会处理，但希望对方也在成长而不是永远依赖我', textEn: "Handle things, but want them to grow rather than always depending on you", score: 8 },
      { text: '找到TA擅长的部分来平衡', textEn: "Find what they are good at to balance things out", score: 7 },
      { text: '这是不可持续的，我们需要谈一谈', textEn: "This is not sustainable -- you need to have a talk about it", score: 9 },
    ],
  },
  {
    text: '关于家务，你觉得伴侣的预期和你的预期：',
    textEn: 'When it comes to household expectations, you and your partner:',
    options: [
      { text: '我们从没有认真谈过这个', textEn: "Have never really talked about it seriously", score: 2 },
      { text: '大体默契，不需要明说', textEn: "Mostly in sync without needing to spell it out", score: 4 },
      { text: '有时候会有摩擦，但说开了就好', textEn: "Sometimes have friction, but talking it out resolves it", score: 6 },
      { text: '我们谈过，有比较清晰的共识', textEn: "Have discussed it and have a fairly clear shared understanding", score: 9 },
    ],
  },
  {
    text: '你认为两人共同生活需要一个"系统"（分工规则、共同账户规则、日常流程）吗？',
    textEn: 'Do you think living together requires a "system" (division of labor rules, shared account rules, daily routines)?',
    options: [
      { text: '不需要，随缘就好，灵活更好', textEn: "No -- go with the flow, flexibility is better", score: 2 },
      { text: '部分需要，大原则谈好就行', textEn: "Somewhat -- agreeing on the big principles is enough", score: 5 },
      { text: '需要，一个好的系统能减少很多摩擦', textEn: "Yes -- a good system eliminates a lot of friction", score: 8 },
      { text: '非常需要，我喜欢把这些设计清楚', textEn: "Definitely -- you enjoy designing these systems clearly", score: 9 },
    ],
  },
  {
    text: '一方工作极度繁忙时（比如连续数周加班），家务分配应该：',
    textEn: 'When one person is extremely busy (e.g., weeks of overtime), household tasks should:',
    options: [
      { text: '另一方临时多承担，恢复后再重新平衡', textEn: "Temporarily shift to the other person, rebalance once things settle", score: 8 },
      { text: '保持原来的分工，大家都尽力', textEn: "Maintain the original arrangement -- everyone does their best", score: 4 },
      { text: '外包能外包的，花钱省事', textEn: "Outsource what you can -- spend money to save effort", score: 6 },
      { text: '忙的那方应该主动道谢，另一方自然会理解', textEn: "The busy person should actively express appreciation -- the other will understand naturally", score: 5 },
    ],
  },
  {
    text: '你认为家务"帮忙"和家务"负责"有什么区别？',
    textEn: 'What is the difference between "helping" with housework and "being responsible" for it?',
    options: [
      { text: '没太大区别，只要做了就好', textEn: "Not much difference -- as long as it gets done", score: 3 },
      { text: '帮忙是额外的，负责是默认的——这个区别很重要', textEn: '"Helping" is extra; "responsible" is the default -- this distinction matters a lot', score: 9 },
      { text: '理论上有区别，但实践中不好划分', textEn: "There is a theoretical difference, but it is hard to draw in practice", score: 6 },
      { text: '我从没想过这个问题', textEn: "You have never thought about this", score: 2 },
    ],
  },
]
