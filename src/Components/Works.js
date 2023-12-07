import React from 'react'
import Headings from './layout/Headings'
import Button from './layout/Button'
import kavikumar from "../assets/kavikumar.jpg";
import Ganesh from "../assets/Ganesh.jpg"
import WorksCard from './layout/WorksCard'

function Works() {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16'>
    
    <Headings title1="Our" title2="Works"></Headings>

      <div className='flex flex-row gap-5 pt-14 overflow-x-auto'>
        <WorksCard image={kavikumar} title='kavikumar' para='cvbnbgbigbakdfbnxbmgiepitgjkngknfjkadijgbiadpbjadfjibadjfgbkjdfgbkdb'/>
        <WorksCard image={Ganesh} title='kavikumar' para='cvbnbgbigbakdfbnxbmgiepitgjkngknfjkadijgbiadpbjadfjibadjfgbkjdfgbkdb'/>
        <WorksCard image={kavikumar} title='kavikumar' para='cvbnbgbigbakdfbnxbmgiepitgjkngknfjkadijgbiadpbjadfjibadjfgbkjdfgbkdb'/>
        <WorksCard image={Ganesh} title='kavikumar' para='cvbnbgbigbakdfbnxbmgiepitgjkngknfjkadijgbiadpbjadfjibadjfgbkjdfgbkdb'/>
        <WorksCard image={kavikumar} title='kavikumar' para='cvbnbgbigbakdfbnxbmgiepitgjkngknfjkadijgbiadpbjadfjibadjfgbkjdfgbkdb'/>
      </div>   
    </div>
  )
}

export default Works
