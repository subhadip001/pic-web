import React, { useState } from 'react';

function Dropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="  inline-flex items-center justify-center">
      <div className="group relative cursor-pointer ">
        <div className=" inline-flex items-center justify-between">
          <a
            className="menu-hover  text-base font-medium text-white lg:mx-4"
            onClick={toggleDropdown}
          >
            About Us
          </a>
          <span>
          </span>
        </div>
        <div
          className={`${
            isDropdownOpen ? 'visible' : 'invisible'
          } absolute z-50 flex   whitespace-nowrap text-center flex-col bg-gray-300 py-1 px-4 text-gray-800 shadow-xl group-hover:visible`}
          onClick={toggleDropdown}
        >
          <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
           Directo's Message
          </a>
          <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
            Professor-in-charge's Message
          </a>
          <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
            Administration
          </a>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
