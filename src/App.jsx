import { useState } from 'react'
import './css/App.css'
import themes from './styles/themes'
import { Routes, Route } from 'react-router-dom'
import LoveStory from './pages/LoveStory.jsx'
import Home from './pages/Home.jsx'

function App() {
  const getPreferredTheme = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  const [theme, setTheme] = useState(getPreferredTheme())

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  // Aplicar tema al body y variables CSS
  document.body.style.color = themes[theme].text
  document.body.style.backgroundImage = themes[theme].gradientBg
  document.body.style.backgroundSize = 'cover'
  document.body.style.backgroundRepeat = 'no-repeat'
  document.body.style.overscrollBehavior = 'none'
  document.body.style.transition = 'background 0.5s, color 0.5s'
  document.documentElement.style.transition = 'background 0.5s, color 0.5s'
  document.documentElement.style.setProperty('--navbar-bg', themes[theme].navbar + 'cc')
  document.documentElement.style.setProperty('--navbar-text', themes[theme].navbarText)
  document.documentElement.style.setProperty('--navbar-shadow', themes[theme].navbarShadow)
  document.documentElement.style.setProperty('--primary', themes[theme].primary)
  document.documentElement.style.setProperty('--foto-shadow', themes[theme].fotoShadow)
  document.documentElement.style.setProperty('--text', themes[theme].text)
  document.documentElement.style.setProperty('--card-shadow', themes[theme].cardShadow)
  document.documentElement.style.setProperty('--card-background', themes[theme].cardBackground)
  document.documentElement.style.setProperty('--foto-sombra-sobre-mi', theme === 'dark' ? '#288d83ff' : themes[theme].primary)

  return (
    <Routes>
      <Route path="/" element={<Home theme={theme} toggleTheme={toggleTheme} />} />
      <Route path="/lovestory" element={<LoveStory />} />
    </Routes>
  )
}

export default App
