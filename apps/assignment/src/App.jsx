import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import Loading from './component/Loading'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-pink-500 h-screen w-screen overflow-hidden'>
      <Loading/>
    
     </div>
    </>
  )
}

export default App
