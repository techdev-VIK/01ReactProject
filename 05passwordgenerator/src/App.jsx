import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass=""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*"

   for (let i = 1; i < length; i++) {
    let char = Math.floor(Math.random() * str.length + 1)
    pass += str.charAt(char)
   
  }

  setPassword(pass)

  },[length, numAllowed, charAllowed, setPassword])

  const copyPassToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,40)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  },[length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div >
        <h3 className='text-white text-center'>Password Generator</h3>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type = "text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwordRef}>
          </input>

          <button 
          onClick={copyPassToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>


        </div>
        <div className='flex text-sm gap-x-6'>
          <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max = {24} value={length} className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}/>
          
          <label>Length : {length}</label>

          </div>
          <div className='flex items-center gap-x-1'>
           <input
           type= "checkbox"
           defaultChecked = {numAllowed}
           id="numberInput"
           onChange={() => {
            setNumAllowed((prev)=> !prev);
           }}>
           </input>  
           <label htmlFor="numberInput">Numbers</label>

          </div>
          <div className='flex items-center gap-x-2'>
           <input
           type= "checkbox"
           defaultChecked = {charAllowed}
           id="charInput"
           onChange={() => {
            setCharAllowed((prev)=> !prev);
           }}>
           </input>  
           <label htmlFor="charInput">Special Chars</label>
           
          </div>
        </div>
      </div>
    </>
  )
}

export default App




// className='w-full max-w-md mx-auto shadow-md rounded-lg px-6 my-15 text-orange-500 bg-gray-700' 
// use this class for first div which surrounds everything - IF NEEDED