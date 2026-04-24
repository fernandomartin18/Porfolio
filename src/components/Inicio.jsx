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
          Estudiante de último año de <b className="primary-bold">Ingeniería Informática</b>.
          Me apasiona <b className="primary-bold">resolver problemas</b> a través de soluciones tecnológicas sólidas, priorizando siempre la <b className="primary-bold">eficiencia</b> y las <b className="primary-bold">buenas prácticas</b>.
          Soy una persona versátil que disfruta del <b className="primary-bold">aprendizaje continuo</b>, con gran capacidad para adaptarme a <b className="primary-bold">nuevos stacks tecnológicos</b> y aportar una <b className="primary-bold">visión técnica integral</b> en proyectos desafiantes.
      </p>
    </div>
  )
}
