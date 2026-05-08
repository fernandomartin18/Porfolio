import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import '../css/Catture.css'
import catture1 from '../assets/catture1.jpg'
import catture2 from '../assets/catture2.jpg'
import catture3 from '../assets/catture3.jpg'
import catture4 from '../assets/catture4.jpg'
import catture5 from '../assets/catture5.jpg'
import catture6 from '../assets/catture6.jpg'
import { FaCamera } from "react-icons/fa";
import { MdPublish } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { MdChatBubble } from "react-icons/md";
import { ImProfile } from "react-icons/im";

export default function Catture() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1 })

    const sections = document.querySelectorAll('.catture-section')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const sections = [
    { 
      title: 'Captura a gatos de la calle', 
      text: 'Haz fotos a los gatos que encuentres por la calle, en parques, plazas o cualquier rincón de tu ciudad. Convierte cada paseo en una emocionante búsqueda del tesoro donde el premio es la mirada de un felino. Descubre nuevos gatos, inmortaliza sus personalidades únicas y documenta la vida secreta de los habitantes más ágiles de tu vecindario.', 
      img: catture1, 
      icon: FaCamera, 
      reverse: false 
    },
    { 
      title: 'Nombra y publica la captura', 
      text: 'Ponle un nombre divertido o especial a cada gato que captures y comparte la foto con toda la comunidad. Publica tus descubrimientos para que otros usuarios puedan verlos, reaccionar y conocer a tus nuevos amigos callejeros. Cada publicación es una oportunidad para contar la historia del gato que acabas de conocer y sumar un nuevo integrante al mapa felino.', 
      img: catture2, 
      icon: MdPublish, 
      reverse: true 
    },
    { 
      title: 'Conecta con tus amigos', 
      text: 'Sigue a tus amigos y conecta con otros amantes de los gatos de todo el mundo. Descubre sus perfiles, mira sus últimas capturas y comparte la experiencia de explorar la ciudad en busca de los gatos más adorables y curiosos. Crea una red social dedicada exclusivamente a la pasión felina donde la curiosidad nunca se acaba.', 
      img: catture3, 
      icon: FaUserFriends, 
      reverse: false 
    },
    { 
      title: 'Mira sus capturas', 
      text: 'Explora las capturas que publican otros usuarios y descubre gatos de diferentes lugares, desde rincones locales hasta ciudades lejanas. Inspírate con nuevas fotos, encuentra rincones interesantes que podrías visitar y disfruta viendo la creatividad de toda la comunidad a través de sus lentes. ¡Nunca sabes qué raza o color de pelaje te sorprenderá hoy!', 
      img: catture4, 
      icon: FaEye, 
      reverse: true 
    },
    { 
      title: 'Comenta en ellas', 
      text: 'Deja comentarios en las publicaciones, reacciona a las mejores fotos y participa activamente en las conversaciones de la comunidad. Comparte opiniones, anécdotas sobre tus propios encuentros o simplemente demuestra cuánto te ha gustado cada captura. Tu interacción ayuda a que los rescatadores y fotógrafos se sientan valorados y unidos.', 
      img: catture5, 
      icon: MdChatBubble, 
      reverse: false 
    },
    { 
      title: 'Recuerda a tus capturas', 
      text: 'Guarda todas tus capturas favoritas en tu perfil y crea un historial detallado de todos los gatos que has encontrado en tu camino. Revive tus mejores momentos, observa cómo ha mejorado tu técnica fotográfica comparando tus primeras capturas con las más recientes y construye tu propia bitácora de una gran aventura felina sin fin.', 
      img: catture6, 
      icon: ImProfile, 
      reverse: true 
    },
  ];

  return (
    <>
      <Helmet>
        <title>Catture | Fernando Martín</title>
        <meta
          name="description"
          content="Catture. Aplicación móvil que sirve de red social para compartir fotos de gatos. Desarrollada por Fernando Martín."
        />
        <link
          rel="canonical"
          href="https://fernandomartin.tech/catture"
        />
        <meta property="og:title" content="Catture | Fernando Martín" />
        <meta
          property="og:description"
          content="Aplicación móvil que sirve de red social para compartir fotos de gatos."
        />
        <meta
          property="og:url"
          content="https://fernandomartin.tech/catture"
        />
        <meta
          property="og:image"
          content="https://fernandomartin.tech/assets/catture--INHWcfa.jpg"
        />
      </Helmet>
      <div className="catture-container">
        <header className="catture-header">
          <h1 className="catture-title">Catture</h1>
          <h2 className="catture-tagline">(Nueva versión en desarrollo)</h2>
          <p className="catture-subtitle">
            Aplicación móvil que sirve de red social para compartir con tus seguidores fotos de los gatos que has encontrado por la calle.
          </p>
        </header>

        <main>
          {sections.map((section) => (
            <section key={section.title} className={`catture-section ${section.reverse ? 'reverse' : ''}`}>
              <div className="catture-content">
                <div className="catture-title-row">
                  <section.icon className="catture-title-icon" aria-hidden="true" />
                  <h2 className="catture-section-title">{section.title}</h2>
                </div>
                <p className="catture-text">{section.text}</p>
              </div>
              <div className="catture-image-container">
              <img
                src={section.img}
                alt={section.title}
                className="catture-img"
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
