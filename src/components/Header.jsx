import React from 'react'
import home from "../assets/images/home.png"
import iitrLogo from "../assets/images/iitrLogo.png"
import logo from "../assets/logo.png"
import { NavLink } from 'react-router-dom'
import Dropdown from './Dropdown'

const about = 
    {heading:"About Us",
    data:["Director's Message","Professor-in-charge's Message","Administration"]
}
const forms = {
    heading:"Forms and Procedures",
    data:["Job Announcement Form","Summer Internship Form","Placement Procedure","Placement Policy","AIPC Guidelines 2023"]
}
const academics = {
    heading:"Academics",
    data:["Departments","Programmes"]
}
const facilities ={
    heading:"Facilities",
data :["Infrastructure","Institute Guest House","Hostels"]
}
const contact ={
    heading:"Contact Us",
    data:['Contact Details',"How To Reach"]
}

const Header = (props) => {
  
    return (
        <>
            <div className={`relative mb-12 ${props.bgOn ? "header":""}`}>
                <div className={`w-screen  top-0  z-0 ${props.bgOn ? "bgeffect":""}`}>
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
                            <Dropdown heading={about.heading} data = {about.data}/>
                            <Dropdown heading={forms.heading} data= {forms.data}/>
                            <Dropdown heading={academics.heading} data={academics.data}/>
                            <NavLink to="#">Our Recruiters</NavLink>
                            <Dropdown heading={facilities.heading} data={facilities.data}/>
                            <Dropdown heading={contact.heading} data= {contact.data}/>

                        </div>
                    </div>
                    
                </div>

            </div>
        </>
    )
}

export default Header