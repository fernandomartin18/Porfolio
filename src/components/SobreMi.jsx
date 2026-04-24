import '../css/SobreMi.css'
import fotoCasual from '../assets/FotoCasual.jpg'

export default function SobreMi() {
  return (
    <div className="sobre-mi-content">
      <div className="sobre-mi-text">
        <p>
          Me llamo <span className="primary-text">Fernando Martín</span> y desde siempre me ha fascinado cómo la tecnología puede transformar ideas en realidades. Entiendo la <span className="primary-text">programación</span> no solo como líneas de código, sino como la herramienta definitiva para diseñar proyectos que combinan <span className="primary-text">lógica</span>, <span className="primary-text">eficiencia</span> y <span className="primary-text">utilidad real</span>.
        </p>
        <p>
          Me muevo cómodamente entre diferentes tecnologías. Trabajo con <span className="primary-text">Java</span>, <span className="primary-text">Python</span> y <span className="primary-text">JavaScript</span>, y cuento con experiencia sólida creando aplicaciones y webs con <span className="primary-text">React</span>. Sin embargo, más allá de la herramienta o el framework, mi objetivo es siempre el mismo: <span className="primary-text">construir soluciones de software integrales</span>, bien estructuradas y que conecten realmente con las necesidades del usuario final.
        </p>
        <p>
          A nivel personal, la <span className="primary-text">curiosidad</span> y la <span className="primary-text">constancia</span> son mis motores. Valoro mucho el <span className="primary-text">trabajo en equipo</span> y el <span className="primary-text">aprendizaje mutuo</span> en cada proyecto. Y sí, la música y mi gato suelen ser mi mejor compañía en las sesiones de código en casa.
        </p>
      </div>
      <div className="sobre-mi-foto">
        <img src={fotoCasual} alt="Foto personal" />
      </div>
    </div>
  )
}
