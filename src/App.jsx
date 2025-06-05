import { useState } from 'react'
import hotspots from './assets/img/hotspots.jpg'
import hotposts2 from './assets/img/hotposts2.jpg'
import './App.css'

function App() {
  const [message, setMessage] = useState('')

  const handleImageClick = (imgId) => {
    if (imgId === 1) {
      setMessage('Šī vieta priekš manis ir mīļākā, jo viņa man asociējas ar stundu beigām un garo starpbrīdi.')
    } else if (imgId === 2) {
      setMessage('šī vieta man ir mīļākā jo šēit mēs programmējam:)')
    }
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
          alt="Hotspots 1"
          width="400"
          height="480"
          onClick={() => handleImageClick(1)}
          className="img"
          loading="lazy"
        />
        <img
          src={hotposts2}
          alt="Hotposts 2"
          width="400"
          height="480"
          onClick={() => handleImageClick(2)}
          className="img"
          loading="lazy"
          style={{ marginLeft: '40px' }}
        />
      </main>
    </>
  )
}

export default App
