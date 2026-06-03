import './FooterSection.css'

export default function FooterSection() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          一场没有终点的追问
        </p>
        <p className="footer-sub">
          灵感源于一场关于存在与语言的对话
        </p>
        <div className="footer-divider" />
        <p className="footer-small">
          Wittgenstein: "The limits of my language mean the limits of my world."
        </p>
      </div>
    </footer>
  )
}
