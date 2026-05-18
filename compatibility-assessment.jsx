import { useState, useMemo } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";

const DIMENSIONS = [
  {
    key: "lifePhilosophy",
    label: "人生观",
    labelEn: "Life Philosophy",
    desc: "时间偏好·成就定义·风险态度",
    questions: [
      {
        text: "你获得了一笔意外收入（约半年工资），你会：",
        options: [
          { text: "立刻规划一次一直想去的旅行", score: 2 },
          { text: "拿出一小部分庆祝，其余投资或储蓄", score: 5 },
          { text: "全部存起来，留给未来更重要的事", score: 8 },
          { text: "投入一个我一直想尝试的副业/项目", score: 6 },
        ],
      },
      {
        text: "你衡量自己"过得好不好"的主要标准是：",
        options: [
          { text: "收入水平和职位头衔", score: 2 },
          { text: "是否在做自己真正感兴趣的事", score: 7 },
          { text: "家人朋友是否幸福", score: 5 },
          { text: "是否在持续学习和成长", score: 8 },
        ],
      },
      {
        text: "伴侣想辞掉稳定工作去创业，成功率约30%，你会：",
        options: [
          { text: "支持，人生就该冒险追求想要的", score: 8 },
          { text: "一起分析风险，设定止损线后支持", score: 6 },
          { text: "希望TA先做足准备再辞职", score: 4 },
          { text: "反对，家庭稳定比理想更重要", score: 2 },
        ],
      },
    ],
  },
  {
    key: "values",
    label: "价值观",
    labelEn: "Core Values",
    desc: "家庭边界·公平观·诚实边界",
    questions: [
      {
        text: "你的父母强烈反对你的某个重大决定（如搬城市、换工作），你会：",
        options: [
          { text: "听从父母的建议，他们的经验更可靠", score: 2 },
          { text: "认真考虑他们的意见，但最终自己决定", score: 6 },
          { text: "尊重但不会改变决定，会花时间沟通", score: 7 },
          { text: "这是我的人生，不需要他们同意", score: 9 },
        ],
      },
      {
        text: "你和伴侣收入差距较大（一方是另一方的3倍），家庭开支应该：",
        options: [
          { text: "严格AA，各付一半", score: 2 },
          { text: "按收入比例分担", score: 6 },
          { text: "放入共同账户统一管理", score: 7 },
          { text: "收入高的一方多承担是自然的", score: 4 },
        ],
      },
      {
        text: "伴侣之间的手机/社交媒体隐私，你认为：",
        options: [
          { text: "应该完全透明，没有秘密", score: 2 },
          { text: "主动分享，但不翻看对方手机", score: 5 },
          { text: "各自有隐私空间，信任比透明重要", score: 8 },
          { text: "不主动问，对方愿意说就说", score: 6 },
        ],
      },
    ],
  },
  {
    key: "money",
    label: "金钱观",
    labelEn: "Money Philosophy",
    desc: "消费优先级·储蓄投资·负债态度",
    questions: [
      {
        text: "月收入分配，你理想的储蓄/投资比例是：",
        options: [
          { text: "能存10%就不错了，生活质量优先", score: 2 },
          { text: "20-30%，平衡生活和积累", score: 5 },
          { text: "40-50%，财务自由是首要目标", score: 8 },
          { text: "看情况，收入高时多存，低时少存", score: 4 },
        ],
      },
      {
        text: "关于贷款买房，你的态度是：",
        options: [
          { text: "能全款绝不贷款，不喜欢欠钱的感觉", score: 2 },
          { text: "合理利用杠杆，低利率时贷款是理性的", score: 7 },
          { text: "租房也很好，不需要为了买房背负压力", score: 8 },
          { text: "有房才有安全感，贷款也必须买", score: 3 },
        ],
      },
      {
        text: "伴侣想花两个月工资买一件「非必需但很想要」的东西，你会：",
        options: [
          { text: "完全支持，开心最重要", score: 2 },
          { text: "理解想要的心情，建议存几个月再买", score: 6 },
          { text: "反对，非必需品不应该花这么多", score: 9 },
          { text: "商量一下预算，看有没有替代方案", score: 5 },
        ],
      },
    ],
  },
  {
    key: "conflict",
    label: "冲突处理",
    labelEn: "Conflict Resolution",
    desc: "沟通方式·修复能力·冲突态度",
    questions: [
      {
        text: "吵架时你的典型反应是：",
        options: [
          { text: "需要独处冷静，过一阵再谈", score: 7 },
          { text: "倾向于当场说清楚，不过夜", score: 4 },
          { text: "容易情绪激动，说完后悔的话", score: 2 },
          { text: "倾向于退让，避免冲突升级", score: 5 },
        ],
      },
      {
        text: "吵架后，通常是谁先主动修复关系？",
        options: [
          { text: "我通常先主动", score: 7 },
          { text: "谁的问题谁先道歉", score: 5 },
          { text: "等对方先来，我需要台阶", score: 3 },
          { text: "不太在意谁先，冷静了自然就好了", score: 6 },
        ],
      },
      {
        text: "你们对一个重要问题意见完全相反，讨论多次无果，你会：",
        options: [
          { text: "坚持自己的立场，因为我确信我是对的", score: 2 },
          { text: "寻求妥协，各退一步找到中间方案", score: 6 },
          { text: "搁置争议，先处理能达成共识的部分", score: 5 },
          { text: "找信任的第三方帮忙分析，看谁更有道理", score: 7 },
        ],
      },
    ],
  },
  {
    key: "emotional",
    label: "情绪成熟度",
    labelEn: "Emotional Maturity",
    desc: "自我调节·情感表达·支持能力",
    questions: [
      {
        text: "工作上遭受了严重打击，回到家你通常会：",
        options: [
          { text: "主动跟伴侣倾诉，希望被倾听", score: 6 },
          { text: "自己消化，不想把负面情绪带给别人", score: 3 },
          { text: "先独处调整，等情绪平复后再分享", score: 7 },
          { text: "转移注意力，做点别的事忘掉它", score: 4 },
        ],
      },
      {
        text: "伴侣情绪低落但不想说原因，你会：",
        options: [
          { text: "反复追问，直到TA说出来", score: 2 },
          { text: "表达我在，但不施压，等TA准备好", score: 8 },
          { text: "试着用行动陪伴（做饭、安静待在旁边）", score: 7 },
          { text: "给TA空间，等TA想说的时候自然会说", score: 5 },
        ],
      },
      {
        text: "你意识到自己最近情绪不稳定已经影响到伴侣了，你会：",
        options: [
          { text: "向TA道歉并解释自己的状态", score: 8 },
          { text: "自己想办法调整，不给TA增加负担", score: 4 },
          { text: "跟TA商量，暂时需要更多独处空间", score: 7 },
          { text: "没太注意到，觉得对方应该理解我", score: 1 },
        ],
      },
    ],
  },
  {
    key: "parenting",
    label: "养育观",
    labelEn: "Parenting Alignment",
    desc: "是否生育·教育理念·责任分配",
    questions: [
      {
        text: "关于是否要孩子，你目前的真实想法是：",
        options: [
          { text: "确定想要，这是人生很重要的体验", score: 2 },
          { text: "倾向于要，但需要经济和心理准备到位", score: 4 },
          { text: "开放态度，取决于未来的生活状态和伴侣意愿", score: 6 },
          { text: "倾向于不要，更想把精力投入其他事", score: 8 },
        ],
      },
      {
        text: "如果有孩子，在教育方式上你更倾向：",
        options: [
          { text: "给孩子最好的资源，尽全力铺路", score: 3 },
          { text: "提供支持但让孩子自己探索和选择", score: 7 },
          { text: "以品格和独立思考为核心，成绩次之", score: 8 },
          { text: "跟着主流走，别掉队就行", score: 2 },
        ],
      },
      {
        text: "关于育儿的责任分配，你认为：",
        options: [
          { text: "应该完全平等，各承担50%", score: 6 },
          { text: "根据各自工作和擅长领域灵活分配", score: 8 },
          { text: "主要由收入较低的一方承担更多", score: 2 },
          { text: "愿意为孩子牺牲自己的事业发展", score: 4 },
        ],
      },
    ],
  },
  {
    key: "growth",
    label: "成长兼容性",
    labelEn: "Growth Compatibility",
    desc: "成长意愿·适应能力·独立空间",
    questions: [
      {
        text: "你每周花在学习新东西（读书、课程、技能）上的时间大约是：",
        options: [
          { text: "几乎没有，工作已经够累了", score: 2 },
          { text: "1-3小时，保持基本的信息输入", score: 4 },
          { text: "5-10小时，持续学习是习惯", score: 7 },
          { text: "10小时以上，学习本身就是乐趣", score: 9 },
        ],
      },
      {
        text: "如果伴侣对你说「你最近变了」，你的第一反应是：",
        options: [
          { text: "紧张，变了是不是不好的信号", score: 3 },
          { text: "好奇，想知道TA观察到了什么变化", score: 8 },
          { text: "自我检视，思考这种变化是否符合自己的方向", score: 7 },
          { text: "无所谓，人本来就会变", score: 4 },
        ],
      },
      {
        text: "关于伴侣之间的独立空间，你认为：",
        options: [
          { text: "在一起就应该尽量多待在一起", score: 2 },
          { text: "可以有各自空间，但主要时间应共享", score: 4 },
          { text: "各自有独立的社交圈和兴趣是健康的", score: 7 },
          { text: "独立空间和共处时间应该大致平衡", score: 6 },
        ],
      },
    ],
  },
];

