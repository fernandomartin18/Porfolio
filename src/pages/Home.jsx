import { useRef, useState, useEffect } from 'react'
import themes from '../styles/themes'
import Navbar from '../components/Navbar'
import Inicio from '../components/Inicio'
import Proyecto from '../components/Proyecto'
import Experiencia from '../components/Experiencia'
import SobreMi from '../components/SobreMi'
import Contacto from '../components/Contacto'
import proyectos from '../constantes/proyectos'
import experiencias from '../constantes/experiencias'

export default function Home({ theme, toggleTheme }) {
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

  // Visibilidad animada de cada sección
  const [visibleSections, setVisibleSections] = useState({})

  useEffect(() => {
    const sectionKeys = Object.keys(sections)
    const handleIntersection = (entries) => {
      setVisibleSections((prev) => {
        const updated = { ...prev }
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updated[entry.target.dataset.section] = true
          }
        })
        return updated
      })
    }
    const observer = new window.IntersectionObserver(handleIntersection, {
      threshold: 0.15,
    })
    sectionKeys.forEach((key) => {
      const ref = sections[key].current
      if (ref) {
        ref.dataset.section = key
        observer.observe(ref)
      }
    })
    return () => observer.disconnect()
  }, [sections])

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
      // Cerca del final de la página, navbar activa contacto
      const scrollPosition = window.innerHeight + window.scrollY
      const threshold = 50 // píxeles desde el fondo
      if (document.body.offsetHeight - scrollPosition < threshold) {
        current = 'contacto'
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  // Aplicar tema al body y variables CSS
  useEffect(() => {
    document.body.style.color = themes[theme].text
    document.body.style.backgroundImage = themes[theme].gradientBg
    document.body.style.backgroundSize = 'cover'
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.overscrollBehavior = 'none'
    document.body.style.transition = 'background 0.5s, color 0.5s'
    document.documentElement.style.transition = 'background 0.5s, color 0.5s'
    document.documentElement.style.setProperty('--navbar-bg', themes[theme].navbar + 'cc')
    document.documentElement.style.setProperty('--navbar-text', themes[theme].navbarText)
    document.documentElement.style.setProperty('--navbar-shadow', themes[theme].navbarShadow)
    document.documentElement.style.setProperty('--primary', themes[theme].primary)
    document.documentElement.style.setProperty('--foto-shadow', themes[theme].fotoShadow)
    document.documentElement.style.setProperty('--text', themes[theme].text)
    document.documentElement.style.setProperty('--card-shadow', themes[theme].cardShadow)
    document.documentElement.style.setProperty('--card-background', themes[theme].cardBackground)
    document.documentElement.style.setProperty('--foto-sombra-sobre-mi', theme === 'dark' ? '#288d83ff' : themes[theme].primary)
  }, [theme])

  return (
    <>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        scrollToSection={scrollToSection}
        themes={themes}
        activeSection={activeSection}
      />
      <section
        ref={sections.inicio}
        className={`section inicio${visibleSections.inicio ? ' section-visible' : ''}`}
      >
        <Inicio />
      </section>
      <section
        ref={sections.proyectos}
        className={`section proyectos${visibleSections.proyectos ? ' section-visible' : ''}`}
      >
        <div className="proyectos-container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '2rem', marginTop: '2rem' }}>
            <img src="./developer.png" alt="Icono Proyectos" style={{ width: '32px', height: '32px', filter: theme === 'light' ? 'invert(1)' : 'none' }} />
            <h1 style={{ fontSize: '2rem', fontWeight: 800, margin: 0 }}>Proyectos</h1>
          </div>
          {proyectos.map((p, i) => (
            <Proyecto
              key={i}
              foto={p.foto}
              enlace={p.enlace}
              titulo={p.titulo}
              tags={p.tags}
              descripcion={p.descripcion}
            />
          ))}
        </div>
      </section>
      <section
        ref={sections.experiencia}
        className={`section experiencia${visibleSections.experiencia ? ' section-visible' : ''}`}
      >
        <Experiencia experiencias={experiencias} theme={theme} />
      </section>
      <section
        ref={sections.sobreMi}
        className={`section sobreMi${visibleSections.sobreMi ? ' section-visible' : ''}`}
      >
        <div className="proyectos-container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '2rem', marginTop: '2rem' }}>
            <img src="./sobremi.png" alt="Icono Sobre Mí" style={{ width: '32px', height: '32px', filter: theme === 'dark' ? 'invert(1)' : 'none' }} />
            <h1 style={{ fontSize: '2rem', fontWeight: 800, margin: 0 }}>Sobre Mí</h1>
          </div>
          <SobreMi />
        </div>
      </section>
      <section
        ref={sections.contacto}
        className={`section contacto${visibleSections.contacto ? ' section-visible' : ''}`}
      >
        <div className="proyectos-container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '2rem', marginTop: '2rem' }}>
            <img src="./contacto.png" alt="Icono Contacto" style={{ width: '32px', height: '32px', filter: theme === 'dark' ? 'invert(1)' : 'none' }} />
            <h1 style={{ fontSize: '2rem', fontWeight: 800, margin: 0 }}>Contacto</h1>
          </div>
          <Contacto theme={theme} />
        </div>
      </section>
    </>
  )
}
