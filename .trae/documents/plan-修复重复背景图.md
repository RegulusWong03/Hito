# 修复 Summary 背景图重复问题

## 问题

Summary 的 prism/crystal prompt 返回的图片和其他章节高度相似，看起来像是同一张图被重复使用。

## 方案

将 Summary 的 prompt 改为更具辨识度的描述：引入暖金色调 + 具象物体（书本），与现有章节偏冷/暗的抽象风格形成明显区分。

### 改动

**文件**: `src/components/SummarySection.tsx` 第 25 行

当前：
```
const summaryPrompt = 'prism light spectrum refraction, multiple colors through crystal, dark atmospheric background'
```

改为：
```
const summaryPrompt = 'open antique book glowing golden light on dark wooden table, wisdom knowledge convergence, warm amber illumination, dark atmospheric background'
```

新 prompt 的视觉特点：
- **暖金色调** — 与各章节偏冷/暗的氛围不同
- **具象物体（翻开的古书）** — 与抽象纹理形成对比
- **温暖的琥珀色光** — 视觉上辨识度高
- 仍然是深色背景，整体氛围统一

## 验证

- 刷新页面，Summary 背景图应与其他章节明显不同
- `npm run check` 可选（仅改字符串，不涉及 TS 类型）
