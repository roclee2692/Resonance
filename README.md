# 共振 · Resonance

**A structured compatibility assessment tool for couples and married partners.**

共振（Resonance）不是"测你们合不合"的算命工具，而是一个**结构化对话触发器**。  
两人各自独立作答，完成后生成雷达图对比，发现真正重要的分歧点，并附带对话引导问题。

> No right answers. Just whether you're aligned on what matters.

---

## Features · 功能

| | 中文 | English |
|---|---|---|
| **两种版本** | 情侣/恋人版 + 已婚/同居版 | Couple mode + Married/cohabiting mode |
| **三种题量** | 快速 21 题 / 标准 49 题 / 深度 110 题 | Quick 21 / Standard 49 / Full 110 |
| **雷达图对比** | 7–10 个维度可视化 | 7–10 dimension radar chart |
| **对话引导** | 每个维度附带 3 个引导问题 | 3 dialogue prompts per dimension |
| **隐私优先** | 所有数据仅存在设备本地 | All data stays on your device |
| **双语支持** | 中文 / 英文界面切换 | Chinese / English UI toggle |
| **分享结果** | 可导出图片 | Export results as image |

---

## Dimensions · 测评维度

### Couple / 情侣版 (10 dimensions)

| Dimension | 维度 | Focus |
|---|---|---|
| Life Philosophy | 人生观 | Time preference, definition of success, risk attitude |
| Core Values | 价值观 | Family boundaries, fairness, honesty |
| Money Philosophy | 金钱观 | Spending priorities, saving, debt attitude |
| Conflict Patterns | 冲突处理 | How you fight and repair |
| Emotional Maturity | 情绪成熟度 | Self-awareness, regulation, communication |
| Parenting Stance | 育儿观 | Whether/when/how to have children |
| Personal Growth | 成长与变化 | How change is received in the relationship |
| Life Cooperation | 生活协作 | Household labor, invisible work |
| Intimacy & Boundaries | 亲密与边界 | Physical intimacy, personal space, social boundaries |
| Social Pace | 社交节奏 | Introvert/extrovert balance, social commitments |

### Married / 已婚版 (7 dimensions)

Reframed for existing partnerships — present-tense behavioral framing rather than hypothetical preferences.

| Dimension | 维度 |
|---|---|
| Life Philosophy (Shared) | 人生观（共同） |
| Core Values (Lived) | 价值观（实践） |
| Money Management | 金钱管理 |
| Conflict Patterns | 冲突模式 |
| Emotional Connection | 情感连接 |
| Parenting (Current) | 育儿现状 |
| Growth & Adaptation | 成长与适应 |

---

## Tech Stack · 技术栈

- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** for styling
- **Recharts** for the radar chart
- **react-i18next** for bilingual support
- **localStorage** for session persistence (no backend, no accounts)
- Seeded PRNG (Mulberry32) + Fisher-Yates shuffle for deterministic random question selection

---

## Getting Started · 本地运行

```bash
# Clone
git clone https://github.com/roclee2692/Resonance.git
cd Resonance

# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build
```

Node.js 18+ required.

---

## Project Structure · 项目结构

```
src/
├── components/          # UI components
│   ├── QuestionCard     # Single question with options
│   ├── RadarComparison  # Recharts radar chart
│   ├── DimensionDetail  # Per-dimension score breakdown + dialogue prompts
│   ├── TierSelector     # Quick / Standard / Full
│   ├── VariantSelector  # Couple / Married
│   └── LangToggle       # zh / en switch
├── data/
│   ├── dimensions.ts    # Dimension definitions, tier configs, getDimensions()
│   ├── types.ts         # Shared TypeScript types
│   ├── dialogueGuides.ts # Dialogue prompt questions per dimension
│   └── questions/
│       ├── *.ts         # Couple version questions (10 dimensions)
│       └── married/     # Married version questions (7 dimensions)
├── hooks/
│   └── useAssessment.ts # Full assessment state machine
├── pages/
│   ├── Landing.tsx      # Home — tier + variant selection
│   ├── Assessment.tsx   # Question flow for Person A and B
│   └── Results.tsx      # Radar chart + dimension detail
├── utils/
│   ├── scoring.ts       # computeRadarData, getCompatibilityResult
│   ├── random.ts        # Mulberry32 PRNG + Fisher-Yates
│   ├── storage.ts       # localStorage helpers
│   └── share.ts         # html2canvas export
└── i18n/
    ├── zh.json          # Chinese UI strings
    └── en.json          # English UI strings
```

---

## Scoring Logic · 评分逻辑

Each option maps to a score on a 1–10 spectrum representing one end of a dimension.  
**The score itself is not "good" or "bad"** — compatibility comes from the *difference* between two partners' scores.

- **Weighted diff** = `|scoreA - scoreB| × questionWeight × dimensionWeight`
- **Compatibility band**: Low diff (< 2) = high alignment · High diff (> 5) = meaningful tension
- Deal-breaker questions (e.g., whether to have children) carry `weight: 2`

See [docs/METHODOLOGY.md](docs/METHODOLOGY.md) for full details.

---

## Contributing · 贡献

See [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md) and [docs/QUESTION_DESIGN.md](docs/QUESTION_DESIGN.md).

The most valuable contributions are **new questions** — especially for underrepresented scenarios.  
Use the [New Question issue template](.github/ISSUE_TEMPLATE/new-question.md) to submit.

---

## License

MIT © 2025 roclee2692
