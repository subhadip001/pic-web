import React from 'react'
import home from "../assets/images/home.png"
import iitrLogo from "../assets/images/iitrLogo.png"
import logo from "../assets/logo.png"
import { NavLink } from 'react-router-dom'
import Dropdown from './Dropdown'
const Header = () => {
    return (
        <>
            <div className='home relative mb-12'>
                <div className=' absolute  w-screen h-screen top-0 bgeffect z-0 '>
                    <div className=' w-4/5 m-auto'>
                        <div className='flex justify-between items-center'>
                            <img src={logo} width="200px" height={'53px'} alt=" pic logo" />
                            <div className='flex justify-center items-center w-80 h-20 '>
                              <img src={iitrLogo} width={'53px'} alt="iitr logo" /> 
                              <div className=' whitespace-nowrap ' >
                                <p className=' text-white text-justify'>भारतीय प्रौद्योगिकी संस्थान रुड़की</p>
                                <p className=' text-white text-justify text-xs'>Indian Institute of Technology Roorkee</p>
                                </div> 
                            </div>
                            
                        </div>
                        <hr/>
                        <div className=' text-gray-50 mt-2 flex justify-between'>
                            
                            <NavLink to="#">Home</NavLink>
                            <Dropdown/>
                            <NavLink to="#">Forms and Procedures</NavLink>
                            <NavLink to="#">Academics</NavLink>
                            <NavLink to="#">Our Recruiters</NavLink>
                            <NavLink to="#">Facilities</NavLink>
                            <NavLink to="#">Contact Us</NavLink>

                        </div>
                    </div>
                    <div className='absolute bottom-0 flex justify-center flex-col items-center w-full text-white font-bold tracking-wider'>
                    <p  >श्रमं विना न किमपि साध्यम्</p>
                    <hr className='  block h-5 w-0.5 bg-orange-600'/>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Header