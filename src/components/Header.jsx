import React from 'react'
import iitrLogo from "../assets/iitrLogo.svg"
import logo from "../assets/logo.svg"
import { NavLink } from 'react-router-dom'
import Dropdown from './Dropdown'

const about = 
    {heading:"About Us",
    data:[{subHeading:"Director's Message",target:"/message/director"},{subHeading:"Professor-in-charge's Message",target:"/message/professor-in-charge"},{subHeading :"Administration",target:"/administration"}]
}
const forms = {
    heading:"Forms and Procedures",
    data:[{subHeading: "Job Announcement Form", target:"/forms/job-announcement"},{subHeading:"Summer Internship Form",target:"/forms/summer-internship"},{subHeading:"Placement Procedure",target:"/placement"},{subHeading:"Placement Policy",target:"#"},{subHeading:"AIPC Guidelines 2023",target:""}]
}
const academics = {
    heading:"Academics",
    data:[{subHeading:"Departments",target:"/departments"},{subHeading:"Programmes",target:"/programs"}]
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
                        <div className='flex justify-between gap-5 py-5 items-center'>
                            <div className='flex-1 object-contain'>
                            <img src={logo} className='w-full h-auto max-w-200px' alt=" pic logo" />
                            </div>
                            <div className='flex-1 object-contain'>
                              <img src={iitrLogo} className='w-full h-auto  max-w-300px ml-auto' alt="iitr logo" /> 
                            </div>
                            
                        </div>
                        <hr/>
                        <div className=' text-gray-50 mt-2 flex justify-between flex-wrap'>
                            
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