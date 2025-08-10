import { useRef, useState } from 'react'
import './App.css'
import themes from './themes'
import Navbar from './Navbar'

function App() {
  const getPreferredTheme = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

  const [theme, setTheme] = useState(getPreferredTheme())
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

  // Aplicar tema al body y variables CSS para el navbar
  document.body.style.color = themes[theme].text
  document.body.style.backgroundImage = themes[theme].gradientBg // Añade esta línea
  document.body.style.backgroundSize = 'cover' // Opcional para asegurar que cubra todo
  document.body.style.backgroundRepeat = 'no-repeat' // Opcional
  document.documentElement.style.setProperty('--navbar-bg', themes[theme].navbar + 'cc')
  document.documentElement.style.setProperty('--navbar-text', themes[theme].navbarText)
  document.documentElement.style.setProperty('--navbar-shadow', themes[theme].navbarShadow)

  return (
    <>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        scrollToSection={scrollToSection}
        themes={themes}
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
