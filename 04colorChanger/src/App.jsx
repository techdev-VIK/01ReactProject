import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState()

  return (
      <div className= "w-full h-screen duration-200" style = {{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white py-2 rounded-xl'>
            <button 
            onClick={()=> setColor("red")}
            className='outline-none px-4 py-1 rounded-full' style = {{backgroundColor: "red"}}>Red</button>
            <button onClick={()=> setColor("green")}className='outline-none px-4 py-1 rounded-full' style = {{backgroundColor: "green"}}>green</button>
            <button onClick={()=> setColor("olive")}className='outline-none px-4 py-1 rounded-full' style = {{backgroundColor: "olive"}}>olive</button>
            <button onClick={()=> setColor("yellow")}className='outline-none px-4 py-1 rounded-full' style = {{backgroundColor: "yellow"}}>Yellow</button>
            <button onClick={()=> setColor("pink")}className='outline-none px-4 py-1 rounded-full' style = {{backgroundColor: "pink"}}>pink</button>
            <button onClick={()=> setColor("gray")}className='outline-none px-4 py-1 rounded-full' style = {{backgroundColor: "gray"}}>gray</button>
            <button onClick={()=> setColor("purple")}className='outline-none px-4 py-1 rounded-full' style = {{backgroundColor: "purple"}}>purple</button>
          </div>
        </div>
      </div>
  )
}

export default App
