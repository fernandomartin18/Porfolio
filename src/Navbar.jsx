import React from 'react'
import './Navbar.css'

function Navbar({ theme, toggleTheme, scrollToSection, themes }) {
  const isMobile = window.innerWidth < 500
  const iconSrc = theme === 'light' ? './public/dark.png' : './public/light.png'
  const iconColor = themes[theme].navbarText

  return (
    <nav className="navbar custom-navbar">
      <ul>
        <li onClick={() => scrollToSection('inicio')}>Inicio</li>
        <li onClick={() => scrollToSection('proyectos')}>Proyectos</li>
        <li onClick={() => scrollToSection('experiencia')}>
          {isMobile ? 'Exp.' : 'Experiencia'}
        </li>
        <li onClick={() => scrollToSection('sobreMi')}>Sobre Mí</li>
        <li onClick={() => scrollToSection('contacto')}>Contacto</li>
        <li>
          <button className="theme-btn" onClick={toggleTheme}>
            <img
              src={iconSrc}
              alt={theme === 'light' ? 'Modo oscuro' : 'Modo claro'}
              style={{
                width: '1.2rem',
                height: '1.2rem',
              }}
            />
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
