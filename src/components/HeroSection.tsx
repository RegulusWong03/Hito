import { useEffect, useRef } from 'react'
import './HeroSection.css'

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('hero-visible')
        }
      },
      { threshold: 0.1 }
    )

    const el = containerRef.current
    if (el) {
      observer.observe(el)
      setTimeout(() => el.classList.add('hero-visible'), 300)
    }
    return () => { if (el) observer.unobserve(el) }
  }, [])

  const heroPrompt = 'philosophical contemplation dark mood abstract, deep space atmosphere, subtle golden light'
  const API_BASE = 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image'
  const IMG_SIZE = 'landscape_16_9'

  return (
    <section className="hero" ref={containerRef}>
      <div
        className="hero-bg-image"
        style={{
          backgroundImage: `url(${API_BASE}?prompt=${encodeURIComponent(heroPrompt)}&image_size=${IMG_SIZE})`,
        }}
      />
      <div className="hero-overlay-mask" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-kicker">一场关于存在与定义的哲学追问</p>
        <h1 className="hero-title">
          <span className="hero-line hero-line-1">如果一个人</span>
          <span className="hero-line hero-line-2">没有活着</span>
          <span className="hero-line hero-line-3">那他算是<em>人</em>吗？</span>
        </h1>
        <p className="hero-subtitle">
          "人"这个词，描述的究竟是一种<em>活着的状态</em>，
          <br />还是一个超越生死的<em>存在范畴</em>？
        </p>
        <div className="hero-scroll-hint">
          <span className="hero-scroll-text">向下滚动，探寻答案</span>
          <span className="hero-scroll-arrow">↓</span>
        </div>
      </div>
    </section>
  )
}
