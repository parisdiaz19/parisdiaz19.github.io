import { useRef } from 'react'
import { ProgressBar } from './components/ProgressBar'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Work } from './components/Work'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { useSiteMotion } from './hooks/useSiteMotion'

export default function App() {
  const root = useRef<HTMLDivElement>(null)
  useSiteMotion(root)

  return (
    <div ref={root}>
      <ProgressBar />

      <div className="wrap">
        <Nav />
        <Hero />
      </div>

      <Marquee />

      <div className="wrap">
        <Work />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
