import '../css/Experiencia.css'
import { useEffect, useState, useRef } from 'react'

export default function Experiencia({ experiencias, theme }) {
  const itemHeight = 90 
  const gap = 56
  const totalItems = experiencias.length
  const extraLine = 48
  const empresaOffset = 32
  const primerPuntoAjuste = 8

  const [isMobile, setIsMobile] = useState(window.innerWidth < 500)
  const [sectionHeight, setSectionHeight] = useState(null)
  const sectionRef = useRef(null)
  const timelineRef = useRef(null)

  // Refs para cada puesto
  const puestoRefs = useRef([])
  const [dotPositions, setDotPositions] = useState([])

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 500)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (isMobile && sectionRef.current) {
      setSectionHeight(sectionRef.current.offsetHeight)
    }
  }, [isMobile, experiencias])

  useEffect(() => {
    if (isMobile) {
      // Calcular la posición de cada puesto respecto a la timeline (móvil)
      const timelineTop = timelineRef.current?.getBoundingClientRect().top || 0
      const positions = puestoRefs.current.map(ref => {
        if (ref) {
          const rect = ref.getBoundingClientRect()
          return rect.top - timelineTop + rect.height / 2
        }
        return 0
      })
      setDotPositions(positions)
    } else {
      // Desktop
      const timelineTop = timelineRef.current?.getBoundingClientRect().top || 0
      const positions = puestoRefs.current.map(ref => {
        if (ref) {
          const rect = ref.getBoundingClientRect()
          return rect.top - timelineTop + rect.height / 2
        }
        return 0
      })
      setDotPositions(positions)
    }
  }, [isMobile, experiencias, sectionHeight])

  const timelineHeight = isMobile && sectionHeight
    ? sectionHeight - 100
    : totalItems * itemHeight + (totalItems - 1) * gap + (isMobile ? 0 : extraLine)

  return (
    <div className="experiencia-container" ref={sectionRef}>
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
          ref={timelineRef}
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
                  <div
                    className="experiencia-puesto"
                    ref={el => (puestoRefs.current[i] = el)}
                  >
                    {exp.puesto}
                  </div>
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

