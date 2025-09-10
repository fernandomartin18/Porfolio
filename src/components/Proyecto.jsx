import { useRef, useState, useEffect } from 'react'
import '../css/Proyecto.css'
import { Link } from 'react-router-dom'

export default function Proyecto({ foto, enlace, titulo, tags, descripcion }) {
  const isInternal = enlace.startsWith('/')

  const LinkOrA = isInternal ? Link : 'a'
  const linkProps = isInternal
    ? { to: enlace }
    : { href: enlace, target: '_blank', rel: 'noopener noreferrer' }

  return (
    <div className="proyecto-card">
      <LinkOrA {...linkProps} className="proyecto-img-link">
        <img src={foto} alt={titulo} className="proyecto-img" />
      </LinkOrA>
      <div className="proyecto-content">
        <LinkOrA {...linkProps} className="proyecto-titulo-link">
          <h2 className="proyecto-titulo">{titulo}</h2>
        </LinkOrA>
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
        <LinkOrA {...linkProps} className="proyecto-desc-link">
          <p className="proyecto-descripcion">{descripcion}</p>
        </LinkOrA>
      </div>
    </div>
  )
}