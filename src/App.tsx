import HeroSection from './components/HeroSection'
import ChapterSection from './components/ChapterSection'
import SummarySection from './components/SummarySection'
import FooterSection from './components/FooterSection'
import { chapters } from './data/content'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <HeroSection />
      {chapters.map((chapter, index) => (
        <ChapterSection
          key={chapter.id}
          chapter={chapter}
          index={index}
        />
      ))}
      <SummarySection />
      <FooterSection />
    </div>
  )
}
