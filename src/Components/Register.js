import React from 'react'
import { Link } from 'react-scroll'
import Button from './layout/Button'
import Headings from './layout/Headings'
import logo from '../assets/Logo.png'

function Register() {
    return (
        <div className='md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14'>
            <div className='cursor-pointer w-full md:w-2/6  hidden md:block'>
                <img src={logo}>
                </img>
            </div>
            <div className='w-full md:w-2/4 text-center space-y-2'>
            <Headings title1="Register" title2="Now">

            </Headings>
                <p>
                    It appears to be a line of code written in JSX, likely part of a React.js
                    application or a similar JavaScript framework. Let's break down the code:
                    Make sure to list them in reverse order as compared to min-width breakpoints so that they override each other as expected.
                    You can even create breakpoints with both min-width and max-width definitions if necessary, for example:
                </p>
                <Link to='' spy={true} smooth={true} duration={500}>
                    <Button title="Register"></Button>
                </Link>
            </div>
            <div className='cursor-pointer h-40 w-40 flex justify-center  md:w-2/5 md:hidden'>
                <img src={logo}>
                </img>
            </div>
        </div>
    )
}

export default Register
