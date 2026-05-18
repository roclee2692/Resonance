import type { Question } from '../types'

// Spectrum: low = security/stability-first · high = growth/meaning-first
export const lifePhilosophyQuestions: Question[] = [
  // ── Quick tier (0-2) ─────────────────────────────────────────────────────
  {
    text: '你获得了一笔意外收入（约半年工资），你会：',
    textEn: 'You receive an unexpected windfall (about six months of salary). You would:',
    options: [
      { text: '立刻规划一次一直想去的旅行', textEn: "Plan that trip you've always wanted to take", score: 3 },
      { text: '拿出一小部分庆祝，其余投资或储蓄', textEn: "Spend a little to celebrate and invest or save the rest", score: 5 },
      { text: '全部存起来，留给未来更重要的事', textEn: "Save all of it for something more important later", score: 8 },
      { text: '投入一个我一直想尝试的副业或项目', textEn: "Put it into a side project or venture you've been wanting to try", score: 7 },
    ],
  },
  {
    text: '你衡量自己"过得好不好"的主要标准是：',
    textEn: 'Your main measure of whether life is going well is:',
    options: [
      { text: '收入水平和职位头衔', textEn: "Income level and job title", score: 2 },
      { text: '是否在做自己真正感兴趣的事', textEn: "Whether you're doing what genuinely interests you", score: 7 },
      { text: '家人朋友是否幸福', textEn: "Whether the people you love are happy", score: 5 },
      { text: '是否在持续学习和成长', textEn: "Whether you're continuously learning and growing", score: 8 },
    ],
  },
  {
    text: '伴侣想辞掉稳定工作去创业，成功率约30%，你会：',
    textEn: 'Your partner wants to quit a stable job to start a business with roughly 30% odds of success. You would:',
    options: [
      { text: '支持，人生就该冒险追求想要的', textEn: "Support them -- life is for taking risks and pursuing what you want", score: 9 },
      { text: '一起分析风险，设定止损线后支持', textEn: "Analyze the risks together, set a stop-loss threshold, then support them", score: 6 },
      { text: '希望TA先做足准备再辞职', textEn: "Ask them to prepare thoroughly before quitting", score: 4 },
      { text: '反对，家庭稳定比理想更重要', textEn: "Oppose it -- family stability matters more than chasing a dream", score: 2 },
    ],
  },
  // ── Standard tier (3-6) ──────────────────────────────────────────────────
  {
    text: '两个工作机会同时出现：A 年薪多40%但每周60-70小时；B 年薪正常但节奏舒适。你会：',
    textEn: 'Two job offers arrive at the same time: A pays 40% more but requires 60-70 hours a week; B is normal pay with a comfortable pace. You choose:',
    options: [
      { text: '选A----挑战和收益让我更有活力', textEn: "A -- the challenge and earnings energize me", score: 3 },
      { text: '选A，但给自己设一个退出时间线', textEn: "A, but with a personal exit timeline", score: 5 },
      { text: '选B----我不愿意把大部分清醒时间卖给工作', textEn: "B -- I won't sell most of my waking hours to work", score: 8 },
      { text: '看阶段，目前选A，有了孩子再考虑B', textEn: "Depends on the stage -- A for now, reconsider if we have kids", score: 6 },
    ],
  },
  {
    text: '"过一个普通的人生：稳定工作、中等收入、没有大成就，但家庭幸福、身体健康、内心平静。"这对你来说：',
    textEn: '"A quiet life: steady job, average income, no big achievements, but a happy family, good health, and inner peace." To you, that sounds:',
    options: [
      { text: '非常理想，这就是我真正想要的', textEn: "Like the ideal -- exactly what you want", score: 2 },
      { text: '还不错，但希望在某个领域留下一些印记', textEn: "Good, but you'd want to leave some mark somewhere", score: 5 },
      { text: '能接受，但没有尝试过更多会有遗憾', textEn: "Acceptable, but you'd regret not trying for more", score: 7 },
      { text: '有些窒息----我需要更多可能性和意义感', textEn: "A bit suffocating -- you need more possibilities and meaning", score: 9 },
    ],
  },
  {
    text: '面对人生的重大节点（换城市、创业、大额投资），你通常的决策方式是：',
    textEn: 'When facing a major life decision (moving cities, starting a business, a big investment), you typically:',
    options: [
      { text: '必须把风险分析清楚了，再迈出那一步', textEn: "Need to fully understand all risks before taking any step", score: 2 },
      { text: '评估主要风险，确认底线，然后行动', textEn: "Assess the main risks, set a floor, then act", score: 5 },
      { text: '相信自己能在过程中找到解决办法', textEn: "Trust yourself to figure it out along the way", score: 7 },
      { text: '某种程度上享受跳进未知的感觉', textEn: "Somewhat enjoy the feeling of jumping into the unknown", score: 9 },
    ],
  },
  {
    text: '一个你尊重的朋友说："你有能力做更多，但你太安于现状了。"你最真实的内心反应是：',
    textEn: "A friend you respect says: \"You're capable of more, but you're too comfortable with the status quo.\" Your honest inner reaction is:",
    options: [
      { text: '不舒服----我对现状满意，这是我的选择', textEn: "Defensive -- you're satisfied with things as they are, and that's your choice", score: 2 },
      { text: '有些触动，但我有自己的理由不冒险', textEn: "Somewhat touched, but you have your own reasons not to risk it", score: 4 },
      { text: '认真想了一下，他说的可能有道理', textEn: "You think about it seriously and wonder if they have a point", score: 7 },
      { text: '正中要害----我自己也觉得有些停滞了', textEn: "It lands -- you've felt stagnant yourself", score: 9 },
    ],
  },
  // ── Full tier (7-10) ─────────────────────────────────────────────────────
  {
    text: '想象25年后回顾这段人生，让你感到最满足的会是：',
    textEn: 'Imagine looking back on this period of life in 25 years. What would make you feel most fulfilled?',
    options: [
      { text: '建立了重要的东西，留下了作品或影响', textEn: "Having built something meaningful, leaving work or impact behind", score: 3 },
      { text: '陪伴了孩子成长，有深厚的家庭纽带', textEn: "Being present as kids grew up, building deep family bonds", score: 5 },
      { text: '成为了更有智慧、更完整的人', textEn: "Becoming a wiser, more whole person", score: 8 },
      { text: '尝试了很多，活得丰富，不受约束', textEn: "Having tried many things, lived richly and without too many constraints", score: 9 },
    ],
  },
  {
    text: '对你来说，未来五年的不确定性（收入、城市、生活走向）：',
    textEn: 'Five-year uncertainty about income, city, and life direction feels to you like:',
    options: [
      { text: '主要是焦虑来源，我需要相对确定的规划', textEn: "Mainly anxiety-inducing -- you need a relatively clear plan", score: 2 },
      { text: '有些不安，但可以接受', textEn: "Somewhat unsettling, but manageable", score: 4 },
      { text: '相对中性----计划赶不上变化是常识', textEn: "Relatively neutral -- everyone knows plans don't survive contact with reality", score: 6 },
      { text: '某种程度上令人兴奋，可能性还是开放的', textEn: "Somewhat exciting -- the possibilities are still open", score: 9 },
    ],
  },
  {
    text: '如果必须在以下人生"根基"中选最重要的一个，你选：',
    textEn: "If you had to choose the single most important foundation for a good life, you'd pick:",
    options: [
      { text: '经济安全----有足够的钱，不为生计担心', textEn: "Financial security -- enough money to not worry about survival", score: 2 },
      { text: '家庭归属----有深厚的家庭关系和爱', textEn: "Family belonging -- deep family bonds and love", score: 4 },
      { text: '自我实现----知道自己是谁、在做有意义的事', textEn: "Self-actualization -- knowing who you are and doing meaningful work", score: 7 },
      { text: '自由----没有不得不留在某处或做某事的理由', textEn: "Freedom -- no obligation to stay anywhere or do anything", score: 9 },
    ],
  },
  {
    text: '回顾过去一年，你最感到"这一年没白活"的理由会是：',
    textEn: 'Looking back at this past year, what would make you feel it was truly worthwhile?',
    options: [
      { text: '收入增长了，财务状况更好了', textEn: "Income grew and financial situation improved", score: 2 },
      { text: '关系更稳定了，家庭更幸福了', textEn: "Relationships deepened and family life got better", score: 5 },
      { text: '学了新东西，能力或认知有明显提升', textEn: "Learned something new -- noticeably sharper skills or understanding", score: 7 },
      { text: '做了一件以前没勇气做的事', textEn: "Did something you didn't have the courage to do before", score: 9 },
    ],
  },
]
