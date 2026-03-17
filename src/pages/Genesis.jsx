import React, { useEffect } from 'react'

export default function Genesis() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  const handleBack = () => {
    window.history.back()
  }

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

      <div style={{ 
        padding: '6rem 2rem', 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text)'
      }}>
        <h1>GENESIS</h1>
        <p>Próximamente...</p>
      </div>
    </>
  )
}
