import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loading from './component/Loading'
import Modal from './component/Modal'
import { useQuery } from 'react-query'



async function getTodos(){
  try {
    const data = await fetch('https://dummyjson.com/users')
    const res = await data.json()
    return res
    
    
  } catch (error) {
    
  }
}


function App() {
  const {data, isLoading} = useQuery({ queryKey: ['todos'], queryFn: getTodos })
 

  const [open, setOpen]= useState(true)
  console.log(open);

  return (
    <>
      <div className='bg-pink-primary h-screen w-screen overflow-hidden'>
      {isLoading ? <Loading/>: open && <Modal data={data} setOpen={setOpen}/>}

   
    
     </div>
    </>
  )
}

export default App
