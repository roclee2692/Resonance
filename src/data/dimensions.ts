import type { Dimension } from './types'
import { lifePhilosophyQuestions } from './questions/lifePhilosophy'
import { valuesQuestions } from './questions/values'
import { moneyQuestions } from './questions/money'
import { conflictQuestions } from './questions/conflict'
import { emotionalQuestions } from './questions/emotional'
import { parentingQuestions } from './questions/parenting'
import { growthQuestions } from './questions/growth'
import { lifeCooperationQuestions } from './questions/lifeCooperation'
import { intimacyBoundariesQuestions } from './questions/intimacyBoundaries'
import { socialPaceQuestions } from './questions/socialPace'
import {
  marriedLifePhilosophyQuestions,
  marriedValuesQuestions,
  marriedMoneyQuestions,
  marriedConflictQuestions,
  marriedEmotionalQuestions,
  marriedParentingQuestions,
  marriedGrowthQuestions,
} from './questions/married'
import { selectQuestions } from '../utils/random'

// ── Dimension weights (used in weighted compatibility score) ────────────────
// 1.0 = normal · 1.3 = important · 1.5 = critical · 2.0 = deal-breaker
const CORE_DIMENSIONS_FULL: Dimension[] = [
  {
    key: 'lifePhilosophy',
    label: '人生观',
    labelEn: 'Life Philosophy',
    desc: '时间偏好·成就定义·风险态度',
    weight: 1.1,
    questions: lifePhilosophyQuestions,
  },
  {
    key: 'values',
    label: '价值观',
    labelEn: 'Core Values',
    desc: '家庭边界·公平观·诚实边界',
    weight: 1.3,
    questions: valuesQuestions,
  },
  {
    key: 'money',
    label: '金钱观',
    labelEn: 'Money Philosophy',
    desc: '消费优先级·储蓄投资·负债态度',
    weight: 1.3,
    questions: moneyQuestions,
  },
  {
    key: 'conflict',
    label: '冲突处理',
    labelEn: 'Conflict Resolution',
    desc: '沟通方式·修复能力·冲突态度',
    weight: 1.3,
    questions: conflictQuestions,
  },
  {
    key: 'emotional',
    label: '情绪成熟度',
    labelEn: 'Emotional Maturity',
    desc: '自我调节·情感表达·支持能力',
    weight: 1.2,
    questions: emotionalQuestions,
  },
  {
    key: 'parenting',
    label: '养育观',
    labelEn: 'Parenting Alignment',
    desc: '是否生育·教育理念·责任分配',
    weight: 1.5,
    questions: parentingQuestions,
  },
  {
    key: 'growth',
    label: '成长兼容性',
    labelEn: 'Growth Compatibility',
    desc: '成长意愿·适应能力·独立空间',
    weight: 1.0,
    questions: growthQuestions,
  },
]

const EXTENDED_DIMENSIONS: Dimension[] = [
  {
    key: 'lifeCooperation',
    label: '生活合作',
    labelEn: 'Life Cooperation',
    desc: '家务分工·主动意识·不可见劳动',
    weight: 1.0,
    questions: lifeCooperationQuestions,
  },
  {
    key: 'intimacyBoundaries',
    label: '亲密与边界',
    labelEn: 'Intimacy & Boundaries',
    desc: '亲密需求·隐私空间·忠诚定义',
    weight: 1.1,
    questions: intimacyBoundariesQuestions,
  },
  {
    key: 'socialPace',
    label: '社交节奏',
    labelEn: 'Social & Pace',
    desc: '社交需求·生活节奏·独处充电',
    weight: 0.9,
    questions: socialPaceQuestions,
  },
]

const MARRIED_CORE_DIMENSIONS: Dimension[] = [
  {
    key: 'lifePhilosophy',
    label: '人生方向',
    labelEn: 'Life Direction',
    desc: '目标一致性·变化适应·个人空间',
    weight: 1.1,
    questions: marriedLifePhilosophyQuestions,
  },
  {
    key: 'values',
    label: '价值观',
    labelEn: 'Core Values',
    desc: '决策公平·透明度·彼此理解',
    weight: 1.3,
    questions: marriedValuesQuestions,
  },
  {
    key: 'money',
    label: '金钱管理',
    labelEn: 'Financial Partnership',
    desc: '财务透明·共同目标·消费协商',
    weight: 1.3,
    questions: marriedMoneyQuestions,
  },
  {
    key: 'conflict',
    label: '冲突模式',
    labelEn: 'Conflict Patterns',
    desc: '修复能力·积累问题·沟通质量',
    weight: 1.3,
    questions: marriedConflictQuestions,
  },
  {
    key: 'emotional',
    label: '情感连接',
    labelEn: 'Emotional Connection',
    desc: '安全感·感知能力·情感支持',
    weight: 1.2,
    questions: marriedEmotionalQuestions,
  },
  {
    key: 'parenting',
    label: '育儿协作',
    labelEn: 'Parenting Partnership',
    desc: '教育一致性·分工现实·长辈边界',
    weight: 1.5,
    questions: marriedParentingQuestions,
  },
  {
    key: 'growth',
    label: '共同成长',
    labelEn: 'Shared Growth',
    desc: '关系进化·相互支持·适应变化',
    weight: 1.0,
    questions: marriedGrowthQuestions,
  },
]

export type Tier = 'quick' | 'standard' | 'full'

export interface TierConfig {
  key: Tier
  label: string
  sublabel: string
  questionCount: number
  timeMinutes: string
  perDim: number
  randomize: boolean
}

export const TIER_CONFIGS: Record<Tier, TierConfig> = {
  quick: {
    key: 'quick',
    label: 'Quick',
    sublabel: '7 dimensions · 21 random questions',
    questionCount: 21,
    timeMinutes: '~5 min',
    perDim: 3,
    randomize: true,
  },
  standard: {
    key: 'standard',
    label: 'Standard',
    sublabel: '7 dimensions · 49 random questions',
    questionCount: 49,
    timeMinutes: '~15 min',
    perDim: 7,
    randomize: true,
  },
  full: {
    key: 'full',
    label: 'Complete',
    sublabel: '10 dimensions · 110 full coverage',
    questionCount: 110,
    timeMinutes: '~30 min',
    perDim: 11,
    randomize: false,
  },
}

export type Variant = 'couple' | 'married'

// Build dimensions for a given variant, tier, and session seed
export function getDimensions(tier: Tier, variant: Variant = 'couple', seed = 0): Dimension[] {
  const { perDim, randomize } = TIER_CONFIGS[tier]

  let base: Dimension[]
  if (variant === 'married') {
    base = MARRIED_CORE_DIMENSIONS
  } else {
    base = tier === 'full'
      ? [...CORE_DIMENSIONS_FULL, ...EXTENDED_DIMENSIONS]
      : CORE_DIMENSIONS_FULL
  }

  return base.map((dim, i) => ({
    ...dim,
    questions: randomize
      ? selectQuestions(dim.questions, perDim, seed + i * 1000)
      : dim.questions.slice(0, perDim),
  }))
}

export function getFlatQuestions(tier: Tier, variant: Variant = 'couple', seed = 0) {
  return getDimensions(tier, variant, seed).flatMap((dim) =>
    dim.questions.map((q, qi) => ({
      ...q,
      dimKey: dim.key,
      dimLabel: dim.label,
      dimIdx: getDimensions(tier, variant, seed).indexOf(dim),
      qIdx: qi,
    }))
  )
}
