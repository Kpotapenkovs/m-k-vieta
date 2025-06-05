import { useState } from 'react'
import hotspots from './assets/img/hotspots.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

          <img src={hotspots} className="img" alt="img"  width="500" height="600"/>
        <p>šī vieta priekš manis ir mīļākā jo viņa man asociējas ar stundu beigām un garo starpbrīdi</p>
      </div>
    </>
  )
}

export default App
