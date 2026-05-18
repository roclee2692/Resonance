import type { Question } from '../types'

// Spectrum: low = pragmatic/flexible on principles · high = principle-driven/firm on values
export const valuesQuestions: Question[] = [
  // ── Quick tier (0-2) ─────────────────────────────────────────────────────
  {
    text: '你的父母强烈反对你的某个重大决定（如搬城市、换工作），你会：',
    textEn: 'Your parents strongly oppose a major decision of yours (e.g., moving cities, changing jobs). You would:',
    options: [
      { text: '听从他们的建议，他们的经验更可靠', textEn: "Follow their advice -- their experience is more reliable", score: 2 },
      { text: '认真考虑他们的意见，但最终自己决定', textEn: "Consider their input seriously, but decide for yourself", score: 6 },
      { text: '尊重但不改变决定，花时间沟通清楚', textEn: "Respect them but hold your ground, and take time to explain your reasoning", score: 7 },
      { text: '这是我的人生，不需要他们的认可', textEn: "It's your life -- you don't need their approval", score: 9 },
    ],
  },
  {
    text: '你和伴侣收入差距较大（一方是另一方的3倍），家庭开支应该：',
    textEn: 'You and your partner have a big income gap (one earns 3× the other). Shared expenses should be:',
    options: [
      { text: '严格AA，各付一半', textEn: "Split exactly 50/50", score: 2 },
      { text: '按收入比例分担', textEn: "Split proportionally by income", score: 6 },
      { text: '放入共同账户统一管理', textEn: "Pooled into a joint account and managed together", score: 7 },
      { text: '收入高的一方自然应该多承担', textEn: "Naturally covered more by whoever earns more", score: 4 },
    ],
  },
  {
    text: '伴侣之间的手机和社交媒体隐私，你认为：',
    textEn: 'Phone and social media privacy between partners -- your view:',
    options: [
      { text: '应该完全透明，没有秘密', textEn: "Should be fully transparent -- no secrets", score: 2 },
      { text: '主动分享，但不翻看对方手机', textEn: "Share openly but don't go through each other's phones", score: 5 },
      { text: '各自有隐私空间，信任比透明更重要', textEn: "Each person has their own privacy -- trust matters more than access", score: 8 },
      { text: '不主动问，对方愿意说就说', textEn: "Don't ask unless they volunteer it", score: 6 },
    ],
  },
  // ── Standard tier (3-6) ──────────────────────────────────────────────────
  {
    text: '一个朋友向你借了钱，约定3个月还，但已经过了6个月还没动静。你会：',
    textEn: 'A friend borrowed money from you, promised to repay in 3 months, but 6 months have passed with no sign. You would:',
    options: [
      { text: '主动开口要，这是应有的权利', textEn: "Bring it up directly -- that's your right", score: 8 },
      { text: '委婉提醒一次，如果还没动静就算了', textEn: "Drop a gentle hint once, and let it go if nothing happens", score: 5 },
      { text: '不好意思开口，等对方自己想起来', textEn: "Feel too awkward to say anything and wait for them to remember", score: 3 },
      { text: '视金额决定，小钱就当送了，大钱才追', textEn: "Depends on amount -- small sum is forgiven, big sum gets followed up", score: 6 },
    ],
  },
  {
    text: '你发现伴侣为了避免一场争吵，对你说了一个无害的谎（比如说"我只花了200块"实际花了500）。你会：',
    textEn: 'You find out your partner told a harmless lie to avoid a fight (e.g., said they spent ¥200 when it was ¥500). You would:',
    options: [
      { text: '直接说出来，不管谎有多小都必须诚实', textEn: "Bring it up -- honesty is non-negotiable regardless of scale", score: 9 },
      { text: '说出来，但语气轻松----主要是想让TA知道我会注意', textEn: "Mention it lightly -- mainly so they know you notice", score: 7 },
      { text: '这次算了，但如果经常这样会有问题', textEn: "Let it go this time, but note it would be a problem if habitual", score: 5 },
      { text: '无所谓，省了一场争吵也挺好的', textEn: "Not a big deal -- saved you both a fight", score: 2 },
    ],
  },
  {
    text: '工作中你发现团队在做一件"大家都在做"的规则灰色地带的事，上级也默许。你会：',
    textEn: 'At work you discover your team is doing something in an ethical gray zone -- "everyone does it" and management looks the other way. You would:',
    options: [
      { text: '直接拒绝参与，规则就是规则', textEn: "Refuse outright -- rules are rules", score: 9 },
      { text: '参与，但内心不舒服，找机会反映', textEn: "Participate but feel uncomfortable, and look for a chance to raise it", score: 5 },
      { text: '随大流，这种事大家都这么做', textEn: "Go along -- everyone does it", score: 2 },
      { text: '评估风险，看对自己的影响大不大再决定', textEn: "Evaluate the risk to yourself first, then decide", score: 4 },
    ],
  },
  {
    text: '伴侣在你们不知情的情况下做了一个对双方都有影响的决定（比如答应父母什么事）。你：',
    textEn: 'Your partner made a decision affecting you both without telling you first (e.g., committed to something with their parents). You:',
    options: [
      { text: '明确说这不行，重大事项必须提前商量', textEn: "Say clearly this isn't OK -- major things must be discussed first", score: 9 },
      { text: '当时不说，但事后认真谈一次这个问题', textEn: "Let it go in the moment but have a real conversation about it later", score: 7 },
      { text: '看具体情况----如果结果还好就算了', textEn: "Depends on the outcome -- if it's fine, let it slide", score: 4 },
      { text: '理解TA的处境，下次提醒一下就够了', textEn: "Understand the situation and just remind them for next time", score: 2 },
    ],
  },
  // ── Full tier (7-10) ─────────────────────────────────────────────────────
  {
    text: '你认为在一段长期关系里，哪种"公平"最能持续？',
    textEn: 'In a long-term relationship, which type of "fairness" is most sustainable?',
    options: [
      { text: '总体对等就好，不需要严格计算', textEn: "Roughly balanced overall -- no need for strict accounting", score: 5 },
      { text: '各自的贡献都被看见和感谢', textEn: "Each person's contributions are seen and appreciated", score: 7 },
      { text: '能动态协商----不同阶段分工可以不同', textEn: "Dynamically negotiated -- roles can shift in different phases", score: 8 },
      { text: '大事对等，小事不计较', textEn: "Equal on big things, not sweating the small stuff", score: 4 },
    ],
  },
  {
    text: '你占有明显优势（收入高、社会资源多、更会表达）时，你如何看待关系中的"权力"？',
    textEn: 'When you hold a clear advantage (higher income, more social connections, better at articulating), how do you view "power" in the relationship?',
    options: [
      { text: '优势应该用来支持对方，而不是控制', textEn: "Advantage should support your partner, not control them", score: 9 },
      { text: '尽量保持平衡，主动给对方更多发言权', textEn: "Try to maintain balance and actively give your partner more voice", score: 7 },
      { text: '自然的优势不需要刻意让出', textEn: "Natural advantages don't need to be artificially surrendered", score: 3 },
      { text: '重要决策还是应该由更有能力的人主导', textEn: "Important decisions should be led by whoever is more capable", score: 2 },
    ],
  },
  {
    text: '你对"人性"最接近哪种判断？',
    textEn: 'Which view of human nature is closest to yours?',
    options: [
      { text: '人基本是自私的，要小心保护自己', textEn: "People are fundamentally self-interested -- protect yourself accordingly", score: 2 },
      { text: '人有自私的一面，但也有真诚合作的能力', textEn: "People have a selfish side but are also capable of genuine cooperation", score: 6 },
      { text: '环境和关系的质量决定人怎么对你', textEn: "Environment and relationship quality determine how people treat you", score: 7 },
      { text: '大部分人在安全的环境下都愿意善意对待彼此', textEn: "Most people are willing to treat each other well in a safe environment", score: 9 },
    ],
  },
  {
    text: '你认为一段亲密关系中，最不可接受的是哪种行为？',
    textEn: "In an intimate relationship, what's the single least acceptable behavior?",
    options: [
      { text: '长期欺骗或重大隐瞒', textEn: "Long-term deception or concealing major truths", score: 9 },
      { text: '不承担家庭责任，让一方长期独自扛', textEn: "Shirking family responsibilities and leaving one person to carry the load", score: 7 },
      { text: '用情绪或冷暴力来控制对方', textEn: "Using emotional coldness or silent treatment to control the other", score: 8 },
      { text: '持续不尊重对方的边界或决定', textEn: "Consistently disrespecting your partner's boundaries or decisions", score: 6 },
    ],
  },
]
