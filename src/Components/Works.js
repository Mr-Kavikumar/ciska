import React from 'react'
import Headings from './layout/Headings'
import Button from './layout/Button'
import kavikumar from "../assets/kavikumar.jpg";
import Ganesh from "../assets/Ganesh.jpg"
import WorksCard from './layout/WorksCard'
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-scroll";

function Works() {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5'>
    <div className='flex flex-col items-center lg:flex-row justify-between'>
    <Headings title1="Our" title2="Works"></Headings>
    <div className="flex flex-row items-center space-x-5 pr-5">
          <Link to="" spy={true} smooth={true} duration={500} className="relative">
            <Button title="See All Works"></Button>
            <FaArrowRight size={16} className="cursor-pointer absolute top-[30px] right-2" />
          </Link>
        </div>
    </div>
      <div className='flex flex-row gap-5 pt-14 overflow-x-auto'>
        <WorksCard image={kavikumar} title='kavikumar' para='cvbnbgbigbakdfbnxbmgiepitgjkngknfjkadijgbiadpbjadfjibadjfgbkjdfgbkdb'/>
        <WorksCard image={Ganesh} title='kavikumar' para='cvbnbgbigbakdfbnxbmgiepitgjkngknfjkadijgbiadpbjadfjibadjfgbkjdfgbkdb'/>
        <WorksCard image={kavikumar} title='kavikumar' para='cvbnbgbigbakdfbnxbmgiepitgjkngknfjkadijgbiadpbjadfjibadjfgbkjdfgbkdb'/>
      </div>   
    </div>
  )
}

export default Works