const COLORS = {
  bg: "#0a0f1a",
  card: "#111827",
  cardHover: "#1a2332",
  border: "#1e2a3a",
  accent: "#4f9cf7",
  accentAlt: "#f472b6",
  accentGreen: "#34d399",
  text: "#e2e8f0",
  textDim: "#8896ab",
  textMuted: "#4a5568",
  surface: "#0d1422",
  highlight: "rgba(79,156,247,0.08)",
};

function ProgressBar({ current, total }) {
  const pct = ((current + 1) / total) * 100;
  return (
    <div style={{ width: "100%", height: 3, background: COLORS.border, borderRadius: 2, overflow: "hidden" }}>
      <div
        style={{
          width: `${pct}%`,
          height: "100%",
          background: `linear-gradient(90deg, ${COLORS.accent}, ${COLORS.accentAlt})`,
          transition: "width 0.4s ease",
          borderRadius: 2,
        }}
      />
    </div>
  );
}

function StartScreen({ onStart }) {
  return (
    <div style={{ textAlign: "center", padding: "48px 24px" }}>
      <div style={{ fontSize: 48, marginBottom: 16 }}>⬡</div>
      <h1 style={{ fontSize: 26, fontWeight: 700, color: COLORS.text, marginBottom: 8, fontFamily: "'Noto Serif SC', Georgia, serif" }}>
        婚姻兼容性评估
      </h1>
      <p style={{ color: COLORS.textDim, fontSize: 14, lineHeight: 1.7, maxWidth: 380, margin: "0 auto 12px" }}>
        基于人生观·价值观·金钱观·冲突处理·情绪成熟度·养育观·成长兼容性七个维度，通过具体场景题评估两人的决策兼容性。
      </p>
      <p style={{ color: COLORS.textMuted, fontSize: 13, lineHeight: 1.6, maxWidth: 360, margin: "0 auto 32px" }}>
        每人独立作答21题（约5分钟），完成后生成雷达图对比。没有标准答案，只有你们在关键问题上是否对齐。
      </p>
      <button onClick={() => onStart("A")} style={btnPrimary}>
        Person A 开始作答
      </button>
    </div>
  );
}

