import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter]= useState(0)
  //let counter = 0

  const addValue = () => {
    // console.log("value added", counter);
    //counter += 1;
    if(counter<20){
    setCounter(counter+1)

  }
  }
  const reduceValue =() => {
    if(counter>0){
    counter = counter - 1
    setCounter(counter)
  }
}


  return (
    <>
      <h1> React counter from 0 to 20</h1>
      <h2>counter value: {counter}</h2>
      <p>It is counter {counter}</p>
      <button onClick={addValue}>Add value {counter}</button>
      <br/>
      <button onClick={reduceValue}>Reduce Value {counter}</button>
    </>
  )
}


export default App
