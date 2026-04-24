import React, { useEffect } from 'react'
import {
  FiShield,
  FiCpu,
  FiMessageSquare,
  FiFolder,
  FiCode,
  FiEdit3,
  FiFileText,
  FiImage,
  FiSettings,
} from 'react-icons/fi'
import { BsDiagram2 } from 'react-icons/bs'
import { SiUml } from 'react-icons/si'
import '../css/Genesis.css'
import genesisBlack from '../assets/Genesis_Horizontal_Black.png'
import genesisWhite from '../assets/Genesis_Horizontal_White.png'
import registroImg from '../assets/registro y login.png'
import selectorImg from '../assets/selector llm.png'
import chatImg from '../assets/chat.png'
import barraCodigosImg from '../assets/barralateralcodigos.png'
import visualizadorCodigoImg from '../assets/visualizador de codigo.png'
import plantUMLImg from '../assets/chat con plantuml.png'
import editorPlantUMLImg from '../assets/editor codigo.png'
import editorDiagramasImg from '../assets/editor diagrama.png'
import templateImg from '../assets/templates.png'
import visorImagenesImg from '../assets/visualizar imagen.png'
import ajustesImg from '../assets/panel ajustes.png'

export default function Genesis({ theme }) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1 })

    const sections = document.querySelectorAll('.genesis-section')
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const handleBack = () => {
    window.history.back()
  }

  const sections = [
    {
      title: "Guarda tus chats de forma segura",
      text: "¡Explora la app sin compromisos! Pero si quieres guardar tus chats y tener una experiencia personalizada, crear una cuenta es la mejor opción. La seguridad es una prioridad: tu contraseña siempre estará cifrada y las sesiones se blindan utilizando el estándar de seguridad JWT.",
      img: registroImg,
      icon: FiShield,
      reverse: false
    },
    {
      title: "Modelos a la carta",
      text: "Toma el control absoluto de cada interacción seleccionando tu modelo de lenguaje (LLM) favorito entre los que ya tengas descargados. ¿Buscas máxima eficiencia? Activa el Modo Automático. Esta función combina el poder de los modelos más avanzados en visión artificial y generación de código para interpretar tus diagramas y transformarlos en código fuente con gran fidelidad.",
      img: selectorImg,
      icon: FiCpu,
      reverse: true
    },
    {
      title: "Espacio ordenado e inteligente",
      text: "Una experiencia de chat diseñada tanto para la estética como para la funcionalidad. Las respuestas con formato enriquecido facilitan el seguimiento de la información, mientras que la barra lateral ofrece una gestión total. Destaca conversaciones clave fijándolas en la parte superior, o utiliza la agrupación por proyectos para unificar el contexto de varios chats.",
      img: chatImg,
      icon: FiMessageSquare,
      reverse: false
    },
    {
      title: "Código organizado: del chat a tu entorno local",
      text: "Cuando la conversación genera código, la interfaz despliega automáticamente un panel lateral que centraliza todos los fragmentos creados para poder visualizarlos y descargarlos individualmente al instante. GENESIS también permite exportar todo el código a la vez en un archivo ZIP, manteniendo intacta la estructura de directorios y paquetes definida en el diagrama original.",
      img: barraCodigosImg,
      icon: FiFolder,
      reverse: true
    },
    {
      title: "Código con sintaxis resaltada",
      text: "Revisa los fragmentos de código sin salir de la aplicación. Gracias al resaltado de sintaxis integrado, la lectura es tan cómoda y clara como en un editor profesional. Esto facilita la comprensión, análisis y revisión de cada línea generada por la IA antes de exportarla.",
      img: visualizadorCodigoImg,
      icon: FiCode,
      reverse: false
    },
    {
      title: "Validación estructural antes del código",
      text: "Antes de escribir una sola línea de código, el sistema genera y muestra una representación en PlantUML del diagrama subido. Este paso intermedio de validación permite comprobar visualmente que la IA ha interpretado a la perfección la arquitectura y sus relaciones, garantizando así que el código final se ajuste exactamente al diseño original.",
      img: plantUMLImg,
      icon: SiUml,
      reverse: true
    },
    {
      title: "Editor de código PlantUML",
      text: "El diagrama no coincide exactamente con tu imagen? ¡No hay problema! Puedes editar el código PlantUML directamente en la aplicación. Ajusta los detalles para que todo encaje a la perfección, visualiza el resultado de los cambios en tiempo real y vuelve a generar el código con tus correcciones al instante.",
      img: editorPlantUMLImg,
      icon: FiEdit3,
      reverse: false
    },
    {
      title: "Editor plantuml interactivo",
      text: "No es necesario dominar la sintaxis de PlantUML para corregir errores. El editor interactivo proporciona un lienzo libre donde es posible agregar clases, agruparlas en paquetes y distribuir los componentes según los requisitos del proyecto. Permite configurar atributos y establecer relaciones de forma completamente gráfica e intuitiva.",
      img: editorDiagramasImg,
      icon: BsDiagram2,
      reverse: true
    },
    {
      title: "Plantillas para prompts infalibles",
      text: "La calidad de los resultados generados por la IA depende de la claridad de las instrucciones. El sistema incluye un catálogo de plantillas diseñadas para estructurar y mejorar la redacción de los prompts. Esto garantiza que el LLM comprenda con exactitud los requerimientos técnicos, optimizando tanto la interpretación de diagramas complejos como la posterior generación de código.",
      img: templateImg,
      icon: FiFileText,
      reverse: false
    },
    {
      title: "Gestión multimedia clara en chats",
      text: "GENESIS ofrece una previsualización instantánea antes de confirmar cada envío, junto con un acceso rápido a todas las imágenes ya compartidas en el chat. Control visual absoluto sin interrumpir la conversación.",
      img: visorImagenesImg,
      icon: FiImage,
      reverse: true
    },
    {
      title: "Tu entorno,\ntus reglas",
      text: "Accede a un panel de ajustes diseñado para adaptar la aplicación a cualquier preferencia. Desde este espacio es posible personalizar los detalles de la cuenta, cambiar el tema visual para trabajar con mayor comodidad y gestionar la seguridad actualizando la contraseña en cualquier momento. Un entorno flexible pensado para ofrecer control absoluto.",
      img: ajustesImg,
      icon: FiSettings,
      reverse: false
    }
  ]

  return (
    <>
      <button
        onClick={handleBack}
        style={{
          position: 'fixed',
          top: '1.2rem',
          left: '1.2rem',
          zIndex: 200,
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.5rem 1.2rem 0.5rem 0.9rem',
          borderRadius: '1.2rem',
          background: 'var(--navbar-bg, #fffccc)',
          color: 'var(--navbar-text, #222)',
          border: '1px solid rgba(142, 141, 141, 0.35)',
          boxShadow: 'var(--navbar-shadow, 0 2px 16px rgba(0,0,0,0.307))',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          fontWeight: 500,
          fontSize: '1rem',
          cursor: 'pointer',
          transition: 'background 0.2s, color 0.2s',
        }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" style={{ display: 'block' }}>
            <path fill="currentColor" fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd"/>
        </svg>
        <span>Volver</span>
      </button>

      <div className="genesis-container">
        <header className="genesis-header">
          <img 
            src={theme === 'light' ? genesisBlack : genesisWhite} 
            alt="Genesis Logo" 
            className="genesis-logo" 
          />
          <p className="genesis-subtitle">Aplicación web de generación automática de código cuántico-clásico mediante Inteligencia Artificial multimodal. Desarrollada como Trabajo de Fin de Grado y fruto de una Beca de Colaboración del Ministerio con el Departamento de Tecnologías y Sistemas de Información de la Universidad de Castilla La Mancha.</p>
        </header>

        <main>
          {sections.map((section, index) => (
            <section key={index} className={`genesis-section ${section.reverse ? 'reverse' : ''}`}>
              <div className="genesis-content">
                <div className="genesis-title-row">
                  <section.icon className="genesis-title-icon" aria-hidden="true" />
                  <h2 className="genesis-section-title">{section.title}</h2>
                </div>
                <p className="genesis-text">{section.text}</p>
              </div>
              <div className="genesis-image-container">
                <img src={section.img} alt={section.title} className="genesis-screenshot" />
              </div>
            </section>
          ))}
        </main>

        <section className="genesis-video-block" aria-label="Video demostracion de Genesis">
          <h2 className="genesis-video-title">Video demostración de GENESIS</h2>
          <div className="genesis-video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/_kcWj5R8cRs?si=b5uayuXadWTtlWfm"
              title="Video demostración de GENESIS"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </section>

        <footer className="genesis-footer">
          <div className={`genesis-cta ${theme}`}>
            <h2 className="genesis-cta-title">¿Quieres explorar GENESIS tu mismo?</h2>
            <div className="genesis-cta-columns">
              <div className="genesis-cta-text-col">
                <p className="genesis-cta-text">
                  Puedes encontrar instrucciones detalladas sobre cómo ejecutar la aplicación en local, así como el código fuente en los repositorios correspondientes de GitHub.
                </p>
              </div>
              <div className="genesis-cta-buttons">
                <a href="https://github.com/fernandomartin18/TFG-Frontend" target="_blank" rel="noopener noreferrer" className="genesis-cta-btn frontend">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                  Repositorio Frontend &rarr;
                </a>
                <a href="https://github.com/fernandomartin18/TFG-Backend" target="_blank" rel="noopener noreferrer" className="genesis-cta-btn backend">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <polyline points="7 7 10 10 7 13" />
                    <line x1="12" y1="13" x2="16" y2="13" />
                  </svg>
                  Repositorio Backend &rarr;
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
