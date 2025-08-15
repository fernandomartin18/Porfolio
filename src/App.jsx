import { useRef, useState, useEffect } from 'react'
import './css/App.css'
import themes from './styles/themes'
import Navbar from './components/Navbar'

function App() {
  const getPreferredTheme = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

  const [theme, setTheme] = useState(getPreferredTheme())
  const [activeSection, setActiveSection] = useState('inicio')
  const sections = {
    inicio: useRef(null),
    proyectos: useRef(null),
    experiencia: useRef(null),
    sobreMi: useRef(null),
    contacto: useRef(null),
  }

  const scrollToSection = (key) => {
    sections[key].current.scrollIntoView({ behavior: 'smooth' })
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    const handleScroll = () => {
      const sectionKeys = Object.keys(sections)
      let current = sectionKeys[0]
      for (let key of sectionKeys) {
        const ref = sections[key].current
        if (ref) {
          const rect = ref.getBoundingClientRect()
          if (rect.top <= 80 && rect.bottom > 80) {
            current = key
            break
          }
        }
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  // Aplicar tema al body y variables CSS para el navbar
  document.body.style.color = themes[theme].text
  document.body.style.backgroundImage = themes[theme].gradientBg
  document.body.style.backgroundSize = 'cover'
  document.body.style.backgroundRepeat = 'no-repeat'
  document.body.style.overscrollBehavior = 'none' // Desactiva overscroll
  document.body.style.transition = 'background 0.5s, color 0.5s' // Transición suave
  document.documentElement.style.transition = 'background 0.5s, color 0.5s' // Transición raíz
  document.documentElement.style.setProperty('--navbar-bg', themes[theme].navbar + 'cc')
  document.documentElement.style.setProperty('--navbar-text', themes[theme].navbarText)
  document.documentElement.style.setProperty('--navbar-shadow', themes[theme].navbarShadow)
  document.documentElement.style.setProperty(
    '--navbar-active',
    themes[theme].navbarActive
  )

  return (
    <>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        scrollToSection={scrollToSection}
        themes={themes}
        activeSection={activeSection}
      />
      <section ref={sections.inicio} className="section inicio">
        <h1>Inicio</h1>
        {/* ...contenido de inicio... */}
        <p>Bienvenido a mi portafolio000ssssssssssssssssssssss00000</p>
      </section>
      <section ref={sections.proyectos} className="section proyectos">
        <h1>Proyectos</h1>
        {/* ...contenido de proyectos... */}
      </section>
      <section ref={sections.experiencia} className="section experiencia">
        <h1>Experiencia</h1>
        {/* ...contenido de experiencia... */}
      </section>
      <section ref={sections.sobreMi} className="section sobreMi">
        <h1>Sobre Mí</h1>
        {/* ...contenido sobre mí... */}
      </section>
      <section ref={sections.contacto} className="section contacto">
        <h1>Contacto</h1>
        {/* ...contenido de contacto... */}
      </section>
    </>
  )
}

export default App
