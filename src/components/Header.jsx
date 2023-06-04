import React from 'react'
import home from "../assets/images/home.png"
import iitrLogo from "../assets/images/iitrLogo.png"
import logo from "../assets/logo.png"
const Header = () => {
    return (
        <>
            <div className='home relative mb-12'>
                <div className=' absolute  w-screen h-screen top-0 bgeffect z-0 '>
                    <div className='conatiner z-10'>
                        <div className='flex justify-between items-center'>
                            <img src={logo} width="237px" height="56px" alt=" pic logo" />
                            <div className='flex justify-center items-center w-80 h-20 '>
                              <img src={iitrLogo} alt="iitr logo" /> 
                              <div className=' whitespace-nowrap' >
                                <p className=' text-white'>भारतीय प्रौद्योगिकी संस्थान रुड़की</p>
                                <p className=' text-white'>Indian Institute of Technology Roorkee</p>
                                </div> 
                            </div>
                            
                        </div>
                        <hr/>
                        <div className=' '>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Header