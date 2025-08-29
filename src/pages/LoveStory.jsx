import React from 'react'

export default function LoveStory() {
  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '2rem' }}>
      <h1>LoveStory</h1>
      <img src="/lovestory.jpg" alt="LoveStory" style={{ width: '100%', borderRadius: '1rem', marginBottom: '1.5rem' }} />
      <p>
        Aplicación móvil en la que cada miembro de una pareja puede crear y ver recuerdos (un conjunto de fotos con descripción).
      </p>
      <ul>
        <li>Frontend: React</li>
        <li>Backend: Firebase</li>
        <li>Almacenamiento de imágenes: Cloudinary</li>
      </ul>
      <p>
        <b>Nota:</b> Esta es una demo de la página interna para el proyecto LoveStory.
      </p>
    </div>
  )
}
