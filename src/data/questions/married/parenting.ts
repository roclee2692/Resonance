import type { Question } from '../../types'

// Spectrum: low = child-centric/intensive → high = independent person approach
export const marriedParentingQuestions: Question[] = [
  // ── Quick tier (0-2) ─────────────────────────────────────────────────────
  {
    text: '关于是否（或何时）要孩子，你们目前的状态是：',
    textEn: 'On whether (or when) to have children, where are you as a couple right now?',
    weight: 2,
    options: [
      { text: '已经达成共识并在实施', textEn: "Reached consensus and acting on it", score: 9 },
      { text: '有共识，但时间还在讨论中', textEn: "Aligned on the decision, still discussing timing", score: 7 },
      { text: '仍然存在分歧，需要继续沟通', textEn: "Still a disagreement -- needs more conversation", score: 3 },
      { text: '这是我们之间一个悬而未决的核心问题', textEn: "An unresolved core issue between you", score: 1 },
    ],
  },
  {
    text: '如果你们已有孩子，日常育儿工作的实际分配是否与你们当初设想的相符？',
    textEn: 'If you have children, does the actual day-to-day parenting split match what you originally expected?',
    options: [
      { text: '基本相符，分工符合预期', textEn: "Mostly yes -- the division matches expectations", score: 7 },
      { text: '有些偏差，但还在可接受范围', textEn: "Some deviation, but within acceptable range", score: 6 },
      { text: '差距较大，一方承担了远超预期的工作量', textEn: "Significant gap -- one person carries far more than expected", score: 2 },
      { text: '我们还没有孩子，跳过这题', textEn: "You don't have children -- skip this one", score: 5 },
    ],
  },
  {
    text: '在孩子的教育方式上，你们的实际立场有多接近？',
    textEn: 'How aligned are your actual parenting approaches when it comes to education?',
    options: [
      { text: '非常接近，我们有共同的教育理念', textEn: "Very aligned -- you share a common philosophy", score: 8 },
      { text: '有些分歧，但能在具体事上协商', textEn: "Some differences, but you can negotiate specifics", score: 6 },
      { text: '有明显分歧，教育方式是我们争论的来源', textEn: "Noticeable disagreement -- education style is a source of conflict", score: 2 },
      { text: '还没有认真讨论过这个（还没有孩子）', textEn: "Haven't seriously discussed it yet (no children)", score: 4 },
    ],
  },
  // ── Standard tier (3-5) ──────────────────────────────────────────────────
  {
    text: '当你们在育儿决定上意见不一（上什么学、参加什么活动、如何管教），通常怎么解决？',
    textEn: 'When you disagree on a parenting decision (schools, activities, discipline), how do you usually resolve it?',
    options: [
      { text: '充分讨论，最终达成双方都认同的方案', textEn: "Full discussion until you reach something both agree on", score: 8 },
      { text: '一方通常主导育儿决定', textEn: "One person typically leads parenting decisions", score: 4 },
      { text: '各管各的领域，减少正面分歧', textEn: "Each handles different domains to minimize direct conflict", score: 5 },
      { text: '在孩子面前分歧有时会暴露出来', textEn: "Disagreements sometimes surface in front of the children", score: 2 },
    ],
  },
  {
    text: '有了孩子之后，你们夫妻之间的关系质量（亲密感、连接感）有什么变化？',
    textEn: 'Since having children, how has the quality of your relationship (intimacy, connection) changed?',
    options: [
      { text: '总体维持得不错，我们有意识地保护二人时间', textEn: "Generally well-maintained -- you consciously protect couple time", score: 8 },
      { text: '有所下降，但觉得是阶段性的', textEn: "Declined somewhat, but you see it as a phase", score: 6 },
      { text: '明显下降，孩子占据了几乎所有精力', textEn: "Noticeably declined -- the child takes almost all energy", score: 3 },
      { text: '我们还没有孩子', textEn: "You don't have children", score: 5 },
    ],
  },
  {
    text: '对于祖父母辈参与育儿，你们目前的安排是否令双方满意？',
    textEn: 'Are you both satisfied with the current arrangement for grandparent involvement in parenting?',
    options: [
      { text: '是的，我们明确了参与边界，整体和谐', textEn: "Yes -- you've set clear involvement boundaries and things are harmonious", score: 8 },
      { text: '大致满意，但偶尔有摩擦', textEn: "Mostly satisfied, but occasional friction", score: 6 },
      { text: '不太满意----某一方的父母参与过多或过少引发冲突', textEn: "Not really -- one side's parents being too involved or too absent causes conflict", score: 2 },
      { text: '还没遇到这个问题（还没孩子）', textEn: "Haven't faced this yet (no children)", score: 5 },
    ],
  },
  // ── Full tier (6-8) ──────────────────────────────────────────────────────
  {
    text: '你的育儿方式和你自己当年被养育的方式相比，有多大差异？',
    textEn: 'How different is your parenting style from how you yourself were raised?',
    options: [
      { text: '我在有意识地复制好的部分，改掉不好的部分', textEn: "Consciously keeping what worked, changing what didn't", score: 8 },
      { text: '大部分类似，我觉得那样挺好', textEn: "Mostly similar -- you thought that approach was fine", score: 5 },
      { text: '我努力做得完全不同，但有时会不自觉地重复', textEn: "Trying to be very different, but sometimes unconsciously repeat old patterns", score: 6 },
      { text: '我很难分辨----没太仔细想过这个问题', textEn: "Hard to say -- haven't thought about it carefully", score: 3 },
    ],
  },
  {
    text: '如果孩子未来在某件事上做出你不认同的重大选择（专业、伴侣、生活方式），你预期你会：',
    textEn: "If your child makes a major life choice you disagree with (field of study, partner, lifestyle), you expect you'd:",
    options: [
      { text: '尊重TA的选择，只在被问时提意见', textEn: "Respect their choice and only offer opinions when asked", score: 8 },
      { text: '表达我的顾虑，然后放手', textEn: "Express your concerns, then let go", score: 7 },
      { text: '持续提出反对，直到TA重新考虑', textEn: "Keep pushing back until they reconsider", score: 2 },
      { text: '我和伴侣对这类情况可能反应不同', textEn: "You and your partner would likely react differently to this", score: 5 },
    ],
  },
  {
    text: '你觉得伴侣在育儿角色上给了你足够的认可和感谢吗？',
    textEn: 'Do you feel your partner sufficiently acknowledges and appreciates your parenting role?',
    options: [
      { text: '是的，TA经常表达欣赏和感谢', textEn: "Yes -- they regularly express appreciation", score: 8 },
      { text: '大多数时候有，但不够稳定', textEn: "Mostly yes, but inconsistently", score: 6 },
      { text: '比较少，我有时觉得付出被忽视', textEn: "Rarely -- you sometimes feel your efforts go unnoticed", score: 2 },
      { text: '这不是我们关系的问题（还没孩子）', textEn: "Not applicable (no children yet)", score: 5 },
    ],
  },
]
