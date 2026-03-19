import React, { useEffect } from 'react'
import '../css/Genesis.css'
import genesisBlack from '../assets/Genesis_Horizontal_Black.png'
import genesisWhite from '../assets/Genesis_Horizontal_White.png'
import genesisImg from '../assets/mockup mac.png'

export default function Genesis({ theme }) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1 })

    const sections = document.querySelectorAll('.genesis-section')
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const handleBack = () => {
    window.history.back()
  }

  const sections = [
    {
      title: "Diseño Intuitivo",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: genesisImg,
      reverse: false
    },
    {
      title: "Funcionalidad Avanzada",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      img: genesisImg,
      reverse: true
    },
    {
      title: "Experiencia de Usuario",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      img: genesisImg,
      reverse: false
    }
  ]

  return (
    <>
      <button
        onClick={handleBack}
        style={{
          position: 'fixed',
          top: '1.2rem',
          left: '1.2rem',
          zIndex: 200,
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.5rem 1.2rem 0.5rem 0.9rem',
          borderRadius: '1.2rem',
          background: 'var(--navbar-bg, #fffccc)',
          color: 'var(--navbar-text, #222)',
          border: '1px solid rgba(142, 141, 141, 0.35)',
          boxShadow: 'var(--navbar-shadow, 0 2px 16px rgba(0,0,0,0.307))',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          fontWeight: 500,
          fontSize: '1rem',
          cursor: 'pointer',
          transition: 'background 0.2s, color 0.2s',
        }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" style={{ display: 'block' }}>
            <path fill="currentColor" fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd"/>
        </svg>
        <span>Volver</span>
      </button>

      <div className="genesis-container">
        <header className="genesis-header">
          <img 
            src={theme === 'light' ? genesisBlack : genesisWhite} 
            alt="Genesis Logo" 
            className="genesis-logo" 
          />
          <p className="genesis-subtitle">Aplicación web de generación automática de código cuántico-clásico mediante Inteligencia Artificial multimodal.</p>
        </header>

        <main>
          {sections.map((section, index) => (
            <section key={index} className={`genesis-section ${section.reverse ? 'reverse' : ''}`}>
              <div className="genesis-content">
                <h2 className="genesis-section-title">{section.title}</h2>
                <p className="genesis-text">{section.text}</p>
              </div>
              <div className="genesis-image-container">
                <img src={section.img} alt={section.title} className="genesis-screenshot" />
              </div>
            </section>
          ))}
        </main>

        <footer className="genesis-footer">
          <div className={`genesis-cta ${theme}`}>
            <h2 className="genesis-cta-title">¿Quieres explorar GENESIS tu mismo?</h2>
            <div className="genesis-cta-columns">
              <div className="genesis-cta-text-col">
                <p className="genesis-cta-text">
                  Puedes encontrar instrucciones detalladas sobre cómo ejecutar la aplicación en local, así como el código fuente en los repositorios correspondientes de GitHub.
                </p>
              </div>
              <div className="genesis-cta-buttons">
                <a href="https://github.com/fernandomartin18/TFG-Frontend" target="_blank" rel="noopener noreferrer" className="genesis-cta-btn frontend">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                  Repositorio Frontend &rarr;
                </a>
                <a href="https://github.com/fernandomartin18/TFG-Backend" target="_blank" rel="noopener noreferrer" className="genesis-cta-btn backend">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <polyline points="7 7 10 10 7 13" />
                    <line x1="12" y1="13" x2="16" y2="13" />
                  </svg>
                  Repositorio Backend &rarr;
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
