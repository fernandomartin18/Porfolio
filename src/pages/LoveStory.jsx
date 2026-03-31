import React, { useEffect } from 'react'
import { FiHeart, FiCamera, FiImage, FiSmile, FiGift, FiStar } from 'react-icons/fi'
import '../css/Lovestory.css'
import lovestory1 from '../assets/lovestory1.jpg'
import lovestory2 from '../assets/lovestory2.jpg'
import lovestory3 from '../assets/lovestory3.jpg'
import lovestory4 from '../assets/lovestory4.jpg'
import lovestory5 from '../assets/lovestory5.jpg'
import lovestory6 from '../assets/lovestory6.jpg'

export default function LoveStory() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1 })

    const sections = document.querySelectorAll('.lovestory-section')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const handleBack = () => {
    globalThis.history.back()
  }

  const sections = [
    { title: 'Nuestro comienzo', text: 'HolaMomentos especialesMomentos sMomentos especialesMomentos especialesMomentos especialesMomentos especialesMomentos especialesMomentos especialesMomentos especialesMomentos especialesMomentos especialesMomentos especialesMomentos especialesMomentos especialesMomentos especialesMomentos especialesMomentos especialesMomentos especialesMomentos especialesMomentos especialesMomentos especialesMomentos especialesMomentos especialesMomentos especialesMomentos especialesMomentos especialesMomentos especialesMomentos especialesMomentos especialesMomentos especialesMomentos especialesMomentos especialesMomentos especialesMomentos especiales', img: lovestory1, icon: FiHeart, reverse: false },
    { title: 'Momentos especiales', text: 'Hola', img: lovestory2, icon: FiCamera, reverse: true },
    { title: 'Recuerdos guardados', text: 'Hola', img: lovestory3, icon: FiImage, reverse: false },
    { title: 'Sonrisas infinitas', text: 'Hola', img: lovestory4, icon: FiSmile, reverse: true },
    { title: 'Detalles que enamoran', text: 'Hola', img: lovestory5, icon: FiGift, reverse: false },
    { title: 'Un brillo único', text: 'Hola', img: lovestory6, icon: FiStar, reverse: true },
  ]

  return (
    <>
      {/* Botón Atrás fijo arriba a la izquierda */}
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
          <path d="M13 16L7 10L13 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Atrás
      </button>

      <div className="lovestory-container">
        <header className="lovestory-header">
          <h1 className="lovestory-title">LoveStory</h1>
          <p className="lovestory-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </header>

        <main>
          {sections.map((section) => (
            <section key={section.title} className={`lovestory-section ${section.reverse ? 'reverse' : ''}`}>
              <div className="lovestory-content">
                <div className="lovestory-title-row">
                  <section.icon className="lovestory-title-icon" aria-hidden="true" />
                  <h2 className="lovestory-section-title">{section.title}</h2>
                </div>
                <p className="lovestory-text">{section.text}</p>
              </div>
              <div className="lovestory-image-container">
              <img
                src={section.img}
                alt={section.title}
                className="lovestory-img"
                loading="lazy"
              />
              </div>
            </section>
          ))}
        </main>
      </div>
    </>
  )
}
