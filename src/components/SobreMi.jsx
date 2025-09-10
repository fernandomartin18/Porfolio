import '../css/SobreMi.css'

export default function SobreMi() {
  return (
    <div className="sobre-mi-content">
      <div className="sobre-mi-text">
        <p>
          Me llamo <span className="primary-text">Fernando Martín</span> y desde siempre me ha fascinado cómo la tecnología puede transformar ideas en realidades. La <span className="primary-text">programación</span> se ha convertido en mi forma de dar vida a <span className="primary-text">proyectos</span> que combinan creatividad, lógica y utilidad en el día a día.
        </p>
        <p>
          Trabajo con lenguajes como Java, JavaScript y Python, pero lo que más me gusta es desarrollar <span className="primary-text">aplicaciones web y móvil</span>, para lo que uso mayoritariamente React. Lo que más disfruto es construir herramientas que simplifiquen, conecten y <span className="primary-text">generen impacto positivo</span>.
        </p>
        <p>
          Soy una <span className="primary-text">persona curiosa y constante</span>, siempre abierta a aprender de cada reto y de las personas con las que <span className="primary-text">colaboro</span>. La música y los gatos son la mejor compañía en mis horas de código.
        </p>
      </div>
      <div className="sobre-mi-foto">
        <img src="./FotoCasual.jpg" alt="Foto personal" />
      </div>
    </div>
  )
}
