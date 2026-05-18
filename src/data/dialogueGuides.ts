export interface DialogueGuide {
  dimKey: string
  prompts: string[]
  promptsEn: string[]
}

export const DIALOGUE_GUIDES: DialogueGuide[] = [
  {
    dimKey: 'lifePhilosophy',
    prompts: [
      '你觉得我们十年后的生活应该是什么样子？',
      '如果可以重来，你会选择同样的职业路径吗？',
      '你认为什么算是"成功的人生"？',
    ],
    promptsEn: [
      'What does life look like for us in ten years, ideally?',
      'If you could start over, would you choose the same career path?',
      'What does a "successful life" mean to you?',
    ],
  },
  {
    dimKey: 'values',
    prompts: [
      '你觉得我们双方的父母在我们的决策中应该扮演什么角色？',
      '如果我们在某件重要的事上意见不同，你希望我们怎么处理？',
      '你对"公平"在我们关系里是怎么定义的？',
    ],
    promptsEn: [
      'What role do you think our parents should play in our major decisions?',
      'When we disagree on something important, how would you want us to handle it?',
      'How do you define "fairness" in our relationship?',
    ],
  },
  {
    dimKey: 'money',
    prompts: [
      '你理想的家庭财务模式是什么----共同账户、独立账户、还是混合？',
      '你觉得我们每个月应该存多少？有什么储蓄目标吗？',
      '如果我们之间收入差距很大，你希望怎么处理日常开支？',
    ],
    promptsEn: [
      "What's your ideal financial setup -- joint accounts, separate, or a mix?",
      'How much do you think we should save each month? Any specific goals?',
      "If there's a big income gap between us, how would you want to handle shared expenses?",
    ],
  },
  {
    dimKey: 'conflict',
    prompts: [
      '你觉得我们争吵时，什么做法最让你感到受伤？',
      '上一次我们吵架，你觉得哪个环节处理得不好？',
      '你希望我们吵完架后怎么修复？',
    ],
    promptsEn: [
      'What hurts most when we argue?',
      'Looking back at our last real fight -- what could have gone better?',
      'After a fight, what kind of repair feels right to you?',
    ],
  },
  {
    dimKey: 'emotional',
    prompts: [
      '你压力很大的时候，最希望我怎么支持你？',
      '你觉得我有没有哪些情绪处理方式让你感到不舒服？',
      '我们什么时候是彼此支持得最好的？',
    ],
    promptsEn: [
      "When you're under a lot of stress, what kind of support do you need from me?",
      'Is there anything about how I handle emotions that bothers you?',
      'When do you feel we support each other best?',
    ],
  },
  {
    dimKey: 'parenting',
    prompts: [
      '你小时候父母的哪些教育方式你想保留，哪些想改变？',
      '如果我们有了孩子，你觉得谁来做主要照顾者？',
      '你觉得孩子的哪个品质最重要？',
    ],
    promptsEn: [
      'What parts of how you were raised do you want to keep? What would you change?',
      'If we have kids, who do you see as the primary caregiver?',
      'What quality do you most want to nurture in a child?',
    ],
  },
  {
    dimKey: 'growth',
    prompts: [
      '你觉得在我们的关系里，你有没有因为我而改变了什么？',
      '你最近想学什么、想做什么？我能怎么支持你？',
      '你觉得我们各自的独立空间和共同时间现在平衡吗？',
    ],
    promptsEn: [
      "Is there anything about yourself that's changed because of our relationship?",
      'What do you want to learn or try lately? How can I support that?',
      'Do you feel like we have a good balance between togetherness and personal space?',
    ],
  },
  {
    dimKey: 'lifeCooperation',
    prompts: [
      '你觉得我们目前的家务分工合理吗？有没有哪里你感到不满意？',
      '有没有一些你一直在做但感觉没人注意的事情？',
      '你觉得"主动发现问题并解决"和"等对方提醒"哪种方式更适合我们？',
    ],
    promptsEn: [
      'Do you think our household division of labor is fair? Is there anything that frustrates you?',
      "Is there anything you've been doing that feels invisible or unacknowledged?",
      'Do you prefer proactively noticing things that need doing, or being reminded?',
    ],
  },
  {
    dimKey: 'intimacyBoundaries',
    prompts: [
      '我们最近在亲密感上有没有你觉得需要调整的地方？',
      '有没有什么你觉得可以更坦然分享给我的事？',
      '你觉得我们各自的隐私空间边界在哪里？',
    ],
    promptsEn: [
      "Is there anything about our intimacy lately that you'd want to adjust?",
      "Is there something you've held back that you'd feel comfortable sharing with me now?",
      'Where do you draw the line on personal privacy within our relationship?',
    ],
  },
  {
    dimKey: 'socialPace',
    prompts: [
      '你觉得我们目前"只有两人的时间"够不够？',
      '有没有哪种社交安排让你觉得有些消耗？',
      '你最理想的一周时间分配是什么样的？',
    ],
    promptsEn: [
      'Do you feel like we get enough just-us time?',
      'Is there any social commitment that feels draining to you?',
      'What does your ideal week look like in terms of time use?',
    ],
  },
]
