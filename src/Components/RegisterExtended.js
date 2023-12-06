import React, { useState } from 'react';
import Poster from '../assets/Poster.png'
import Headings from './layout/Headings';
import  Button  from './layout/Button';
import { Link } from 'react-router-dom';



function RegisterExtended() {
    const [temp, setTemp] = useState();

    const handleChange = (value) => {
        setTemp(value)
    };
    return (
        <div className='min-h-screen bg-gradient-to-br from-yellow-300 to-yellow-100 h-auto  w-full'>
            <div className='flex flex-col gap-5'>
                <div className='w-[100%]'>
                    <img className='object-cover md:h-full' src={Poster}></img>
                </div>
                <div className='flex flex-col justify-center mx-4 my-4'>
                    <form className='max-w-[400px] w-full mx-auto bg-purple-300 p-8 px-8 rounded-lg'>
                        <Headings title1='Register' title2='Now' />
                        <div className='flex flex-col text-gray-600 py-2'>
                            <label>
                                Name:
                            </label>
                            <input className='rounded-lg bg-gray-200 mt-2 p-2 focus-borde-blue focus:bg-gray-400 focus:outline-none' type='text'>
                            </input>
                        </div>
                        <div className='flex flex-col text-gray-600 py-2'>
                            <label>
                                Contact Number:
                            </label>
                            <input className='rounded-lg bg-gray-200 mt-2 p-2 focus-borde-blue focus:bg-gray-400 focus:outline-none' type='number'>
                            </input>
                        </div>
                        <div className='flex flex-col text-gray-600 py-2'>
                            <label>
                                DOB:
                            </label>
                            <input className='rounded-lg bg-gray-200 mt-2 p-2 focus-borde-blue focus:bg-gray-400 focus:outline-none' type='Date'>
                            </input>
                        </div>
                        <div className='flex flex-col text-gray-600 py-2'>
                            <label>
                                Age:
                            </label>
                            <input className='rounded-lg bg-gray-200 mt-2 p-2 focus-borde-blue focus:bg-gray-400 focus:outline-none' type='text'>
                            </input>
                        </div>
                        <div className='flex flex-col text-gray-600 py-2'>
                            <label>
                                Gender:
                            </label>
                            <select className='rounded-lg bg-gray-200 mt-2 p-2 focus-borde-blue focus:bg-gray-400 focus:outline-none' onChange={handleChange} label='Select Gender'>
                                <option value='Male'>
                                    male
                                </option>
                                <option value='Female'>
                                    Female
                                </option>
                                <option value='Non-Binary'>
                                    Non-Binary
                                </option>
                            </select>
                        </div>
                        <div className='flex flex-col text-gray-600 py-2'>
                            <label>
                                Category:
                            </label>
                            <select className='rounded-lg bg-gray-200 mt-2 p-2 focus-borde-blue focus:bg-gray-400 focus:outline-none' onChange={handleChange} label='Select Category'>
                                <option value='10K'>
                                    10K
                                </option>
                                <option value='5K'>
                                    5K
                                </option>
                            </select>
                        </div>
                        <div className='flex flex-col text-gray-600 py-2'>
                            <label>
                                T-Shirt Size:
                            </label>
                            <select className='rounded-lg bg-gray-200 mt-2 p-2 focus-borde-blue focus:bg-gray-400 focus:outline-none' onChange={handleChange} label='Select T-Shirt Size'>
                                <option value='XXL'>
                                    XXL
                                </option>
                                <option value='XL'>
                                    XL
                                </option>
                                <option value='L'>
                                    L
                                </option>
                                <option value='M'>
                                    M
                                </option>
                                <option value='S'>
                                    S
                                </option>
                                <option value='XS'>
                                    XS
                                </option>
                            </select>
                        </div>
                        <div className='flex flex-col text-gray-600 py-2'>
                            <label>
                                Blood Group:
                            </label>
                            <select className='rounded-lg bg-gray-200 mt-2 p-2 focus-borde-blue focus:bg-gray-400 focus:outline-none' onChange={handleChange} label='Select Blood Group'>
                                <option value='A+'>
                                    A+
                                </option>
                                <option value='A-'>
                                    A-
                                </option>
                                <option value='B+'>
                                       B+
                                </option>
                                <option value='AB+'>
                                 AB+
                                </option>
                                <option value='AB-'>
                                    AB-
                                </option>
                                <option value='O+'>
                                     O+
                                </option>
                                <option value='O-'>
                                     O-
                                </option>
                        </select>
                        </div>
                        <Link to='./RegisterExtended' spy={true} smooth={true} duration={500}>
                            <Button title="Register"></Button>
                         </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterExtended
