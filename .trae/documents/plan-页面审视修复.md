# 页面逻辑与设计问题修复

## 当前状态

完整审视了全部15个文件（content.ts、5个组件、5个CSS、App.tsx、App.css、index.css、index.html、vite.config.ts、tsconfig.json），发现9个问题。

## 修复计划

### 一、Bug修复

#### 1. SummarySection.css: 移除重复的 `opacity` 声明

**文件**: `src/components/SummarySection.css:138-140`

当前代码：
```css
opacity: 0.4;
opacity: 0;
```

第一个 `opacity: 0.4` 被第二个 `opacity: 0` 覆盖，导致 `.summary-divider` 永远不可见（`✦` 分隔符永不显示）。

**修改**: 删除 `opacity: 0.4;` 那一行，保留 `opacity: 0` 作为隐藏态默认值，动画后变为 `opacity: 0.4`。

### 二、死代码清理

#### 2. ChapterSection.tsx: 删除未使用的 `--chapter-bg` CSS 变量

**文件**: `src/components/ChapterSection.tsx:37`

`--chapter-bg` 通过 inline style 传入但 ChapterSection.css 中从未使用（只用 `--chapter-gradient` 做背景）。

**修改**: 从 inline style 中删除 `'--chapter-bg': chapter.theme.bg`。

#### 3. ChapterSection.tsx: 删除未使用的 `chapter-even` / `chapter-odd` class

**文件**: `src/components/ChapterSection.tsx:33`

`chapter-even` 和 `chapter-odd` 被附加到每个 section 上，但 CSS 中完全没有对这两个 class 的样式规则。这是最初设计时预留的"交替布局"，但从未实现。

**修改**: 删除 `className` 中的 `isEven` 逻辑和相关变量，简化为 `className="chapter"`。

#### 4. index.css: 删除未使用的 `--color-crimson`

**文件**: `src/index.css:4`

`--color-crimson: #8b2f3a` 在整个项目的 CSS 和 TSX 中没有任何引用。

**修改**: 删除该行。

### 三、内容均衡性

#### 5. content.ts: 改写 finalThoughts 第2条

**文件**: `src/data/content.ts:247`

当前 "而在赛博朋克的世界里，Johnny Silverhand问了一个更锋利的问题..." 在10个视角的总结中单独点名一个角色，破坏了10视角的均衡性。

**修改**: 将第2条改写为不点名具体作品/角色的通用追问，与第1条和第3条的风格统一：

```
'换句话说——当你离开核心场景越远，分歧就越大。脑死亡、冷冻、意识上传、数字人格……每一种边缘状态都在逼问同一个问题："人"的边界，到底由什么来划定？'
```

这样既保留了追问的锐度，又不给任何单一视角特权。

#### 6. SummarySection.tsx: 标题去掉具体数字

**文件**: `src/components/SummarySection.tsx:29`

当前标题 "十种视角，十个答案" 直接硬编码了数字10，未来增删视角时容易遗忘更新。

**修改**: 改为不写具体数字的表述：

```tsx
<h2 className="summary-title">种种视角，个个不同</h2>
```

以「种种」「个个」对应视角的多样性，避免计数绑定。

### 四、移动端适配

#### 7. HeroSection.css 和 SummarySection.css: 添加移动端断点

**文件**: `src/components/HeroSection.css`、`src/components/SummarySection.css`

当前只有 ChapterSection 有 `@media (max-width: 768px)` 响应式处理。

**修改**:
- Hero: 添加 `@media (max-width: 768px)` 减小标题字号、调整副标题 padding
- Summary: 添加 `@media (max-width: 768px)` 让表格水平滚动、减小 padding

## 验证

- `npm run check` — TypeScript 编译通过
- 刷新页面检查 `✦` 分隔符在总结区域是否正常显示
- 缩小浏览器窗口到 375px 宽度，确认 Hero 和 Summary 排版正常
