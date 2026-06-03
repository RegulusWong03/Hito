# 遮罩调强 + 移除 Trae 水印

## 改动内容

### 1. 遮罩强度：50% → 75%

涉及3个文件的 `rgba(0, 0, 0, 0.5)` → `rgba(0, 0, 0, 0.75)`

| 文件 | 行号 | 当前值 | 改后值 |
|------|:----:|:------:|:------:|
| `src/components/ChapterSection.css` | 37 | `rgba(0, 0, 0, 0.5)` | `rgba(0, 0, 0, 0.75)` |
| `src/components/HeroSection.css` | 33 | `rgba(0, 0, 0, 0.5)` | `rgba(0, 0, 0, 0.75)` |
| `src/components/SummarySection.css` | 28 | `rgba(0, 0, 0, 0.5)` | `rgba(0, 0, 0, 0.75)` |

### 2. 前端 Trae 水印移除

#### 2.1 favicon.svg — 替换为哲学主题图标

当前 favicon 是 Trae 绿色品牌图标，替换为一个极简的哲学符号（问号 + 圆环）。

新图标设计：深色背景上的金色问号，与页面暖金主题一致。

#### 2.2 前端其他水印检查

- `vite.config.ts` — `traeBadgePlugin` 已移除 ✅
- `index.html` — 无 Trae 标记 ✅
- 运行时的 badge/水印 — 插件已移除，不会显示 ✅

## 验证

- `npm run check` 编译通过
- 刷新页面，检查文字在 75% 遮罩下是否清晰可读
- 浏览器 tab 图标应为新的金色问号 favicon