function QuestionScreen({ person, questions, answers, onAnswer, onBack, onComplete }) {
  const flatQ = useMemo(() => {
    const arr = [];
    DIMENSIONS.forEach((dim) => {
      dim.questions.forEach((q, qi) => {
        arr.push({ ...q, dimKey: dim.key, dimLabel: dim.label, dimIdx: DIMENSIONS.indexOf(dim), qIdx: qi });
      });
    });
    return arr;
  }, []);

  const currentIdx = Object.keys(answers).length;
  const isComplete = currentIdx >= flatQ.length;

  if (isComplete) {
    return (
      <div style={{ textAlign: "center", padding: "48px 24px" }}>
        <div style={{ fontSize: 40, marginBottom: 16 }}>✓</div>
        <h2 style={{ fontSize: 20, color: COLORS.text, marginBottom: 8 }}>
          Person {person} 作答完成
        </h2>
        <p style={{ color: COLORS.textDim, fontSize: 14, marginBottom: 32 }}>
          共回答了 {flatQ.length} 道题目
        </p>
        <button onClick={onComplete} style={btnPrimary}>
          继续
        </button>
      </div>
    );
  }

  const q = flatQ[currentIdx];
  const qKey = `${q.dimKey}-${q.qIdx}`;

  return (
    <div style={{ padding: "20px 16px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <span style={{ color: COLORS.accent, fontSize: 12, fontWeight: 600, letterSpacing: 1 }}>
          PERSON {person}
        </span>
        <span style={{ color: COLORS.textMuted, fontSize: 12 }}>
          {currentIdx + 1} / {flatQ.length}
        </span>
      </div>
      <ProgressBar current={currentIdx} total={flatQ.length} />
      <div
        style={{
          display: "inline-block",
          marginTop: 20,
          marginBottom: 12,
          padding: "4px 12px",
          background: COLORS.highlight,
          borderRadius: 20,
          color: COLORS.accent,
          fontSize: 12,
          fontWeight: 500,
        }}
      >
        {q.dimLabel}
      </div>
      <h2 style={{ fontSize: 17, color: COLORS.text, lineHeight: 1.6, marginBottom: 20, fontWeight: 500 }}>
        {q.text}
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {q.options.map((opt, oi) => (
          <button
            key={oi}
            onClick={() => onAnswer(qKey, opt.score, q.dimKey)}
            style={{
              background: COLORS.card,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 10,
              padding: "14px 16px",
              color: COLORS.text,
              fontSize: 14,
              lineHeight: 1.5,
              textAlign: "left",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = COLORS.accent;
              e.currentTarget.style.background = COLORS.highlight;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = COLORS.border;
              e.currentTarget.style.background = COLORS.card;
            }}
          >
            {opt.text}
          </button>
        ))}
      </div>
      {currentIdx > 0 && (
        <button
          onClick={onBack}
          style={{
            marginTop: 16,
            background: "none",
            border: "none",
            color: COLORS.textMuted,
            fontSize: 13,
            cursor: "pointer",
            padding: "8px 0",
          }}
        >
          ← 上一题
        </button>
      )}
    </div>
  );
}

function ResultScreen({ scoresA, scoresB, onReset }) {
  const radarData = DIMENSIONS.map((dim) => {
    const aScores = scoresA[dim.key] || [];
    const bScores = scoresB[dim.key] || [];
    const avgA = aScores.length ? Math.round((aScores.reduce((s, v) => s + v, 0) / aScores.length) * 10) / 10 : 0;
    const avgB = bScores.length ? Math.round((bScores.reduce((s, v) => s + v, 0) / bScores.length) * 10) / 10 : 0;
    return {
      dimension: dim.label,
      A: avgA,
      B: avgB,
      diff: Math.abs(avgA - avgB),
      fullMark: 10,
    };
  });

  const totalDiff = radarData.reduce((sum, d) => sum + d.diff, 0);
  const avgDiff = totalDiff / radarData.length;
  const aligned = radarData.filter((d) => d.diff <= 1.5).map((d) => d.dimension);
  const divergent = radarData.filter((d) => d.diff > 3).map((d) => d.dimension);
  const moderate = radarData.filter((d) => d.diff > 1.5 && d.diff <= 3).map((d) => d.dimension);

  let overallLabel, overallColor, overallDesc;
  if (avgDiff <= 1.2) {
    overallLabel = "高度兼容";
    overallColor = COLORS.accentGreen;
    overallDesc = "你们在绝大多数关键维度上的决策倾向高度一致。这是非常好的起点，但别忘了定期重新对齐——人会变。";
  } else if (avgDiff <= 2.2) {
    overallLabel = "基本兼容";
    overallColor = COLORS.accent;
    overallDesc = "多数维度对齐，少数存在分歧。分歧本身不是问题，关键是你们能否就分歧点展开坦诚对话并找到双方接受的方案。";
  } else if (avgDiff <= 3.2) {
    overallLabel = "需要深入沟通";
    overallColor = "#f59e0b";
    overallDesc = "多个维度存在明显差异。建议在做出重大决定前，就下方标红的维度进行深入讨论，理解差异的根源。";
  } else {
    overallLabel = "差异显著";
    overallColor = "#ef4444";
    overallDesc = "你们在关键决策维度上的倾向差异较大。这不意味着不能在一起，但需要双方高度自觉地协商和妥协。建议寻求专业咨询。";
  }

  return (
    <div style={{ padding: "20px 16px" }}>
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <div
          style={{
            display: "inline-block",
            padding: "6px 20px",
            borderRadius: 24,
            background: `${overallColor}18`,
            color: overallColor,
            fontSize: 15,
            fontWeight: 700,
            marginBottom: 10,
            border: `1px solid ${overallColor}40`,
          }}
        >
          {overallLabel}
        </div>
        <p style={{ color: COLORS.textDim, fontSize: 13, lineHeight: 1.7, maxWidth: 360, margin: "0 auto" }}>
          {overallDesc}
        </p>
      </div>

      <div style={{ width: "100%", height: 300, marginBottom: 24 }}>
        <ResponsiveContainer>
          <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="70%">
            <PolarGrid stroke={COLORS.border} />
            <PolarAngleAxis dataKey="dimension" tick={{ fill: COLORS.textDim, fontSize: 11 }} />
            <PolarRadiusAxis domain={[0, 10]} tick={false} axisLine={false} />
            <Radar name="Person A" dataKey="A" stroke={COLORS.accent} fill={COLORS.accent} fillOpacity={0.15} strokeWidth={2} />
            <Radar name="Person B" dataKey="B" stroke={COLORS.accentAlt} fill={COLORS.accentAlt} fillOpacity={0.15} strokeWidth={2} />
            <Legend
              wrapperStyle={{ fontSize: 12, color: COLORS.textDim }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
        {radarData.map((d) => {
          let tagColor = COLORS.accentGreen;
          let tagLabel = "对齐";
          if (d.diff > 3) {
            tagColor = "#ef4444";
            tagLabel = "分歧大";
          } else if (d.diff > 1.5) {
            tagColor = "#f59e0b";
            tagLabel = "有差异";
          }
          return (
            <div
              key={d.dimension}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: COLORS.card,
                border: `1px solid ${COLORS.border}`,
                borderRadius: 8,
                padding: "10px 14px",
              }}
            >
              <div>
                <span style={{ color: COLORS.text, fontSize: 14, fontWeight: 500 }}>{d.dimension}</span>
                <div style={{ display: "flex", gap: 12, marginTop: 4 }}>
                  <span style={{ color: COLORS.accent, fontSize: 12 }}>A: {d.A}</span>
                  <span style={{ color: COLORS.accentAlt, fontSize: 12 }}>B: {d.B}</span>
                </div>
              </div>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: tagColor,
                  background: `${tagColor}15`,
                  padding: "3px 10px",
                  borderRadius: 12,
                  border: `1px solid ${tagColor}30`,
                }}
              >
                {tagLabel}
              </span>
            </div>
          );
        })}
      </div>

      {aligned.length > 0 && (
        <div style={{ marginBottom: 16 }}>
          <h3 style={{ fontSize: 14, color: COLORS.accentGreen, marginBottom: 6, fontWeight: 600 }}>
            🟢 高度对齐
          </h3>
          <p style={{ color: COLORS.textDim, fontSize: 13, lineHeight: 1.7 }}>
            {aligned.join("、")}——你们在这些维度上的倾向非常接近，这是关系的稳定基石。
          </p>
        </div>
      )}
      {moderate.length > 0 && (
        <div style={{ marginBottom: 16 }}>
          <h3 style={{ fontSize: 14, color: "#f59e0b", marginBottom: 6, fontWeight: 600 }}>
            🟡 存在差异
          </h3>
          <p style={{ color: COLORS.textDim, fontSize: 13, lineHeight: 1.7 }}>
            {moderate.join("、")}——有一定分歧但在可协商范围内。建议就这些话题展开一次认真对话。
          </p>
        </div>
      )}
      {divergent.length > 0 && (
        <div style={{ marginBottom: 16 }}>
          <h3 style={{ fontSize: 14, color: "#ef4444", marginBottom: 6, fontWeight: 600 }}>
            🔴 显著分歧
          </h3>
          <p style={{ color: COLORS.textDim, fontSize: 13, lineHeight: 1.7 }}>
            {divergent.join("、")}——这些维度上你们的取向差距较大。这是最需要在做出承诺前深入沟通的领域。
          </p>
        </div>
      )}

      <div
        style={{
          marginTop: 20,
          padding: "14px 16px",
          background: COLORS.highlight,
          borderRadius: 10,
          border: `1px solid ${COLORS.border}`,
        }}
      >
        <p style={{ color: COLORS.textDim, fontSize: 12, lineHeight: 1.8 }}>
          ⚠️ 本评估基于场景化自我报告，不能替代深入的相处和沟通。分数相近 ≠ 一定合适，分数差异大 ≠ 一定不合适。真正的兼容性还需要在日常生活中验证。本工具的价值是帮你们发现需要对话的方向。
        </p>
      </div>

      <button onClick={onReset} style={{ ...btnPrimary, marginTop: 20 }}>
        重新测试
      </button>
    </div>
  );
}

