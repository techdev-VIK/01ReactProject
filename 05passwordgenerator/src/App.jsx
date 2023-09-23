import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)

  return (
    <>
      <h1 className='text-4xl text-center test-white'>Password Generator</h1>
      <form className='margin-4xl text-center'></form>
      <button type='checkbox'></button>
    </>
  )
}

export default App
