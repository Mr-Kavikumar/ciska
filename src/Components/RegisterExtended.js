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
        <div className='min-h-screen bg-gradient-to-br from-yellow-300 to-yellow-100'>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
                <div>
                    <img src={Poster}></img>
                </div>
                <div>
                    <form>
                        <Headings title1='Register' title2='Now' />
                        <div>
                            <label>
                                Name:
                            </label>
                            <input type='text'>
                            </input>
                        </div>
                        <div>
                            <label>
                                Contact Number:
                            </label>
                            <input type='number'>
                            </input>
                        </div>
                        <div>
                            <label>
                                DOB:
                            </label>
                            <input type='Date'>
                            </input>
                        </div>
                        <div>
                            <label>
                                Age:
                            </label>
                            <input type='text'>
                            </input>
                        </div>
                        <div>
                            <label>
                                Gender:
                            </label>
                            <select onChange={handleChange} label='Select Gender'>
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
                        <div>
                            <label>
                                Category:
                            </label>
                            <select onChange={handleChange} label='Select Category'>
                                <option value='10K'>
                                    10K
                                </option>
                                <option value='5K'>
                                    5K
                                </option>
                            </select>
                        </div>
                        <div>
                            <label>
                                T-Shirt Size:
                            </label>
                            <select onChange={handleChange} label='Select T-Shirt Size'>
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
                        <div>
                            <label>
                                Blood Group:
                            </label>
                            <select onChange={handleChange} label='Select Blood Group'>
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
