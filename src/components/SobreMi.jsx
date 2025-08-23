import '../css/SobreMi.css'

export default function SobreMi() {
  return (
    <div className="sobre-mi-content">
      <div className="sobre-mi-text">
        <p>
          Soy un desarrollador apasionado por la tecnología y la innovación. Me encanta aprender nuevas herramientas y lenguajes para crear soluciones eficientes y creativas.
        </p>
        <p>
          Tengo experiencia en desarrollo web, tanto en frontend como en backend, y disfruto trabajando en proyectos colaborativos donde puedo aportar mis conocimientos y seguir creciendo profesionalmente.
        </p>
        <p>
          Fuera del código, me gusta la fotografía, la música y explorar nuevas ideas que me inspiren a seguir mejorando cada día.
        </p>
      </div>
      <div className="sobre-mi-foto">
        <img src="./FotoCasual.jpg" alt="Foto personal" />
      </div>
    </div>
  )
}
