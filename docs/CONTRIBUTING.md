# 贡献指南 / Contributing Guide

感谢你对 Resonance 感兴趣！以下是参与贡献的方式。

## 贡献类型

### 题目贡献（最受欢迎）

新题目是最有价值的贡献。请先阅读 [QUESTION_DESIGN.md](./QUESTION_DESIGN.md)，然后通过 GitHub Issue 提交。

详细流程见 [题目设计指南](./QUESTION_DESIGN.md#提交流程)。

### Bug 修复

1. Fork 本仓库
2. 创建分支：`git checkout -b fix/your-bug-description`
3. 修复并测试
4. 提交 PR，描述问题和修复方式

### 功能建议

先开 Issue 讨论，再开始开发。大功能不应该在没有讨论的情况下直接提 PR。

### 翻译

目前支持中文和英文。如果你发现翻译问题，请在 `src/i18n/` 中修改对应的 JSON 文件。

## 开发环境

```bash
git clone https://github.com/roclee2692/Resonance.git
cd Resonance
npm install
npm run dev        # 开发服务器 localhost:5173
npm run build      # 生产构建（会先运行 tsc 类型检查）
```

## 项目结构

```
src/
├── components/       # UI 组件
├── data/
│   ├── questions/    # 题库文件（按维度）
│   │   └── married/  # 已婚版题库
│   ├── dimensions.ts # 维度定义和选题逻辑
│   └── types.ts      # TypeScript 类型
├── hooks/            # React hooks（状态管理）
├── pages/            # 页面组件
├── utils/            # 工具函数（随机、评分、分享）
└── i18n/             # 国际化文件
docs/
├── METHODOLOGY.md    # 测评方法论
├── QUESTION_DESIGN.md
└── CONTRIBUTING.md   # 本文件
```

## 代码规范

- TypeScript strict mode — 不允许 `any`
- 组件使用具名导出（named export），不用 default export
- 样式优先使用 Tailwind，复杂动画使用 `globals.css`
- 不要提交 `dist/` 目录

## PR 规范

- PR 标题使用祈使句：`Add X`、`Fix Y`、`Update Z`
- 描述中说明"做了什么"和"为什么"
- 题目类 PR 需说明设计逻辑（参见 QUESTION_DESIGN.md）

## 行为准则

本项目遵守 [Contributor Covenant](https://www.contributor-covenant.org/) 行为准则。请保持尊重和建设性的讨论。
