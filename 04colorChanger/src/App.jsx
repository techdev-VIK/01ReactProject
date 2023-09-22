import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("blue")

  return (
      <div className= "w-full h-screen duration-200" style = {{backgroundColor: color}}></div>
  )
}

export default App
