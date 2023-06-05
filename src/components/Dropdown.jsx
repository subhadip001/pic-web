import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Dropdown(props) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className=" inline-flex items-center justify-center" >
            <div className="group relative cursor-pointer flex justify-center ">
                <div className=" inline-flex items-center justify-between">
                    <NavLink 
                        className="menu-hover  h-8 text-base font-medium text-white lg:mx-4"
                        onClick={toggleDropdown} onBlur={toggleDropdown}
                    >
                        {props.heading}
                    </NavLink>
                    <span>
                    </span>
                </div>
                <div
                    className={`${isDropdownOpen ? 'visible' : 'invisible'
                        } absolute z-50 flex  whitespace-nowrap top-8 text-center flex-col navbg shadow-xl group-hover:visible`}
                    onClick={toggleDropdown}
                >
                    {props.data.map((curr,index)=>{
                        return(
                            <NavLink key={index} className=" block border-b  border-gray-400 py-5  text-black hover:font-semibold hover:bg-gray-300 md:px-4">
                            {curr}
                        </NavLink>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Dropdown;
