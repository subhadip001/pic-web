import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const links = [
    {
        link: "/placement",
        text: "Placement Procedure"
    },
    {
        link: "/forms/job-announcement",
        text: "Job Announcement Form"
    },
    {
        link: "/forms/summer-internship",
        text: "Summer Internship Form"
    },
    {
        link: "/",
        text: "Placement Policy"
    },
    {
        link: "/",
        text: "AIPC Guidelines 2023"
    },
    {
        link: "/departments",
        text: "Department Brochures"
    },
]
function QuickLink() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    const handleItemClick = (event) => {
        event.stopPropagation();
        closeDropdown();
    };

    return (

        <div className="group fixed top-1/2 right-0 -translate-y-1/2 z-50  cursor-pointer flex">

            <div className="menu-hover font-medium flex flex-col   justify-center  "
                onClick={toggleDropdown} >
                <div className=' -rotate-90 relative -right-1/3 '>
                    {!isDropdownOpen && <div className=' w-full  h-7 flex justify-center overflow-hidden py-4 relative z-50 top-0.5'>
                        <div className=' rotate-45 border-black bg-white border-solid border-2 p-1 absolute -bottom-14 '>
                            <div className='h-14 w-16  bg-orange' />
                        </div>
                    </div>}
                    <div className=' text-xl py-3 px-6 bg-white border-2 border-black rounded-t-lg relative z-40'>Quick Links</div>
                </div>
            </div>

            <div
                className={`${isDropdownOpen ? 'block' : 'hidden'
                    }  z-50 whitespace-nowrap  text-center navbg shadow-xl `}
                onMouseLeave={closeDropdown}
            >
                {links.map((curr, index) => (
                    <NavLink
                        to={curr.link}
                        key={index}
                        className="block border-b border-gray-400 py-5 text-black hover:font-semibold hover:bg-gray-300 md:px-4"
                        onClick={handleItemClick}
                    >
                        {curr.text}
                    </NavLink>
                ))}
            </div>
        </div>

    );
}

export default QuickLink;
