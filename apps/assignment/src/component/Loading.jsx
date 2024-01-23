import React from 'react'
import './Loading.css'
import {  Dialog, DialogDescription } from '@radix-ui/react-dialog'
import { Button } from '@/components/ui/button'

const Loading = () => {
  return (
    <div className='grid place-items-center h-screen w-screen'>
    <div>
   
      
 
     <Dialog>
     <DialogDescription className='h-[350px] w-[250px] bg-stone-50 rounded-md py-3 px-2'>

     <div className='flex flex-col justify-between mx-3' >
     <h3 className='skeleton-animation h-[15px] w-[200px] rounded-full bg-slate-400' ></h3>
   <div  className='flex flex-row items-center justify-start gap-4 mt-4'>
  <div>
   <h3 className='skeleton-animation h-[40px] w-[40px] rounded-full bg-slate-400' ></h3>

  </div>
  <div className='flex flex-col gap-3'>
  <h3 className='skeleton-animation h-[10px] w-[120px] rounded-full bg-slate-400' ></h3>
  <h3 className='skeleton-animation h-[10px] w-[80px] rounded-full bg-slate-400' ></h3>

  </div>
  

</div>
<div  className='flex flex-row items-center justify-start gap-4 mt-4'>
  <div>
   <h3 className='skeleton-animation h-[40px] w-[40px] rounded-full bg-slate-400' ></h3>

  </div>
  <div className='flex flex-col gap-3'>
  <h3 className='skeleton-animation h-[10px] w-[120px] rounded-full bg-slate-400' ></h3>
  <h3 className='skeleton-animation h-[10px] w-[80px] rounded-full bg-slate-400' ></h3>

  </div>
  

</div>
<div  className='flex flex-row items-center justify-start gap-4 mt-4'>
  <div>
   <h3 className='skeleton-animation h-[40px] w-[40px] rounded-full bg-slate-400' ></h3>

  </div>
  <div className='flex flex-col gap-3'>
  <h3 className='skeleton-animation h-[10px] w-[120px] rounded-full bg-slate-400' ></h3>
  <h3 className='skeleton-animation h-[10px] w-[80px] rounded-full bg-slate-400' ></h3>

  </div>
  

</div>
<div  className='flex flex-row items-center justify-start gap-4 mt-4'>
  <div>
   <h3 className='skeleton-animation h-[40px] w-[40px] rounded-full bg-slate-400' ></h3>

  </div>
  <div className='flex flex-col gap-3'>
  <h3 className='skeleton-animation h-[10px] w-[120px] rounded-full bg-slate-400' ></h3>
  <h3 className='skeleton-animation h-[10px] w-[80px] rounded-full bg-slate-400' ></h3>

  </div>
  

</div>
<div  className='flex flex-row items-center justify-start gap-4 mt-4'>
  <div>
   <h3 className='skeleton-animation h-[40px] w-[40px] rounded-full bg-slate-400' ></h3>

  </div>
  <div className='flex flex-col gap-3'>
  <h3 className='skeleton-animation h-[10px] w-[120px] rounded-full bg-slate-400' ></h3>
  <h3 className='skeleton-animation h-[10px] w-[80px] rounded-full bg-slate-400' ></h3>

  </div>
  

</div>
    
      
   
     <div className='w-100% mt-1'>
     <h3 className='skeleton-animation h-[25px] w-[200px] rounded-full bg-slate-400' ></h3>
     </div>


  </div>
     </DialogDescription>
  

</Dialog>


     </div>
      </div>
  )
}

export default Loading