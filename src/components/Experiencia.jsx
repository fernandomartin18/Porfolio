import '../css/Experiencia.css'

export default function Experiencia({ experiencias, theme }) {
  // Calcula la altura real de la columna de experiencias y centra los puntos respecto a cada experiencia
  const itemHeight = 90 
  const gap = 56
  const totalItems = experiencias.length
  const extraLine = 48
  const timelineHeight = totalItems * itemHeight + (totalItems - 1) * gap + extraLine
  const empresaOffset = 32
  const primerPuntoAjuste = 8

  const dotPositions = experiencias.map((_, i) =>
    i * (itemHeight + gap) + empresaOffset + extraLine / 2 - (i === 0 ? primerPuntoAjuste : 0)
  )

  return (
    <div className="experiencia-container">
      <div className="experiencia-header">
        <span
          className="experiencia-icon"
          style={{
            display: 'inline-flex',
            width: 32,
            height: 32,
            color: theme === 'dark' ? '#fff' : '#222'
          }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
            <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>
            <path d="M12 12l0 .01"></path>
            <path d="M3 13a20 20 0 0 0 18 0"></path>
          </svg>
        </span>
        <h1 className="experiencia-titulo">Experiencia</h1>
      </div>
      <div className="experiencia-list">
        <div
          className="experiencia-timeline"
          style={{ height: timelineHeight }}
        >
          <div
            className="experiencia-line"
            style={{
              height: timelineHeight,
              top: 0,
            }}
          />
          {dotPositions.map((pos, i) => (
            <div
              key={i}
              className="experiencia-dot"
              style={{ top: `${pos}px` }}
            />
          ))}
        </div>
        <div className="experiencia-items">
          {experiencias.map((exp, i) => (
            <div
              className="experiencia-info experiencia-item-height"
              key={i}
              style={{ minHeight: itemHeight }}
            >
              <div className="experiencia-info-main">
                <div>
                  <div className="experiencia-puesto">{exp.puesto}</div>
                  <div className="experiencia-empresa">{exp.empresa}</div>
                  <div className="experiencia-fecha">{exp.fecha}</div>
                </div>
                <div className="experiencia-descripcion">{exp.descripcion}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

