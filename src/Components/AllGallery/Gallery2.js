import React from 'react'
import Button from '../layout/Button'

const Gallery2 = () => {
  return (
    <div>
    <form className='w-full md:w-2/5 space-y-5 pt-20'>
                     <div className='flex flex-col gap-3'>
                         <label htmlFor='userName'>
                            Gallery2svs
                         </label>
                         <input className='py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all'
                             type='text'
                             name='userName'
                             id='userName'
                             placeholder='Enter your name'>
                         </input>
                     </div>
                     <div className='flex flex-col gap-3'>
                         <label htmlFor='userEmail'>
                             Your Email
                         </label>
                         <input className='py-3 px-2 rounded-lg  hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all'
                             type='text'
                             name='userEmail'
                             id='userEmail'
                             placeholder='Enter your Email'>
                         </input>
                     </div>
                     <div className='flex flex-col gap-3'>
                         <label htmlFor='userNumber'>
                             Your Number
                         </label>
                         <input className='py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all'
                             type='text'
                             name='userNumber'
                             id='userNumber'
                             placeholder='Enter your number : '>
                         </input>
                     </div>
                     <div className='flex flex-col gap-3'>
                         <label htmlFor='Description'>
                             Your Thoughts / quries
                         </label>
                         <input className='py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all'
                             type='text'
                             name='Description'
                             id='Description'
                             placeholder='Write your thoughts: '>
                         </input>
                     </div>
                     <div className='flex flex-row justify-center'>
                         <Button title='Send Message'>
                         </Button>
                     </div>
                 </form>
     </div>
  )
}

export default Gallery2