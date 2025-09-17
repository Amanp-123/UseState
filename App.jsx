import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const[display,setDisplay]=useState(true)

  return (
    <>
     <h1>
       Toggle in React Js
     </h1>

     {
      //  If else vali Stetmant solve
       display? <h1>Aman</h1>:null

     }


     <button onClick={()=>setDisplay(!display)}>Toggle </button>
     
    </>
  )
}

export default App
