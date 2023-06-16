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

        <div className="group fixed top-1/2 right-0 -translate-y-1/2 z-50  cursor-pointer flex ">

            <div className="menu-hover font-medium flex  justify-center relative  "
                onClick={toggleDropdown} >
                <div className='flex items-center'>
                    {!isDropdownOpen && <svg width="23" height="61" className=' relative -right-1'  viewBox="0 0 18 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-1.3332e-06 27L17.25 53.4138L17.25 0.586226L-1.3332e-06 27Z" fill="#FF5300" />
                    </svg>}
                    <div className=' rotate-180 text-center py-6 px-3 w-16 h-56 text-3xl bg-white-transparent  border-black border-1px whitespace-nowrap rounded-r-xl  z-40' style={{ textOrientation: "mixed", writingMode: "vertical-lr" }}>Quick Links</div>
                    {isDropdownOpen && <svg width="23" className=' rotate-180 relative right-1' height="61" viewBox="0 0 18 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-1.3332e-06 27L17.25 53.4138L17.25 0.586226L-1.3332e-06 27Z" fill="#FF5300" />
                    </svg>}
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
