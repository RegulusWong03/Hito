# 解决背景图 Trae 水印问题

## 问题分析

`text-to-image` API 生成的图片自带「Trae AI」水印（右下角），这是服务端行为，无法通过 API 参数移除。之前更换 favicon 和移除 badge 插件只是去掉了页面的 UI 水印，但背景图本身的水印需要另外处理。

## 解决方案

方案：**CSS 裁剪水印区域** — 利用 `background-size` 和 `background-position` 将图片放大+偏移，把右下角水印推出可视区域。

原理：将背景图放大到 115%，然后向上偏移，让底部水印位置被裁切掉。

### 涉及文件

#### 1. `src/components/ChapterSection.css` — 修改 `.chapter-bg-image`

```css
background-size: 115%;
background-position: 50% 25%;
```

- `background-size: 115%` — 放大图片使边缘超出容器
- `background-position: 50% 25%` — 将焦点上移，裁剪底部水印区域

#### 2. `src/components/HeroSection.css` — 修改 `.hero-bg-image`

同样改动，但 Hero 是横向构图为主，偏移值调整：

```css
background-size: 115%;
background-position: 50% 30%;
```

#### 3. `src/components/SummarySection.css` — 修改 `.summary-bg-image`

```css
background-size: 115%;
background-position: 50% 25%;
```

### 效果说明

- 图片主体区域（中心偏上）基本保留
- 底部 15-20% 区域被裁切，水印随之外移
- 75% 黑色遮罩进一步弱化边缘
- 如果某张图水印位置特殊还有残留，可单独调整数值

### 备选方案

如果 CSS 裁剪效果不理想，还可以：
- 替换为 `picsum.photos` 免费随机图（无水印，但无主题匹配）
- 用户自行准备 12 张无水印图片替换

## 验证

- `npm run check` 编译通过
- 刷新页面，检查每张背景图的右下角水印是否已裁切
- 检查图片主体构图是否仍合理（没有被过度裁剪）
