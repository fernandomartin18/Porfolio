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

const GENESIS_PRELOAD_IMAGES = [
  genesisBlack,
  genesisWhite,
  registroImg,
  selectorImg,
  chatImg,
  barraCodigosImg,
  visualizadorCodigoImg,
  plantUMLImg,
  editorPlantUMLImg,
  editorDiagramasImg,
  templateImg,
  visorImagenesImg,
  ajustesImg,
]

let genesisImagesPreloaded = false

export function preloadGenesisImages() {
  if (genesisImagesPreloaded) {
    return () => {}
  }

  genesisImagesPreloaded = true
  const links = []

  GENESIS_PRELOAD_IMAGES.forEach((src) => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = src
    document.head.appendChild(link)
    links.push(link)

    const img = new Image()
    img.decoding = 'async'
    img.src = src
  })

  return () => {
    links.forEach((link) => link.remove())
  }
}
