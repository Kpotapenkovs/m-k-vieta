import { useState } from 'react'
import hotspots from './assets/img/hotspots.jpg'
import './App.css'

function App() {
  const [text, setText] = useState()

  const handleImageClick = () => {
    setText('šī vieta priekš manis ir mīļākā jo viņa man asociējas ar stundu beigām un garo starpbrīdi');
  };

  return (
    <>
      <div>

          <img src={hotspots} className="img" alt="img"  width="500" height="600"  onClick={handleImageClick}/>
  <p>{text}</p>
      </div>
    </>
  )
}

export default App
