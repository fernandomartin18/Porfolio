import React, { useEffect } from 'react'
import { FiMap } from 'react-icons/fi'
import { RiGalleryView2 } from 'react-icons/ri'
import { WiStars } from 'react-icons/wi'
import { MdHistoryEdu, MdOutlineAddBox, MdEdit } from 'react-icons/md'
import { IoIosImages } from 'react-icons/io'
import { IoInformationCircleOutline } from 'react-icons/io5'
import { FaCropSimple } from 'react-icons/fa6'
import { BsFilm } from 'react-icons/bs'
import { FaHistory } from 'react-icons/fa'
import '../css/Lovestory.css'
import crearRecuerdoAbajo from '../assets/crear recuerdo abajo.png'
import crearRecuerdoAdd from '../assets/crear recuerdo añadir foto.png'
import crearRecuerdoArriba from '../assets/crear recuerdo arriba.png'
import editarImagen from '../assets/editar imagen.png'
import editarRecuerdo from '../assets/editar recuerdo.png'
import inicio from '../assets/inicio.png'
import mapa from '../assets/mapa.png'
import peliculasPorVer from '../assets/peliculas por ver.png'
import peliculasVistas from '../assets/peliculas vistas.png'
import verRecuerdoAbajo from '../assets/ver recuerdo abajo.png'
import verRecuerdoArriba from '../assets/ver recuerdo arriba.png'

