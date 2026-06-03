import { useEffect, useRef } from 'react'
import { summaryData, finalThoughts } from '../data/content'
import './SummarySection.css'

export default function SummarySection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('summary-visible')
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.unobserve(el)
  }, [])

  const summaryPrompt = 'open antique book glowing golden light on dark wooden table, wisdom knowledge convergence, warm amber illumination, dark atmospheric background'
  const API_BASE = 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image'
  const IMG_SIZE = 'landscape_16_9'

  return (
    <section className="summary" ref={sectionRef}>
      <div
        className="summary-bg-image"
        style={{
          backgroundImage: `url(${API_BASE}?prompt=${encodeURIComponent(summaryPrompt)}&image_size=${IMG_SIZE})`,
        }}
      />
      <div className="summary-overlay" />
      <div className="summary-container">
        <div className="summary-header">
          <h2 className="summary-title">种种视角，个个不同</h2>
          <p className="summary-subtitle">
            同一个问题，在不同棱镜下折射出不同的光芒
          </p>
        </div>

        <div className="summary-table-wrapper">
          <table className="summary-table">
            <thead>
              <tr>
                <th>视角</th>
                <th>回答</th>
              </tr>
            </thead>
            <tbody>
              {summaryData.map((row, i) => (
                <tr key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
                  <td className="summary-perspective">{row.perspective}</td>
                  <td className="summary-answer">{row.answer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="summary-thoughts">
          {finalThoughts.map((thought, i) => (
            <p key={i} className="summary-thought">
              {thought}
            </p>
          ))}
        </div>

        <div className="summary-divider">
          <span>✦</span>
        </div>

        <div className="summary-question">
          <p className="summary-question-text">
            那么——你认为呢？
          </p>
          <p className="summary-question-sub">
            这个问题没有标准答案，但思考它的过程本身，
            <br />也许比答案更加重要。
          </p>
        </div>
      </div>
    </section>
  )
}
