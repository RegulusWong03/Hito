# 更换背景图源为 Picsum.photos

## 问题

`text-to-image` API 不稳定，有时返回浏览器无法渲染的数据，导致背景图断裂。

## 方案

将图片源从 text-to-image API 切换为 **Picsum.photos**（免费、稳定、无水印的摄影图 CDN）。

每个章节使用不同的 `seed` 参数确保图片唯一且固定。

### 改动

#### 1. `src/data/content.ts` — 删除 `bgImagePrompt` 字段

接口定义和所有章节数据中的 `bgImagePrompt` 全部删除（不再需要），因为图片 URL 统一由 Picsum 生成。

#### 2. `src/components/ChapterSection.tsx`

当前代码：
```tsx
const API_BASE = 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image'
const IMG_SIZE = 'landscape_16_9'

<div className="chapter-bg-image" style={{
  backgroundImage: `url(${API_BASE}?prompt=${encodeURIComponent(chapter.bgImagePrompt)}&image_size=${IMG_SIZE})`,
}} />
```

改为：
```tsx
<div className="chapter-bg-image" style={{
  backgroundImage: `url(https://picsum.photos/seed/${chapter.id}-bg/1920/1080)`,
}} />
```

#### 3. `src/components/HeroSection.tsx`

当前：
```tsx
const heroPrompt = 'philosophical contemplation...'
const API_BASE = '...'
const IMG_SIZE = '...'

<div className="hero-bg-image" style={{
  backgroundImage: `url(${API_BASE}?prompt=...)`,
}} />
```

改为：
```tsx
<div className="hero-bg-image" style={{
  backgroundImage: `url(https://picsum.photos/seed/hero-bg/1920/1080)`,
}} />
```

删除无用变量 `heroPrompt`、`API_BASE`、`IMG_SIZE`。

#### 4. `src/components/SummarySection.tsx`

当前：
```tsx
const summaryPrompt = 'open antique book...'
const API_BASE = '...'
const IMG_SIZE = '...'

<div className="summary-bg-image" style={{
  backgroundImage: `url(${API_BASE}?prompt=...)`,
}} />
```

改为：
```tsx
<div className="summary-bg-image" style={{
  backgroundImage: `url(https://picsum.photos/seed/summary-bg/1920/1080)`,
}} />
```

删除无用变量。

#### 5. CSS 文件恢复 `cover` / `center`

将 3 个 CSS 文件中的 `background-size: 150%; background-position: 50% X%` 恢复为 `background-size: cover; background-position: center`。因为 Picsum 图片没有水印，不需要裁剪。

| 文件 | 当前 | 改后 |
|------|------|------|
| `ChapterSection.css` | 150% / 50% 10% | `cover` / `center` |
| `HeroSection.css` | 150% / 50% 15% | `cover` / `center` |
| `SummarySection.css` | 150% / 50% 10% | `cover` / `center` |

### 效果

- 每个章节有唯一图片（通过 seed 控制）
- 加载快（CDN 缓存）
- 无任何水印
- 不会断裂

### 验证

- `npm run check` 编译通过
- 刷新页面，确认所有背景图正常显示
- 检查每张图是否唯一
