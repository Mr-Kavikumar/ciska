import React from 'react'
import {Link as Link2} from 'react-router-dom'
import Button from './layout/Button'
import logo from '../assets/Logo.png'


function Home() {
    return (
        <div className='min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-32 '>
            <div className='md:w-2/4 text-center'>
                <h2 className='text-5xl font-semibold leading-tight'>CISKA</h2>
                <div className='flex justify-center pt-5 pb-5'>
                    <img src={logo} className='h-40 w-40 cursor-pointer flex justify-center md:hidden'></img>
                </div>

                <p className='text-gray-800 mt-5 text-start'>
                    CISKA youth social trust was founded by Dr.M Veeraseenu
                    in 2008 for the well being of students who are unable to
                    pay thier education fee and for the educational institute who
                    who didn't have much facility for thier students.
                    the members of this trusts includes the students of <a href='https://www.cit.edu.in/' className='text-blue-800'>COIMBATORE INSTITUTE OF TECHNOLOGY</a>,
                    JANSON ENGINEEERING COLLEGE AND TAMILNADU ENGINEERING COLLEGE
                </p>
                <Link2 to='./HomeExtended' spy={true} smooth={true} duration={500}>
                    <Button title="see more" />
                </Link2>
            </div>
            <div className='w-full md:w-2/6 hidden md:block'>
                <img src={logo} className='cursor-pointer flex justify-center'></img>
            </div>
        </div>
    )
}

export default Home