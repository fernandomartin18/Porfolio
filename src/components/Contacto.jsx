import '../css/Contacto.css'
import downloadIcon from '../assets/download.png'
import linkedinIcon from '../assets/linkedin.png'
import mailIcon from '../assets/mail.png'
import githubIcon from '../assets/github.png'
import cvPdf from '../assets/CVFernandoMartín.pdf'

export default function Contacto({ theme }) {
  return (
    <div className="contacto-botones-container">
      <div className="contacto-row">
        <a
          className="contacto-btn"
          href={cvPdf}
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={downloadIcon} alt="CV" className="contacto-icon" style={{ filter: theme === 'dark' ? 'invert(1)' : 'none' }}/>
          Descargar CV
        </a>
        <a
          className="contacto-btn"
          href="https://www.linkedin.com/in/fernando-mart%C3%ADn-mart%C3%ADn-032a71338/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} alt="LinkedIn" className="contacto-icon" style={{ filter: theme === 'dark' ? 'invert(1)' : 'none' }} />
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
          <img src={mailIcon} alt="Email" className="contacto-icon"             style={{ filter: theme === 'dark' ? 'invert(1)' : 'none' }}
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
            src={githubIcon}
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
