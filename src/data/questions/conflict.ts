import type { Question } from '../types'

// Spectrum: low = avoid/suppress conflict · high = confront/resolve actively
export const conflictQuestions: Question[] = [
  // ── Quick tier (0-2) ─────────────────────────────────────────────────────
  {
    text: '吵架时你的典型反应是：',
    textEn: 'When arguing, your typical response is:',
    options: [
      { text: '需要独处冷静，过一阵再谈', textEn: "Need alone time to cool down, then talk later", score: 6 },
      { text: '倾向于当场说清楚，不过夜', textEn: "Prefer to address it right then -- don't let it sleep", score: 8 },
      { text: '容易情绪激动，事后才后悔说了太多', textEn: "Tend to get heated and regret saying too much afterward", score: 3 },
      { text: '倾向于退让，避免冲突继续升级', textEn: "Tend to back down to stop the escalation", score: 2 },
    ],
  },
  {
    text: '吵架后，通常谁先主动修复关系？',
    textEn: 'After a fight, who usually initiates reconciliation?',
    options: [
      { text: '我通常先主动', textEn: "Usually you", score: 7 },
      { text: '谁的问题谁先道歉', textEn: "Whoever was wrong apologizes first", score: 6 },
      { text: '等对方先来，我需要台阶', textEn: "You wait for them -- you need them to make the first move", score: 3 },
      { text: '不太在意谁先，冷静了自然就好', textEn: "Doesn't matter who's first -- things settle naturally once both calm down", score: 5 },
    ],
  },
  {
    text: '你们在一个重要问题上意见完全相反，讨论多次无果，你会：',
    textEn: "You're completely at odds on an important issue and multiple discussions have gone nowhere. You would:",
    options: [
      { text: '坚持立场，因为我确信我是对的', textEn: "Hold your position -- you're confident you're right", score: 2 },
      { text: '寻求妥协，各退一步找中间方案', textEn: "Look for compromise -- each side gives a little", score: 6 },
      { text: '暂时搁置，先处理能达成共识的部分', textEn: "Set it aside temporarily and work on areas where you can agree", score: 5 },
      { text: '找信任的第三方帮忙分析', textEn: "Bring in a trusted third party to help work through it", score: 7 },
    ],
  },
  // ── Standard tier (3-6) ──────────────────────────────────────────────────
  {
    text: '一场严重争吵结束3天后，你们还处于冷战状态。你更可能：',
    textEn: "Three days after a serious fight, you're still in a cold war. You'd most likely:",
    options: [
      { text: '主动联系，表达想修复的意愿', textEn: "Reach out and express that you want to repair things", score: 8 },
      { text: '发一个小信号（表情包、买东西），不直接提吵架的事', textEn: "Send a small signal (a meme, bringing home food) without directly addressing the fight", score: 6 },
      { text: '继续等，谁先开口谁就认输了', textEn: "Keep waiting -- whoever speaks first loses", score: 2 },
      { text: '假装什么都没发生，让时间冲淡', textEn: "Act as if nothing happened and let time do the work", score: 3 },
    ],
  },
  {
    text: '在争吵中你意识到自己可能说错了，但气还没消完全。你会：',
    textEn: "Mid-argument you realize you may have said something wrong, but you're still angry. You would:",
    options: [
      { text: '当场承认，道歉比赢得争论更重要', textEn: "Acknowledge it on the spot -- apologizing matters more than winning", score: 9 },
      { text: '先平静下来，之后再道歉', textEn: "Calm down first, then apologize later", score: 7 },
      { text: '不主动说，但行动上软化', textEn: "Don't say it aloud, but soften your behavior", score: 4 },
      { text: '等对方先道歉，然后再承认自己的问题', textEn: "Wait for the other person to apologize first, then acknowledge your part", score: 2 },
    ],
  },
  {
    text: '伴侣在你们的朋友面前批评了你，让你感到很丢脸。事后你会：',
    textEn: 'Your partner criticized you in front of friends, leaving you embarrassed. Afterward you would:',
    options: [
      { text: '当天认真谈，说清楚那件事让我感受如何', textEn: "Have a real talk that same day -- explain exactly how it made you feel", score: 8 },
      { text: '提一下，但不想把这件事变得太严重', textEn: "Mention it, but don't want to blow it out of proportion", score: 6 },
      { text: '自己消化，不想小题大做', textEn: "Process it internally and not make a big deal of it", score: 3 },
      { text: '找机会还回去，对等才公平', textEn: "Wait for a chance to return the favor -- fair is fair", score: 2 },
    ],
  },
  {
    text: '你有一个问题反复提过，伴侣每次答应改变但从来没有真正改变。你会：',
    textEn: "You've raised an issue repeatedly and your partner promises to change each time but never does. You would:",
    options: [
      { text: '再次认真谈，并说明这次我需要看到实际改变', textEn: "Have another serious talk, this time making clear you need to see real change", score: 8 },
      { text: '降低预期，接受这可能是TA改变不了的', textEn: "Lower your expectations and accept this may be something they can't change", score: 5 },
      { text: '停止提这件事，说了也没用', textEn: "Stop bringing it up -- it clearly doesn't work", score: 3 },
      { text: '把这件事当作评估关系的重要参考', textEn: "Treat this as meaningful input in how you evaluate the relationship", score: 7 },
    ],
  },
  // ── Full tier (7-10) ─────────────────────────────────────────────────────
  {
    text: '你对"高质量吵架"的理解是：',
    textEn: 'To you, a "productive argument" means:',
    options: [
      { text: '能讲清楚自己的感受和需求', textEn: "Being able to clearly express your feelings and needs", score: 6 },
      { text: '吵完之后对彼此有更深的理解', textEn: "Coming out of it with deeper mutual understanding", score: 8 },
      { text: '能找到实际的解决方案', textEn: "Landing on a concrete solution", score: 7 },
      { text: '不用吵----好的关系应该能平和地讨论', textEn: "Not needing to argue at all -- a good relationship discusses things calmly", score: 4 },
    ],
  },
  {
    text: '伴侣说你"总是这样"或"从来不"，这让你觉得：',
    textEn: 'Your partner says "you always do this" or "you never…" -- that makes you feel:',
    options: [
      { text: '非常不舒服，这种说法是不公平的攻击', textEn: "Very uncomfortable -- that kind of language is an unfair attack", score: 7 },
      { text: '有些在理，可能我确实有某种模式', textEn: "Somewhat valid -- maybe you do have that pattern", score: 5 },
      { text: '想反驳，但先忍着听对方说完', textEn: "Urge to push back, but force yourself to hear them out first", score: 6 },
      { text: "直接打断----\"从来不\"这种话不准确，我要纠正', textEn: 'Interrupt to correct them -- \"never\" is factually inaccurate", score: 3 },
    ],
  },
  {
    text: '你觉得争吵后的关系：',
    textEn: 'After an argument, you feel the relationship is:',
    options: [
      { text: '通常比吵架前更脆弱，需要时间修复', textEn: "Usually more fragile than before and needs time to heal", score: 3 },
      { text: '取决于怎么吵----建设性的争吵可以让关系更好', textEn: "Depends on how it went -- a constructive fight can actually improve things", score: 8 },
      { text: '差不多----谈过了就过了', textEn: "About the same -- talked it out and moved on", score: 5 },
      { text: '如果能诚实地说出感受，争吵后反而更亲近', textEn: "Actually closer, if you were honest about your feelings", score: 9 },
    ],
  },
  {
    text: '你认为一段健康关系应该多久发生一次"需要认真谈的冲突"？',
    textEn: 'How often do you think a healthy relationship should have a "serious conflict that needs talking through"?',
    options: [
      { text: '越少越好，冲突是关系不健康的信号', textEn: "As rarely as possible -- conflict signals something unhealthy", score: 2 },
      { text: '偶尔有，但主要靠平时的小沟通化解', textEn: "Occasionally, but mostly prevented by ongoing small check-ins", score: 5 },
      { text: '定期有，是正常的----避免的代价是积累', textEn: "Regularly -- it's normal and the cost of avoiding it is build-up", score: 7 },
      { text: '随时有----健康的关系应该能随时表达不满', textEn: "Anytime needed -- a healthy relationship can handle expressing discontent at any moment", score: 8 },
    ],
  },
]
