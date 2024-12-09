
import './App.css'
import { useState } from 'react'

function App() {

  let [counter,setcounter]=useState(0)

const addvalue=()=>{
  if (counter<20) {
    setcounter(counter+1)
  }

}

const removevalue=()=>{
  if (counter>0) {
    setcounter(counter-1)
  }
}

  return (
    <>
      <p>Rajesh Counter</p>
      <h3>Counter value : {counter}</h3>
      <button
      onClick={
        addvalue
      }
      >Add Value</button>
      <br/>
      <button
      onClick={
        removevalue
      }
      >Remove Value</button>
    </>
  )
}

export default App
