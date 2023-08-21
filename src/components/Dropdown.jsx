import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Dropdown(props) {
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
        <div className="block sm:inline-flex items-center justify-center ">
            <div className="group relative cursor-pointer sm:flex justify-center ">
                <div className="inline-flex items-center justify-between">
                    <NavLink 
                        className="menu-hover h-10 "
                        onClick={toggleDropdown} onMouseOut={closeDropdown}
                    >
                        {props.heading}
                    </NavLink>
                    <span></span>
                </div>
                <div
                    className={`${isDropdownOpen ? 'block' : 'hidden'
                        }  sm:absolute z-50 whitespace-nowrap top-10   text-center navbg shadow-xl group-hover:block`}
                    onMouseLeave={closeDropdown}
                >
                    {props.data.map((curr, index) => (
                        <NavLink
                            to={curr.target}
                            key={index}
                            className="block border-b border-gray-400 py-5 text-black hover:font-semibold hover:bg-gray-300 md:px-4"
                            onClick={handleItemClick}
                        >
                            {curr.subHeading}
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dropdown;
