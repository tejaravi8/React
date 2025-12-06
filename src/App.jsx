import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{color:"yello"}}>
        hello world
        <p>react is a user interface</p>
      </div>
    </>
  )
}

export default App