export default function LoveStory() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1 })

    const sections = document.querySelectorAll('.lovestory-section')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const handleBack = () => {
    globalThis.history.back()
  }

  const sections = [
    { title: 'Galería de recuerdos', text: 'En la parte superior de la pantalla de inicio destaca un contador de días que registra el tiempo transcurrido en la relación junto a los nombres y fotografías de perfil de ambos usuarios. Bajo este encabezado, se despliega una galería de recuerdos organizada cronológicamente. Cada entrada permite visualizar la imagen de portada del recuerdo junto a su título, creando un diario visual colaborativo que facilita el acceso rápido a cada momento special compartido.', img: inicio, icon: RiGalleryView2, reverse: false },
    { title: 'Cada momento, al detalle', text: 'Al seleccionar cualquier recuerdo de la galería, se abre una nueva pantalla donde las imágenes se presentan en un carrusel a pantalla completa para una visualización inmersiva. Justo debajo del contenido visual, la interfaz muestra el nombre y la foto de perfil del miembro de la pareja que realizó la publicación, acompañado del título de la historia. Además, el sistema integra de forma accesible las opciones de edición y eliminación, permitiendo gestionar y actualizar cada recuerdo compartido de manera sencilla.', img: verRecuerdoArriba, icon: WiStars, reverse: true },
    { title: 'El relato de lo vivido', text: 'Tras el contenido visual y los detalles del autor, la interfaz presenta el relato escrito del recuerdo, permitiendo profundizar en la historia que acompaña a las imágenes. Finalmente, al final del scroll, se incluye la ubicación exacta donde transcurrió el momento, geolocalizando cada experiencia para completar el contexto total de la memoria compartida.', img: verRecuerdoAbajo, icon: MdHistoryEdu, reverse: false },
    { title: 'Creación de nuevos recuerdos', text: 'La barra de navegación inferior integra un botón de "Nuevo recuerdo", diseñado para iniciar el proceso de publicación de forma inmediata. Al pulsarlo, el sistema dirige a una interfaz de carga donde es posible añadir múltiples imágenes desde el dispositivo. Antes de finalizar la publicación, el usuario cuenta con total flexibilidad para editar cada archivo o retirar imágenes específicas del carrusel, garantizando que el recuerdo final refleje exactamente la experiencia compartida.', img: crearRecuerdoAdd, icon: MdOutlineAddBox, reverse: true },
    { title: 'Control de la narrativa', text: 'Dentro de la interfaz de creación y edición, el sistema permite reordenar las imágenes del carrusel con solo arrastrarlas, facilitando el diseño de la secuencia perfecta para cada historia. Asimismo, se ofrece la libertad de seleccionar la imagen de portada que representará el recuerdo en la galería principal. Aunque la aplicación asigna por defecto la primera foto del carrusel como miniatura, el usuario puede elegir manualmente cualquier otra imagen para que sea la cara visible del recuerdo en el inicio.', img: crearRecuerdoArriba, icon: IoIosImages, reverse: false },
    { title: 'Detalles del recuerdo', text: 'Bajo el carrusel de imágenes, la interfaz de creación dispone de una serie de campos diseñados para completar la información del momento. En primer lugar, se encuentran los espacios para escribir el título y redactar el relato detallado de la historia. A continuación, el usuario cuenta con un selector de autoría para indicar quién realiza la publicación, seguido de un selector de fecha preciso. Por último, se incluye un módulo de ubicación que ofrece la flexibilidad de utilizar la posición actual mediante GPS o buscar manualmente un lugar específico para situar el recuerdo en el mapa.', img: crearRecuerdoAbajo, icon: IoInformationCircleOutline, reverse: true },
    { title: 'Ajuste de imágenes', text: 'El proceso de creación incluye herramientas de edición integradas para garantizar que cada fotografía luzca perfecta. Antes de publicar, el usuario puede acceder a funciones para recortar y girar las imágenes, permitiendo ajustar el encuadre o corregir la orientación de los archivos directamente desde la aplicación, sin necesidad de recurrir a editores externos.', img: editarImagen, icon: FaCropSimple, reverse: false },
    { title: 'Refinad vuestros recuerdos', text: 'Si un recuerdo necesita ajustes, la opción de editar permite acceder a una interfaz equivalente a la de creación para modificar cualquier detalle. En esta pantalla, es posible añadir, eliminar o reordenar las imágenes del carrusel, así como actualizar el título, la descripción, la fecha y la ubicación. No obstante, para mantener la integridad del registro histórico, el sistema mantiene fijo al miembro que realizó la publicación, asegurando que siempre quede constancia de quién fue el autor original del recuerdo.', img: editarRecuerdo, icon: MdEdit, reverse: true },
    { title: 'Vuestro mapa de aventuras.', text: 'La barra de navegación incluye un acceso directo a un mapa interactivo que geolocaliza visualmente cada momento compartido. Para mantener la claridad visual, el sistema emplea una función de agrupación inteligente: cuando existen varios recuerdos en una misma zona, se muestran en un único punto con un indicador numérico. Al ampliar el zoom, los puntos se expanden para revelar la foto de portada de cada recuerdo individual. Finalmente, al interactuar con cualquiera de estas imágenes, la aplicación redirige directamente a la visualización completa del contenido para revivir la experiencia.', img: mapa, icon: FiMap, reverse: false },
    { title: 'Cartelera personalizada', text: 'La barra de navegación incorpora un apartado dedicado a la gestión de películas pendientes, ideal para organizar vuestras sesiones de cine en casa. A través de un buscador integrado, es posible localizar cualquier título y añadirlo a una lista visual que incluye la portada oficial de cada filme. Para mantener el listado actualizado, cada entrada dispone de controles directos que permiten marcar la película como vista o retirarla definitivamente de la selección, facilitando la elección del próximo estreno para disfrutar en pareja.', img: peliculasPorVer, icon: BsFilm, reverse: true },
    { title: 'Historial cinematográfico', text: 'Mediante un sencillo gesto de deslizar a la derecha, la interfaz permite alternar a la pestaña de películas vistas, donde se almacena un registro cronológico de todos los títulos ya disfrutados. Esta sección actúa como un archivo personal de vuestras sesiones de cine, manteniendo la flexibilidad de gestión gracias a un botón de eliminación individual. Así, el historial se mantiene siempre a vuestro gusto, permitiendo descartar cualquier entrada que no se desee conservar en la lista definitiva.', img: peliculasVistas, icon: FaHistory, reverse: false },
  ]

  return (
    <>
      {/* Botón Atrás fijo arriba a la izquierda */}
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
          <path d="M13 16L7 10L13 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Atrás
      </button>

      <div className="lovestory-container">
        <header className="lovestory-header">
          <h1 className="lovestory-title">LoveStory</h1>
          <p className="lovestory-subtitle">
            Vuestra historia de amor merece algo más que un carrete olvidado. Cread vuestro refugio privado para revivir cada momento juntos.
          </p>
        </header>

        <main>
          {sections.map((section) => (
            <section key={section.title} className={`lovestory-section ${section.reverse ? 'reverse' : ''}`}>
              <div className="lovestory-content">
                <div className="lovestory-title-row">
                  <section.icon className="lovestory-title-icon" aria-hidden="true" />
                  <h2 className="lovestory-section-title">{section.title}</h2>
                </div>
                <p className="lovestory-text">{section.text}</p>
              </div>
              <div className="lovestory-image-container">
              <img
                src={section.img}
                alt={section.title}
                className="lovestory-img"
                loading="lazy"
              />
              </div>
            </section>
          ))}
        </main>
      </div>
    </>
  )
}
