import { useRef, useState, useEffect } from 'react'
import '../css/Proyecto.css'

export default function Proyecto({ foto, enlace, titulo, tags, descripcion }) {
  return (
    <div className="proyecto-card">
      <a href={enlace} target="_blank" rel="noopener noreferrer" className="proyecto-img-link">
        <img src={foto} alt={titulo} className="proyecto-img" />
      </a>
      <div className="proyecto-content">
        <a href={enlace} target="_blank" rel="noopener noreferrer" className="proyecto-titulo-link">
          <h2 className="proyecto-titulo">{titulo}</h2>
        </a>
        <div className="proyecto-tags">
          {tags.map((tag, i) => (
            <span className="proyecto-tag" key={i}>
              {tag.icono && (
                <span className="proyecto-tag-icon" style={{ marginRight: 6, display: 'flex', alignItems: 'center' }}>
                  {tag.icono}
                </span>
              )}
              {tag.nombre}
            </span>
          ))}
        </div>
        <a href={enlace} target="_blank" rel="noopener noreferrer" className="proyecto-desc-link">
          <p className="proyecto-descripcion">{descripcion}</p>
        </a>
      </div>
    </div>
  )
}