import React from 'react'
import Headings from './layout/Headings'
import MembersCard from './layout/MembersCard'
import kavikumar from '../assets/kavikumar.jpg'
import { FaArrowRight } from "react-icons/fa6";
import Button from './layout/Button';
import { Link } from 'react-scroll'

function Members() {
    return (
        <div className='min-h-screen flex-col items-center md:px-32 px-5 my-10'>
            <Headings title1="Our" title2="Members"></Headings>
            <div className='flex flex-row gap-6 mt-6 overflow-x-auto'>
                <MembersCard img={kavikumar} name='kavikumar' job='Software developer' institution='CIT' event='10,Half Marathon' contact='ckavikumar2k@gmail.com' batch='2020-2024' />
                <MembersCard img={kavikumar} name='kavikumar' job='Software developer' institution='CIT' event='10,Half Marathon' contact='ckavikumar2k@gmail.com' batch='2020-2024' />
                <MembersCard img={kavikumar} name='kavikumar' job='Software developer' institution='CIT' event='10,Half Marathon' contact='ckavikumar2k@gmail.com' batch='2020-2024' />
                <MembersCard img={kavikumar} name='kavikumar' job='Software developer' institution='CIT' event='10,Half Marathon' contact='ckavikumar2k@gmail.com' batch='2020-2024' />
                <MembersCard img={kavikumar} name='kavikumar' job='Software developer' institution='CIT' event='10,Half Marathon' contact='ckavikumar2k@gmail.com' batch='2020-2024' />
                <div className='flex flex-row items-center space-x-5'>
                <Link to='' spy={true} smooth={true} duration={500}>
                    <Button title="SeeMore"></Button>
                </Link>
                <FaArrowRight to=" " className='h-10 w-10 cursor-pointer'/>
                </div>
            </div>
        </div>
    )
}

export default Members
