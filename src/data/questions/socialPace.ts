import type { Question } from '../types'

// Spectrum: low = high social needs / spontaneous pace · high = introvert recharge / structured pace
export const socialPaceQuestions: Question[] = [
  {
    text: '一个理想的周末，你最想：',
    textEn: 'Your ideal weekend looks like:',
    options: [
      { text: '参加朋友的聚会或出去玩，越热闹越好', textEn: "Going to a friend's party or outing -- the more lively the better", score: 2 },
      { text: '和伴侣或一两个朋友度过，不需要大场合', textEn: "Spending time with your partner or one or two friends -- no big gatherings needed", score: 5 },
      { text: '一半时间社交，一半时间属于自己', textEn: "Half social, half personal time", score: 6 },
      { text: '大部分时间安静地待着，读书、做自己的事', textEn: "Mostly quiet -- reading, doing your own thing", score: 8 },
    ],
  },
  {
    text: '你每周和外部朋友（不含伴侣）聚会的频率，你觉得理想是：',
    textEn: 'Ideal weekly frequency for seeing friends outside of your partner:',
    options: [
      { text: '3次以上，社交是我的充电方式', textEn: "3+ times -- socializing is how you recharge", score: 2 },
      { text: '每周1-2次，保持活跃的社交生活', textEn: "1-2 times a week -- maintaining an active social life", score: 4 },
      { text: '每两周1次就够', textEn: "Once every two weeks is enough", score: 7 },
      { text: '每月1-2次，我不需要频繁的社交', textEn: "1-2 times a month -- you don't need frequent socializing", score: 9 },
    ],
  },
  {
    text: '临时改变计划（比如临时决定取消计划或加入计划），你的感受是：',
    textEn: 'When plans change last-minute (canceled or added spontaneously), you feel:',
    options: [
      { text: '完全没问题，灵活是我的风格', textEn: "Totally fine -- flexibility is your style", score: 2 },
      { text: '偶尔没关系，但不应该成为习惯', textEn: "Occasionally OK, but shouldn't become a pattern", score: 5 },
      { text: '有些不舒服，我需要一定的可预期性', textEn: "Somewhat uncomfortable -- you need some predictability", score: 7 },
      { text: '很影响我----我依赖计划来管理我的精力', textEn: "Significantly disruptive -- you depend on plans to manage your energy", score: 9 },
    ],
  },
  {
    text: '理想情况下，你希望每周与伴侣相处的总时长大约是：',
    textEn: 'Ideally, about how much time per week would you and your partner spend together?',
    options: [
      { text: '尽可能多，我喜欢大量的陪伴', textEn: "As much as possible -- you love lots of togetherness", score: 2 },
      { text: '下班后大部分时间一起', textEn: "Most evenings after work", score: 4 },
      { text: '有质量的共处时间，但不需要时刻黏在一起', textEn: "Quality time together, but no need to be joined at the hip", score: 7 },
      { text: '各自有各自的生活，共处时间不用太多但要有质量', textEn: "Mostly separate lives -- less together time, but high quality", score: 9 },
    ],
  },
  {
    text: '伴侣的朋友圈比你活跃得多，TA几乎每个周末都有社交安排。你会：',
    textEn: 'Your partner is much more socially active than you and has plans almost every weekend. You would:',
    options: [
      { text: '很好，我可以用这些时间做自己的事', textEn: "Great -- you can use that time for yourself", score: 8 },
      { text: '有时候会感觉被排在次要位置', textEn: "Sometimes feel like you're a secondary priority", score: 3 },
      { text: '提出我们需要更多只有彼此的时间', textEn: "Raise that you need more just-us time", score: 6 },
      { text: '尽量融入TA的社交圈，一起参加', textEn: "Try to join their social circle and attend together", score: 4 },
    ],
  },
  {
    text: '你是一个典型的早起者还是夜猫子？',
    textEn: 'Are you a morning person or a night owl?',
    options: [
      { text: '明显的早起，晚上10点前就开始困', textEn: "Clearly a morning person -- drowsy before 10pm", score: 9 },
      { text: '偏早起，但不算极端', textEn: "Somewhat of a morning person, but not extreme", score: 6 },
      { text: '偏夜猫子，但可以调整', textEn: "Somewhat a night owl, but adaptable", score: 5 },
      { text: '典型的夜猫子，深夜才开始进入状态', textEn: "Clearly a night owl -- don't hit your stride until late at night", score: 2 },
    ],
  },
  {
    text: '在关系中，你对"我们的时间"和"我自己的时间"的预期是：',
    textEn: 'Your expectations about "our time" vs. "my time" in a relationship:',
    options: [
      { text: '爱人就是我最好的朋友，不需要刻意区分', textEn: "Your partner is your best friend -- no need to deliberately separate the two", score: 2 },
      { text: '需要一些各自的空间，但共处时间仍是主要的', textEn: "Need some personal space, but shared time is still primary", score: 5 },
      { text: "希望有清晰的\"共处\"和\"个人\"时间划分', textEn: 'Want a clear distinction between together time and personal time", score: 7 },
      { text: '保持各自独立的生活，共处是两条平行线的交汇', textEn: "Maintain largely independent lives -- togetherness is where two parallel paths intersect", score: 9 },
    ],
  },
  {
    text: '你参加了一个社交场合，认识了很多新朋友，相处了3个小时。结束后你感到：',
    textEn: 'You attended a social event, met many new people, and mingled for 3 hours. Afterward you feel:',
    options: [
      { text: '精力充沛，我喜欢这种感觉', textEn: "Energized -- you love this feeling", score: 2 },
      { text: '还好，但需要安静一会儿', textEn: "Fine, but you need a quiet moment", score: 5 },
      { text: '有些耗尽，需要独处来恢复', textEn: "Somewhat drained -- need alone time to recover", score: 7 },
      { text: '精力明显消耗，独处对我来说是必需的充电方式', textEn: "Significantly depleted -- solitude is essential for recharging", score: 9 },
    ],
  },
  {
    text: '大的生活节点（换城市、换工作、重大消费），你通常是：',
    textEn: 'When facing major life decisions (moving, changing jobs, a big purchase), you typically:',
    options: [
      { text: '有想法了就快速行动，我喜欢当机立断', textEn: "Act quickly once you have an idea -- you like being decisive", score: 2 },
      { text: '考虑清楚后比较快速决定', textEn: "Think it through, then decide fairly quickly", score: 5 },
      { text: '充分研究，做好规划再行动', textEn: "Research thoroughly and plan carefully before acting", score: 7 },
      { text: '需要很长时间和多方信息才能做决定', textEn: "Need a long time and extensive information before deciding", score: 9 },
    ],
  },
  {
    text: '你理想的节假日安排是：',
    textEn: 'Your ideal holiday arrangement:',
    options: [
      { text: '热闹的家庭聚会或朋友旅行', textEn: "Lively family gatherings or group trips with friends", score: 2 },
      { text: '平衡----部分时间走亲访友，部分时间两人独处', textEn: "Balanced -- some visiting family/friends, some just-the-two-of-you time", score: 5 },
      { text: '主要和伴侣一起，只有少量家庭聚会', textEn: "Mostly with your partner, minimal family obligations", score: 7 },
      { text: '安静地过，不想被假期日程填满', textEn: "Quiet and unstructured -- you don't want your holidays packed with plans", score: 9 },
    ],
  },
  {
    text: '你对"朋友在我们的关系中扮演什么角色"的期待是：',
    textEn: 'What role do you expect friends to play in your relationship?',
    options: [
      { text: '朋友圈很重要，我希望伴侣也融入我的朋友圈', textEn: "Friends matter a lot -- you want your partner to integrate into your circle", score: 3 },
      { text: '各自维持各自的友谊，偶尔共同社交', textEn: "Each maintain your own friendships, with occasional shared socializing", score: 7 },
      { text: '关系的核心是两个人，不依赖朋友圈', textEn: "The relationship's core is just the two of you -- not reliant on friend groups", score: 8 },
      { text: '朋友是支持系统，但不应该过度渗入我们的关系', textEn: "Friends are a support system but shouldn't overly penetrate your relationship", score: 6 },
    ],
  },
  {
    text: '你觉得两个人的生活节奏（作息、社交频率、假期使用方式）需要：',
    textEn: "Two people's life rhythms (sleep schedule, social frequency, how holidays are used) need to be:",
    options: [
      { text: '高度一致，否则会有很多摩擦', textEn: "Highly aligned -- otherwise there'll be constant friction", score: 4 },
      { text: '大致接近，细节上可以有差异', textEn: "Roughly similar, with room for differences in the details", score: 6 },
      { text: '相互理解和尊重就够，不需要完全一样', textEn: "Mutually understood and respected -- doesn't need to be identical", score: 8 },
      { text: '各自的节奏是独立的，需要协商共处的部分', textEn: "Independently maintained, with negotiation on the shared parts", score: 7 },
    ],
  },
]
