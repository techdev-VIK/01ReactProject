import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind CSS</h1>

      <Card shoebrand= "Nike"/>
      <Card shoebrand= "Adidas" src = "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWRpZGFzJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60"/>

    </>
  )
}

export default App
