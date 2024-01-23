
  
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@radix-ui/react-dialog'
import React from 'react'
import svg from '../assets/react.svg'
import './Modal.css'
import { Button } from '@/components/ui/button'

const Modal = ({setOpen, data}) => {
  return (
    <>
  
     
    <div className='grid place-items-center h-screen w-screen' onClick={() =>setOpen(false)}>
    <div>
   
     
 
     <Dialog>
     <DialogDescription className='min-h-[350px] min-w-[250px] bg-stone-50 rounded-md py-5 px-2 boxShadow'>

     <div className='flex flex-col justify-between gap-3 mx-3' >
      <h2 className=' font-sans font-medium antialiased '>24 birthdays today</h2>
      <div className='flex flex-col gap-3'>
    {data?.users?.slice(0,5).map((e)=>{
  return(<div key={e.id} className='flex flex-row h-6 items-center justify-start gap-2 mt-4'>
  <div>
   <img src={e.image} alt="" className='h-[40px] rounded-full ' />

  </div>
  <div className='flex flex-col'>
  <p className=' text-sm font-sans font-medium antialiased '>{e.firstName} {e.lastName}</p>
 <small>{e.age} years </small>
  </div>
  

</div>)
    })  
}
</div>
    
      
   
     <div className='w-100% mt-4'>
      <Button className='w-full bg-pink-gradient py-2  rounded-md font-medium text-white'>View all</Button>
     </div>


  </div>
     </DialogDescription>
  

</Dialog>


     </div>
      </div>
      </>
  )
}

export default Modal