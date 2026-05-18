import type { Question } from '../types'

// Spectrum: low = enmeshment/full transparency needed · high = clear individual boundaries + trust
export const intimacyBoundariesQuestions: Question[] = [
  {
    text: '你的同性或异性密友会定期和你深夜长谈（情感倾诉等），伴侣知道但有些不舒服。你会：',
    textEn: 'A close friend regularly has long late-night calls with you (emotional sharing, etc.) and your partner knows but feels uncomfortable. You would:',
    options: [
      { text: '告诉伴侣：TA需要信任我，这个友谊不会改变', textEn: "Tell your partner they need to trust you -- this friendship isn't going to change", score: 8 },
      { text: '认真了解伴侣的具体顾虑，看有没有合理之处', textEn: "Listen to your partner's specific concerns and see if they're reasonable", score: 7 },
      { text: '主动减少这类深夜联系的频率，伴侣的感受更重要', textEn: "Proactively reduce late-night contact -- your partner's feelings matter more", score: 4 },
      { text: '跟那位朋友保持距离，避免麻烦', textEn: "Distance yourself from that friend to avoid the trouble", score: 2 },
    ],
  },
  {
    text: '经历了一段繁忙疏离的时期，你和伴侣的身体亲密明显减少。你会：',
    textEn: 'After a busy, distant period, physical intimacy with your partner has noticeably decreased. You would:',
    options: [
      { text: '主动提出：我们好像最近有些疏远了', textEn: "Bring it up directly: \"We seem to have drifted apart lately\"", score: 8 },
      { text: '等一等，等状态好了自然会恢复', textEn: "Wait it out -- things will naturally recover when life settles", score: 4 },
      { text: '用其他方式维持亲近感（一起吃饭、睡前聊天）', textEn: "Maintain closeness in other ways (dinners together, bedtime talks)", score: 6 },
      { text: '觉得这是自然起伏，不需要特别处理', textEn: "See it as natural fluctuation -- no need to address it specifically", score: 5 },
    ],
  },
  {
    text: '你和伴侣关系中的亲密细节（吵架内容、性生活、财务困难），你会和亲近的朋友分享到什么程度？',
    textEn: 'Intimate details of your relationship (fights, sex life, financial difficulties) -- how much would you share with close friends?',
    options: [
      { text: '几乎不说----这是我们自己的事', textEn: "Almost nothing -- it's your private business", score: 8 },
      { text: '说一些，但不会涉及很隐私的细节', textEn: "Some things, but not deeply private details", score: 6 },
      { text: '说得比较多，朋友是我的支持系统', textEn: "Quite a lot -- friends are your support system", score: 3 },
      { text: '看情况，遇到很大的困扰时会详细说', textEn: "Depends -- when facing serious trouble, you'd share more", score: 5 },
    ],
  },
  {
    text: '你有一些过去的经历或内心世界，感觉即使在最亲密的关系里也想保留为自己的空间。对此你的态度是：',
    textEn: "You have some past experiences or inner thoughts you'd want to keep private even in your closest relationship. Your view:",
    options: [
      { text: '这很正常，每个人都需要一些内心的私人领域', textEn: "Perfectly normal -- everyone needs some inner private territory", score: 8 },
      { text: '理解，但如果伴侣问我会诚实回答', textEn: "Understandable, but if your partner asks, you'd answer honestly", score: 6 },
      { text: '有些不安----真正的亲密意味着没有秘密', textEn: "Slightly unsettling -- true intimacy means no secrets", score: 3 },
      { text: '看内容，有些事确实不需要说', textEn: "Depends on what it is -- some things genuinely don't need to be shared", score: 5 },
    ],
  },
  {
    text: '你对"忠诚"的定义包括：',
    textEn: 'Your definition of "loyalty" in a relationship includes:',
    options: [
      { text: '不发生身体出轨就是忠诚', textEn: "No physical infidelity -- that's the definition", score: 3 },
      { text: '不发生身体和情感的出轨', textEn: "No physical or emotional infidelity", score: 6 },
      { text: '不把应该属于关系的核心情感长期转给第三方', textEn: "Not directing the core emotional investment of the relationship toward a third party long-term", score: 8 },
      { text: '忠诚是个人的承诺，具体边界要两人谈清楚', textEn: "Loyalty is a personal commitment -- the specific boundaries need to be agreed on by both", score: 7 },
    ],
  },
  {
    text: '伴侣想看你手机上和某个朋友的聊天记录，TA说只是好奇，没有怀疑。你会：',
    textEn: "Your partner wants to see your chat history with a friend, saying they're just curious, not suspicious. You would:",
    options: [
      { text: '直接给，我没什么好藏的', textEn: "Hand it over -- you have nothing to hide", score: 2 },
      { text: '给，但会觉得有些不舒服', textEn: "Give it, but feel a bit uncomfortable", score: 4 },
      { text: '温和但清晰地说：我的隐私我来保护', textEn: "Gently but clearly say: your privacy is yours to protect", score: 8 },
      { text: '问TA为什么要看，先了解背后的原因', textEn: "Ask why they want to see it first -- understand the motivation", score: 7 },
    ],
  },
  {
    text: '你和伴侣在长期亲密关系中，你期待的亲密频率和质量：',
    textEn: 'In a long-term relationship, your expectations around the frequency and quality of physical intimacy:',
    options: [
      { text: '这是关系中非常重要的部分，需要主动维护', textEn: "It's a very important part of the relationship -- needs active attention", score: 8 },
      { text: '重要，但不是我判断关系质量的主要标准', textEn: "Important, but not your main measure of relationship quality", score: 6 },
      { text: "随关系自然发展，不需要\"经营\"', textEn: 'Let it evolve naturally -- doesn't need to be \"managed\"", score: 4 },
      { text: '坦白说，这是我比较难以开口讨论的话题', textEn: "Honestly, this is a topic you find hard to discuss openly", score: 3 },
    ],
  },
  {
    text: '你对伴侣社交媒体上发布的内容（和朋友的合照、文字等）的期待是：',
    textEn: 'Regarding what your partner posts on social media (photos with friends, text posts, etc.):',
    options: [
      { text: 'TA想发什么就发什么，我不会干涉', textEn: "They can post whatever they want -- you won't interfere", score: 9 },
      { text: '涉及我们关系的内容最好提前告知我', textEn: "Anything involving your relationship should be mentioned to you beforehand", score: 7 },
      { text: '重要事项应该和我商量', textEn: "Important posts should be discussed with you", score: 5 },
      { text: '我们的关系不应该过度曝光在社交媒体上', textEn: "Your relationship shouldn't be overly exposed on social media", score: 6 },
    ],
  },
  {
    text: '你的父母或家人经常问关于你们关系的细节（吵架了吗？打算什么时候结婚？），你通常：',
    textEn: 'Your family frequently asks about your relationship details (Did you fight? When are you getting married?). You typically:',
    options: [
      { text: '正常分享，家人关心是好事', textEn: "Share normally -- family caring is a good thing", score: 3 },
      { text: '选择性地说，不让家人对伴侣形成偏见', textEn: "Share selectively -- don't want family forming biases about your partner", score: 7 },
      { text: '明确设定边界：我们的事我们自己处理', textEn: "Set a clear boundary: your relationship is your business to handle", score: 9 },
      { text: '应付一下就行，避免麻烦', textEn: "Give vague answers to avoid the hassle", score: 5 },
    ],
  },
  {
    text: '如果伴侣和前任偶尔保持普通联系，你会：',
    textEn: 'If your partner occasionally keeps casual contact with an ex, you would:',
    options: [
      { text: '完全不在意，过去的事就是过去的', textEn: "Not care at all -- the past is the past", score: 9 },
      { text: '有些不舒服，但觉得不应该干涉', textEn: "Feel a bit uncomfortable, but think you shouldn't interfere", score: 5 },
      { text: '坦诚告诉TA这让我不舒服，希望TA考虑我的感受', textEn: "Honestly tell them it makes you uncomfortable and ask them to consider your feelings", score: 7 },
      { text: '明确表达反对，这是我的底线', textEn: "Make your opposition clear -- this is a hard limit for you", score: 3 },
    ],
  },
  {
    text: '在亲密关系中，你需要多少"只属于自己的时间"？',
    textEn: 'How much "just for yourself" time do you need within an intimate relationship?',
    options: [
      { text: '不多，和伴侣在一起我就很满足', textEn: "Not much -- being with your partner is fulfilling enough", score: 2 },
      { text: '一点就够，偶尔需要独处', textEn: "A little -- occasionally need to be alone", score: 4 },
      { text: '每天都需要一段个人时间，否则会感到透不过气', textEn: "Need personal time every day or you'll feel suffocated", score: 7 },
      { text: '很多----我本质上需要大量独处空间才能充电', textEn: "A lot -- you fundamentally need large amounts of solitude to recharge", score: 9 },
    ],
  },
  {
    text: '你认为亲密关系中的"合理边界"意味着：',
    textEn: 'In your view, "healthy boundaries" in a close relationship means:',
    options: [
      { text: '不需要边界----真正的亲密就是完全开放', textEn: "No need for boundaries -- true intimacy is complete openness", score: 2 },
      { text: '彼此信任，所以边界自然而然', textEn: "Trust exists, so boundaries emerge naturally", score: 5 },
      { text: '健康的边界是尊重，不是距离', textEn: "Healthy boundaries are about respect, not distance", score: 8 },
      { text: '边界需要谈清楚，不能靠猜', textEn: "Boundaries need to be explicitly discussed -- you can't rely on guessing", score: 9 },
    ],
  },
]
