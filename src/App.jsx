import { useRef, useState, useEffect } from 'react'
import './css/App.css'
import themes from './styles/themes'
import Navbar from './components/Navbar'
import Inicio from './components/Inicio'
import Proyecto from './components/Proyecto'

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

  // Aplicar tema al body y variables CSS
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

  // Ejemplo de iconos SVG para tecnologías
  const iconos = {
    react: (
      <svg width="18" height="18" viewBox="0 0 32 32">
        <g>
          <ellipse fill="none" stroke="#61dafb" strokeWidth="2" cx="16" cy="16" rx="11" ry="4.2" />
          <ellipse fill="none" stroke="#61dafb" strokeWidth="2" cx="16" cy="16" rx="4.2" ry="11" transform="rotate(60 16 16)" />
          <ellipse fill="none" stroke="#61dafb" strokeWidth="2" cx="16" cy="16" rx="4.2" ry="11" transform="rotate(120 16 16)" />
          <circle fill="#61dafb" cx="16" cy="16" r="2.5" />
        </g>
      </svg>
    ),
    node: (
      <svg width="18" height="18" viewBox="0 0 32 32">
        <path fill="#8cc84b" d="M16 2.7L3.5 9.6v12.8L16 29.3l12.5-6.9V9.6z" />
        <path fill="#fff" d="M16 4.8l10.2 5.6v11.2L16 27.2l-10.2-5.6V10.4z" />
        <path fill="#8cc84b" d="M16 6.9l8 4.4v8.8l-8 4.4-8-4.4v-8.8z" />
      </svg>
    ),
    mongo: (
      <svg width="18" height="18" viewBox="0 0 32 32">
        <path fill="#47a248" d="M16 2C9.4 10.2 8.2 18.2 10.5 23.7c1.3 3.1 3.1 4.7 4.7 6.3.2.2.5.2.7 0 1.6-1.6 3.4-3.2 4.7-6.3C23.8 18.2 22.6 10.2 16 2z" />
        <path fill="#fff" d="M16 28.2c-1.2-1.2-2.6-2.5-3.6-4.7-2-4.7-1-11.6 3.6-18.2 4.6 6.6 5.6 13.5 3.6 18.2-1 2.2-2.4 3.5-3.6 4.7z" />
      </svg>
    ),
    flutter: (
      <svg width="18" height="18" viewBox="0 0 32 32">
        <polygon fill="#47c5fb" points="6,26 16,16 26,26 16,32" />
        <polygon fill="#00569e" points="16,16 26,6 32,12 22,22" />
        <polygon fill="#00b5f8" points="6,6 16,16 22,10 12,0" />
      </svg>
    ),
    firebase: (
      <svg width="18" height="18" viewBox="0 0 32 32">
        <path fill="#ffa000" d="M6 26L16 6l10 20z" />
        <path fill="#ffca28" d="M16 6l10 20H6z" />
      </svg>
    ),
    vue: (
      <svg width="18" height="18" viewBox="0 0 32 32">
        <polygon fill="#41b883" points="16,6 2,6 16,28 30,6" />
        <polygon fill="#34495e" points="16,12 7,6 16,22 25,6" />
      </svg>
    ),
    express: (
      <svg width="18" height="18" viewBox="0 0 32 32">
        <text x="0" y="16" fontSize="14" fill="#444" fontFamily="Arial">
          Ex
        </text>
      </svg>
    ),
    mysql: (
      <svg width="18" height="18" viewBox="0 0 32 32">
        <ellipse cx="16" cy="16" rx="14" ry="8" fill="#00758f" />
        <ellipse cx="16" cy="16" rx="10" ry="5" fill="#fff" />
        <ellipse cx="16" cy="16" rx="7" ry="3" fill="#00758f" />
      </svg>
    ),
    next: (
      <svg width="18" height="18" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="14" fill="#000" />
        <path d="M10 22V10h2v12zm4-12h2l6 12h-2zm0 0" fill="#fff" />
      </svg>
    ),
    tailwind: (
      <svg width="18" height="18" viewBox="0 0 32 32">
        <path fill="#38bdf8" d="M16 8c-4 0-6 2-8 6 2-2 4-2 6 0 2 2 4 2 6 0 2-2 4-2 6 0-2-4-4-6-8-6zm-8 10c2-2 4-2 6 0 2 2 4 2 6 0 2-2 4-2 6 0-2-4-4-6-8-6s-6 2-8 6z" />
      </svg>
    ),
    vercel: (
      <svg width="18" height="18" viewBox="0 0 32 32">
        <polygon points="16,6 30,26 2,26" fill="#000" />
      </svg>
    ),
  }

  const proyectos = [
    {
      foto: './FotoCasual.jpg',
      enlace: 'https://proyecto1.com',
      titulo: 'Proyecto Uno',
      tags: [
        { nombre: 'React', icono: iconos.react },
        { nombre: 'Node.js', icono: iconos.node },
        { nombre: 'MongoDB', icono: iconos.mongo },
      ],
      descripcion: 'Aplicación web moderna para gestión de tareas con autenticación y notificaciones en tiempo real.',
    },
    {
      foto: './FotoCasual.jpg',
      enlace: 'https://proyecto2.com',
      titulo: 'Proyecto Dos',
      tags: [
        { nombre: 'Flutter', icono: iconos.flutter },
        { nombre: 'Firebase', icono: iconos.firebase },
      ],
      descripcion: 'App móvil multiplataforma para seguimiento de hábitos y estadísticas personalizadas.',
    },
    {
      foto: './FotoCasual.jpg',
      enlace: 'https://proyecto3.com',
      titulo: 'Proyecto Tres',
      tags: [
        { nombre: 'Vue', icono: iconos.vue },
        { nombre: 'Express', icono: iconos.express },
        { nombre: 'MySQL', icono: iconos.mysql },
      ],
      descripcion: 'Plataforma de reservas online con panel de administración y pagos integrados.',
    },
    {
      foto: './FotoCasual.jpg',
      enlace: 'https://proyecto4.com',
      titulo: 'Proyecto Cuatro',
      tags: [
        { nombre: 'Next.js', icono: iconos.next },
        { nombre: 'Tailwind', icono: iconos.tailwind },
        { nombre: 'Vercel', icono: iconos.vercel },
      ],
      descripcion: 'Portfolio personal con blog integrado y despliegue automático en la nube.',
    },
  ]

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
        <Inicio />
      </section>
      <section ref={sections.proyectos} className="section proyectos">
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
