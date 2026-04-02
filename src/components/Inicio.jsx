import '../css/Inicio.css'
import fotoProfesional from '../assets/FotoProfesional.jpeg'

export default function Inicio() {
  return (
    <div className="inicio-container">
      {/* Escritorio */}
      <div className="inicio-row inicio-row-desktop">
        <img
          src={fotoProfesional}
          alt="Foto de Fernando Martín"
          className="inicio-foto"
        />
        <div className="inicio-info">
          <div className="inicio-row-top">
            <a
              href="https://www.linkedin.com/in/fernando-mart%C3%ADn-mart%C3%ADn-032a71338/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="disponible-btn">Disponible para trabajar</button>
            </a>
          </div>
          <div className="inicio-row-bottom">
            <h1 className="inicio-titulo">¡Hola! Soy Fernando 👋</h1>
          </div>
        </div>
      </div>
      {/* Móvil */}
      <div className="inicio-row inicio-row-mobile">
        <div className="inicio-foto-btn-row">
          <img
            src={fotoProfesional}
            alt="Foto de Fernando Martín"
            className="inicio-foto"
          />
          <a
            href="https://www.linkedin.com/in/fernando-mart%C3%ADn-mart%C3%ADn-032a71338/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="disponible-btn">Disponible para trabajar</button>
          </a>
        </div>
        <div className="inicio-info">
          <div className="inicio-row-bottom">
            <h1 className="inicio-titulo">¡Hola! Soy Fernando 👋</h1>
          </div>
        </div>
      </div>
      <p className="inicio-descripcion">
          Soy <b className="primary-bold">estudiante de cuarto año de Ingeniería Informática</b>.
          Me especializo en el <b className="primary-bold">desarrollo web</b> y de <b className="primary-bold">aplicaciones móviles</b>.
          Disfruto enfrentar desafíos que me permitan aprender continuamente y aplicar mis conocimientos para ofrecer soluciones.
      </p>
    </div>
  )
}
