import { HelmetProvider } from 'react-helmet-async'
import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Values from './components/Values'
import Contact from './components/Contact'
import ThemeToggle from './components/ThemeToggle'
import SEO from './components/SEO'
import useTheme from './hooks/useTheme'
import './styles/global.css'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <HelmetProvider>
      <SEO />
      <Navigation />
      <main>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Values />
        <Contact />
      </main>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </HelmetProvider>
  )
}

export default App
