import { useEffect, useRef } from 'react'
import type { ChapterData } from '../data/content'
import './ChapterSection.css'

interface Props {
  chapter: ChapterData
  index: number
}

export default function ChapterSection({ chapter, index }: Props) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('chapter-visible')
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.unobserve(el)
  }, [])

  const API_BASE = 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image'
  const IMG_SIZE = 'landscape_16_9'

  return (
    <section
      className="chapter"
      ref={sectionRef}
      id={chapter.id}
      style={{
        '--chapter-accent': chapter.theme.accent,
        '--chapter-text': chapter.theme.text,
        '--chapter-gradient': chapter.theme.gradient,
      } as React.CSSProperties}
    >
      <div
        className="chapter-bg-image"
        style={{
          backgroundImage: `url(${API_BASE}?prompt=${encodeURIComponent(chapter.bgImagePrompt)}&image_size=${IMG_SIZE})`,
        }}
      />
      <div className="chapter-overlay" />
      <div className="chapter-bg" />
      <div className="chapter-container">
        <div className="chapter-header">
          <span className="chapter-number">{String(index + 1).padStart(2, '0')}</span>
          <div className="chapter-title-group">
            <h2 className="chapter-title">{chapter.title}</h2>
            <p className="chapter-subtitle">{chapter.subtitle}</p>
          </div>
        </div>

        <div className="chapter-body">
          <div className="chapter-paragraphs">
            {chapter.paragraphs.map((p, i) => (
              <p
                key={i}
                className="chapter-paragraph"
                style={{ transitionDelay: `${0.3 + i * 0.15}s` }}
              >
                {p}
              </p>
            ))}
          </div>

          <div className="chapter-highlights">
            {chapter.highlights.map((h, i) => (
              <div
                key={i}
                className="chapter-highlight"
                style={{ transitionDelay: `${0.6 + i * 0.2}s` }}
              >
                <span className="highlight-bullet">◆</span>
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
