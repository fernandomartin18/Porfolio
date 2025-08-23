import '../css/Contacto.css'

export default function Contacto({ theme }) {
  return (
    <div className="contacto-botones-container">
      <div className="contacto-row">
        <a
          className="contacto-btn"
          href="/CV_Fernando_Martin.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/download.png" alt="CV" className="contacto-icon" style={{ filter: theme === 'dark' ? 'invert(1)' : 'none' }}/>
          Descargar CV
        </a>
        <a
          className="contacto-btn"
          href="https://www.linkedin.com/in/fernando-mart%C3%ADn-mart%C3%ADn-032a71338/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/linkedin.png" alt="LinkedIn" className="contacto-icon" style={{ filter: theme === 'dark' ? 'invert(1)' : 'none' }} />
          LinkedIn
        </a>
      </div>
      <div className="contacto-row">
        <a
          className="contacto-btn"
          href="mailto:fernandomm1840@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/mail.png" alt="Email" className="contacto-icon"             style={{ filter: theme === 'dark' ? 'invert(1)' : 'none' }}
/>
          Correo electrónico
        </a>
        <a
          className="contacto-btn"
          href="https://github.com/fernandomartin18"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/github.png"
            alt="GitHub"
            className="contacto-icon"
            style={{ filter: theme === 'dark' ? 'invert(1)' : 'none' }}
          />
          GitHub
        </a>
      </div>
    </div>
  )
}
