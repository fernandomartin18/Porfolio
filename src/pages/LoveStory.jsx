import React, { useEffect } from 'react'
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
  }, [])

  const handleBack = () => {
    window.history.back()
  }

  const recuerdos = [
    { src: lovestory1, texto: 'Ve los recuerdos y el contador' },
    { src: lovestory2, texto: 'Mira el recuerdo y su descripción' },
    { src: lovestory3, texto: 'Sube un nuevo recuerdo' },
    { src: lovestory4, texto: 'Añade más fotos' },
    { src: lovestory5, texto: 'Recorta la foto a tu gusto' },
    { src: lovestory6, texto: 'Añade una descripción' },
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
        {/* Flecha izquierda SVG */}
        <svg width="20" height="20" viewBox="0 0 20 20" style={{ display: 'block' }}>
          <path d="M13 16L7 10L13 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Atrás
      </button>
      <div className="lovestory-container">
        <h1 className="lovestory-title">LoveStory</h1>
        <div className="lovestory-grid">
          {recuerdos.map((recuerdo, i) => (
            <div className="lovestory-item" key={i}>
              <div className="lovestory-text">{recuerdo.texto}</div>
              <img
                src={recuerdo.src}
                alt={recuerdo.texto}
                className="lovestory-img"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
