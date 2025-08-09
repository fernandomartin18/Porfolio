import { useRef, useState } from 'react'
import './App.css'
import themes from './themes'

function App() {
  const [theme, setTheme] = useState('light')
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

  // Aplicar tema al body
  document.body.style.background = themes[theme].background
  document.body.style.color = themes[theme].text

  return (
    <>
      <nav className="navbar" style={{ background: themes[theme].navbar }}>
        <ul>
          <li onClick={() => scrollToSection('inicio')}>Inicio</li>
          <li onClick={() => scrollToSection('proyectos')}>Proyectos</li>
          <li onClick={() => scrollToSection('experiencia')}>Experiencia</li>
          <li onClick={() => scrollToSection('sobreMi')}>Sobre Mí</li>
          <li onClick={() => scrollToSection('contacto')}>Contacto</li>
        </ul>
        <button className="theme-btn" onClick={toggleTheme}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </nav>
      <section ref={sections.inicio} className="section inicio">
        <h1>Inicio</h1>
        {/* ...contenido de inicio... */}
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
