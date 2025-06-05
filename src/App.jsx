import { useState } from 'react'
import hotspots from './assets/img/hotspots.jpg'
import './App.css'

function App() {
  const [message, setMessage] = useState('')

  const handleImageClick = () => {
    setMessage('Šī vieta priekš manis ir mīļākā, jo viņa man asociējas ar stundu beigām un garo starpbrīdi.')
  }

  const closeMessage = () => {
    setMessage('')
  }

  return (
    <>
      <header className="header">
        Mana Mīļākā Vietā
      </header>

      {message && (
        <div className="message-box show">
          <button className="close-button" onClick={closeMessage}>
            ×
          </button>
          {message}
        </div>
      )}

      <main className="container">
        <img
          src={hotspots}
          alt="Hotspots"
          width="400"
          height="480"
          onClick={handleImageClick}
          className="img"
          loading="lazy"
        />
      </main>
    </>
  )
}

export default App
