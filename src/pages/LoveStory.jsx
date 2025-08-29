import React, { useEffect } from 'react'
import '../css/Lovestory.css'

export default function LoveStory() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  const handleBack = () => {
    window.history.back()
  }

  const recuerdos = [
    { src: '/lovestory1.jpg', texto: 'Ve los recuerdos y el contador' },
    { src: '/lovestory2.jpg', texto: 'Mira el recuerdo y su descripción' },
    { src: '/lovestory3.jpg', texto: 'Sube un nuevo recuerdo' },
    { src: '/lovestory4.jpg', texto: 'Añade más fotos' },
    { src: '/lovestory5.jpg', texto: 'Recorta la foto a tu gusto' },
    { src: '/lovestory6.jpg', texto: 'Añade una descripción' },
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
