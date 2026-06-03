# 给每个模块添加主题背景图

## 当前状态

目前每个章节只有 CSS 渐变背景（`--chapter-gradient`），Hero 有径向渐变，Summary 只有纯色背景。没有真实的图片层。

## 修改方案

使用 text-to-image API 为每个模块生成与主题匹配的抽象氛围图，作为背景图片层，并在上方叠加 50% 透明度的黑色遮罩。

### API 格式

```
https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt={描述}&image_size=landscape_16_9
```

### 各模块图片描述

| 模块 | 图片描述 prompt（URL 编码前） |
|------|------|
| Hero | philosophical contemplation dark mood abstract, deep space atmosphere, subtle golden light |
| biology | abstract DNA helix, biological cell structure, science microscopic, deep blue |
| everyday | abstract language conversation, floating speech bubbles, warm amber tones |
| philosophy | ancient marble statue face, classical greek philosophy, purple dark mood |
| legal | courthouse pillars justice scales, dark academic, structured geometric |
| social | abstract network of connected people nodes, social web, teal dark tones |
| phenomenology | abstract void dark light, existential atmosphere, monochrome gradient |
| eastern | zen garden raked sand, minimal japanese temple, bamboo silhouette, earthy tones |
| scifi | futuristic brain neural interface, digital consciousness, cybernetic, cyan |
| cyberpunk | neon city night rain, cyberpunk street, magenta blue glow, futuristic dystopia |
| wittgenstein | abstract tangled threads network, family resemblance concept, dark rose tones |
| summary | prism light spectrum refraction, multiple colors through crystal, dark background |

### 涉及文件

#### 1. `src/data/content.ts` — 为 ChapterData 添加 backgroundImage 字段

接口增加可选字段 `backgroundImagePrompt`，每个章节数据添加对应的 prompt。

#### 2. `src/components/ChapterSection.tsx` — 添加背景图片层

新增一个 `.chapter-bg-image` div 在 `.chapter-bg` 渐变层**下方**，使用章节的 prompt 生成图片 URL。

```tsx
<div className="chapter-bg-image" style={{
  backgroundImage: `url(https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(chapter.backgroundImagePrompt)}&image_size=landscape_16_9)`
}} />
```

同时在渐变层和内容之间添加 `.chapter-overlay` 黑色遮罩层（50% 透明度）。

结构变为：
```
section.chapter
  .chapter-bg-image      ← 背景图片（新增）
  .chapter-overlay       ← 黑色遮罩 50%（新增）  
  .chapter-bg            ← 原有渐变层，保留不动
  .chapter-container     ← 内容
```

#### 3. `src/components/ChapterSection.css` — 新增背景图和遮罩样式

```css
.chapter-bg-image {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1.5s ease;
  pointer-events: none;
}

.chapter-visible .chapter-bg-image {
  opacity: 1;
}

.chapter-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  pointer-events: none;
  z-index: 0;
}
```

注意：调整 `.chapter-container` 的 `z-index` 确保在遮罩之上。

#### 4. `src/components/HeroSection.tsx` — Hero 增加背景图

在已有 `.hero-overlay` 和内容之间，增加背景图片层 + 遮罩。

结构变为：
```
section.hero
  .hero-bg-image         ← 背景图片（新增）
  .hero-overlay-mask     ← 黑色遮罩 50%（新增）
  .hero-overlay          ← 原有渐变径向光晕（保留）
  .hero-content          ← 内容
```

#### 5. `src/components/HeroSection.css` — Hero 背景图和遮罩样式

```css
.hero-bg-image {
  position: absolute;
  inset: 0;
  background-image: url(https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?...);
  background-size: cover;
  background-position: center;
  transition: opacity 1.5s ease;
}

.hero-overlay-mask {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  pointer-events: none;
}
```

#### 6. `src/components/SummarySection.tsx` — Summary 增加背景图

类似结构，新增 `.summary-bg-image` + `.summary-overlay`。

#### 7. `src/components/SummarySection.css` — Summary 背景图和遮罩样式

类似 Chapter 的背景图 + 遮罩样式。

## 注意点

- 所有背景图片使用 `opacity` 过渡动画，与现有渐变同步渐入
- 遮罩层 `z-index` 在图片之上、内容之下
- 图片加载失败时仍有渐变/纯色作为兜底
- 移动端适配中图片自动缩放

## 验证

- `npm run check` 编译通过
- 预览页面确认每个模块都有背景图叠加
- 检查遮罩效果是否 50% 透明度合适
- 缩小窗口确认图片在移动端正常缩放
