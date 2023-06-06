import React from 'react'
import home from "../assets/images/home.png"
import iitrLogo from "../assets/images/iitrLogo.png"
import logo from "../assets/logo.png"
import { NavLink } from 'react-router-dom'
import Dropdown from './Dropdown'

const about = 
    {heading:"About Us",
    data:[{subHeading:"Director's Message",target:"/message/director"},{subHeading:"Professor-in-charge's Message",target:"/message/professor-in-charge"},{subHeading :"Administration",target:"/administration"}]
}
const forms = {
    heading:"Forms and Procedures",
    data:[{subHeading: "Job Announcement Form", target:"#"},{subHeading:"Summer Internship Form",target:"#"},{subHeading:"Placement Procedure",target:"#"},{subHeading:"Placement Policy",target:"#"},{subHeading:"AIPC Guidelines 2023",target:""}]
}
const academics = {
    heading:"Academics",
    data:[{subHeading:"Departments",target:"#"},{subHeading:"Programmes",target:"#"}]
}
const facilities ={
    heading:"Facilities",
data :[{subHeading:"Infrastructure",target:"#"},{subHeading: "Institute Guest House",target:"#"},{subHeading:"Hostels",target:"#"}]
}
const contact ={
    heading:"Contact Us",
    data:[{subHeading:'Contact Details',target:"#"},{subHeading:"How To Reach",target:"#"}]
}

const Header = (props) => {
  
    return (
        <>
            <div className={` relative mb-14 z-50 ${props.bgOn ? "header":""}`}>
                <div className={`w-full  top-0   ${props.bgOn ? "bgeffect":""}`}>
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
                            
                            <NavLink to="/">Home</NavLink>
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