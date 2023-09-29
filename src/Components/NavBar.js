 import React from 'react'
 
 const NavBar = () => {
   return (
     <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex bg-white py-4'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
        <span className='text-3xl text-indigo-600 mr-1 pt-2'>
           <img name="logo" src='/assets/Logo.png' className='w-14 h-auto'/>
        </span>
        CISKA
      </div>
      </div>
    </div>
   )
 }
 
 export default NavBar
 