import React from 'react'
import Headings from './layout/Headings'
import Button from './layout/Button'
import logo from '../assets/Logo.png'

function ContactUs() {
    return (
        <div className='min-h-screen flex-col items-center justify-center md:px-32 px-5 my-10'>
            <Headings title1='Contact' title2='Us' ></Headings>
            <div className='flex flex-col md:flex-row justify-between w-full'>
                <form className='w-full md:w-2/5 space-y-5 pt-20'>
                    <div className='flex flex-col gap-3'>
                        <label htmlFor='userName'>
                            Your Name
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
                <div className='cursor-pointer w-full md:w-2/4  hidden md:block'>
                    <img src={logo} >
                    </img>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