const btnPrimary = {
  background: `linear-gradient(135deg, ${COLORS.accent}, #6366f1)`,
  color: "#fff",
  border: "none",
  borderRadius: 10,
  padding: "14px 32px",
  fontSize: 15,
  fontWeight: 600,
  cursor: "pointer",
  width: "100%",
  transition: "opacity 0.2s",
};

export default function CompatibilityAssessment() {
  const [phase, setPhase] = useState("start"); // start | A | betweenAB | B | result
  const [answersA, setAnswersA] = useState({});
  const [answersB, setAnswersB] = useState({});
  const [scoresA, setScoresA] = useState({});
  const [scoresB, setScoresB] = useState({});
  const [historyA, setHistoryA] = useState([]);
  const [historyB, setHistoryB] = useState([]);

  const handleAnswer = (person) => (qKey, score, dimKey) => {
    const setAnswers = person === "A" ? setAnswersA : setAnswersB;
    const setScores = person === "A" ? setScoresA : setScoresB;
    const setHistory = person === "A" ? setHistoryA : setHistoryB;

    setAnswers((prev) => ({ ...prev, [qKey]: score }));
    setScores((prev) => {
      const arr = [...(prev[dimKey] || [])];
      const qIdx = parseInt(qKey.split("-")[1]);
      arr[qIdx] = score;
      return { ...prev, [dimKey]: arr };
    });
    setHistory((prev) => [...prev, { qKey, dimKey }]);
  };

  const handleBack = (person) => () => {
    const history = person === "A" ? historyA : historyB;
    const setAnswers = person === "A" ? setAnswersA : setAnswersB;
    const setScores = person === "A" ? setScoresA : setScoresB;
    const setHistory = person === "A" ? setHistoryA : setHistoryB;

    if (history.length === 0) return;
    const last = history[history.length - 1];
    setHistory((prev) => prev.slice(0, -1));
    setAnswers((prev) => {
      const next = { ...prev };
      delete next[last.qKey];
      return next;
    });
    setScores((prev) => {
      const qIdx = parseInt(last.qKey.split("-")[1]);
      const arr = [...(prev[last.dimKey] || [])];
      arr.splice(qIdx, 1, undefined);
      const filtered = arr.filter((v) => v !== undefined);
      return { ...prev, [last.dimKey]: filtered.length ? filtered : undefined };
    });
  };

  const reset = () => {
    setPhase("start");
    setAnswersA({});
    setAnswersB({});
    setScoresA({});
    setScoresB({});
    setHistoryA([]);
    setHistoryB([]);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: COLORS.bg,
        color: COLORS.text,
        fontFamily: "'Noto Sans SC', -apple-system, BlinkMacSystemFont, sans-serif",
        maxWidth: 480,
        margin: "0 auto",
      }}
    >
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;600;700&family=Noto+Serif+SC:wght@700&display=swap" rel="stylesheet" />

      {phase === "start" && <StartScreen onStart={() => setPhase("A")} />}

      {phase === "A" && (
        <QuestionScreen
          person="A"
          questions={DIMENSIONS}
          answers={answersA}
          onAnswer={handleAnswer("A")}
          onBack={handleBack("A")}
          onComplete={() => setPhase("betweenAB")}
        />
      )}

      {phase === "betweenAB" && (
        <div style={{ textAlign: "center", padding: "48px 24px" }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🔄</div>
          <h2 style={{ fontSize: 20, color: COLORS.text, marginBottom: 8 }}>
            请将手机交给 Person B
          </h2>
          <p style={{ color: COLORS.textDim, fontSize: 14, marginBottom: 32, lineHeight: 1.7 }}>
            Person A 已完成作答。<br />请在不讨论答案的情况下独立完成。
          </p>
          <button onClick={() => setPhase("B")} style={btnPrimary}>
            Person B 开始作答
          </button>
        </div>
      )}

      {phase === "B" && (
        <QuestionScreen
          person="B"
          questions={DIMENSIONS}
          answers={answersB}
          onAnswer={handleAnswer("B")}
          onBack={handleBack("B")}
          onComplete={() => setPhase("result")}
        />
      )}

      {phase === "result" && (
        <ResultScreen scoresA={scoresA} scoresB={scoresB} onReset={reset} />
      )}
    </div>
  );
}
