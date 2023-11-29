import React from 'react'
import { Link } from 'react-scroll'
import Button from './layout/Button'

function Home() {
  return (
    <div className='min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10 '>
      <div className='md:w-2/4 text-center'>
        <h2 className='text-5xl font-semibold leading-tight'>CISKA</h2>
        <div className='flex justify-center pt-5 pb-5'>
        <img src='assets\Logo.png' className='h-40 w-40 cursor-pointer flex justify-center  outline-yellow-300 md:hidden'></img>
        </div>
        
        <p className='text-gray-800 mt-5 text-start'>
            CISKA youth social trust was founded by Dr.M Veeraseenu
            in 2008 for the well being of students who are unable to 
            pay thier education fee and for the educational institute who
            who didn't have much facility for thier students.
            the members of this trusts includes the students of <a href='cit.edu.in'>COIMBATORE INSTITUTE OF TECHNOLOGY</a>,
            JANSON ENGINEEERING COLLEGE AND TAMILNADU ENGINEERING COLLEGE
        </p>
        <Link to='' spy={true} smooth={true} duration={500}>
           <Button title="see more"/>
        </Link>
      </div>
      <div className='sm:hidden w-full md:w-2/4 '>
        <img src='assets\Logo.png' className='h-40 w-40 cursor-pointer flex justify-center'></img>
      </div>
    </div>
  )
}

export default Home