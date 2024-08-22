import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DaisyNav></DaisyNav>
      <h1>Vite + React</h1>
      <span className="loading loading-ring loading-xs"></span>
      <span className="loading loading-ring loading-sm"></span>
      <span className="loading loading-ring loading-md"></span>
      <span className="loading loading-ring loading-lg"></span>
    </>
  )
}

export default App
