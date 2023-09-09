import React, { useState } from "react";
import iitrLogo from "../assets/iitrLogo.svg";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown.jsx";
import g2 from "../assets/images/g2.svg";

const about = {
  heading: "About Us",
  data: [
    { subHeading: "Director's Message", target: "/message/director" },
    {
      subHeading: "Professor-in-charge's Message",
      target: "/message/professor-in-charge",
    },
    { subHeading: "Administration", target: "/administration" },
  ],
};
const forms = {
  heading: "Procedures and Forms",
  data: [
    { subHeading: "Placement Procedure", target: "/placement" },
    { subHeading: "Placement Policy", target: "/placement-policy" },
    { subHeading: "AIPC Guidelines 2023", target: "/aipc-guidlines" },
    { subHeading: "Job Announcement Form", target: "/forms/job-announcement" },
    {
      subHeading: "Summer Internship Form",
      target: "/forms/summer-internship",
    },
  ],
};
const academics = {
  heading: "Academics",
  data: [
    { subHeading: "Departments, Centres and School", target: "/departments" },
    { subHeading: "Programmes", target: "/programs" },
  ],
};
const facilities = {
  heading: "Facilities",
  data: [
    { subHeading: "Infrastructure", target: "/Infrastructure" },
    { subHeading: "Institute Guest House", target: "/guest-house" },
    { subHeading: "Hotels", target: "/hotels" },
  ],
};
const contact = {
  heading: "Contact Us",
  data: [
    { subHeading: "Contact Details", target: "/contact-details" },
    { subHeading: "How To Reach", target: "/how-to-reach" },
    { subHeading: "Frequently Asked Questions", target: "/faq" },
  ],
};

const Header = (props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className={` relative mb-14 z-50 ${props.bgOn ? "header" : ""} bg-[#00000099]`}>
        <div className={`w-full  top-0   ${props.bgOn ? "bgeffect" : ""}`}>
          <div className=" w-4/5 m-auto">
            <div className="flex justify-between gap-5 py-5 items-center">
              <div className="flex-1  h-[70px]">
                <img
                  src={logo}
                  className="w-[42%] max-h-full"
                  alt=" pic logo"
                />
              </div>
              <div className="flex-1 flex object-contain flex-row-reverse gap-4">
                <NavLink to={"https://iitr.ac.in"} target="_blank" className="w-[75%]"><img src={iitrLogo} className="w-[100%]" alt="iitr logo" /></NavLink>
                <img src={g2} className="" alt="g2 logo" />
              </div>
            </div>
            <hr />
            {/* <div className=' text-gray-50 mt-2 flex justify-between flex-wrap'>
                            
                            <NavLink to="/">Home</NavLink>
                            <Dropdown heading={about.heading} data = {about.data}/>
                            <Dropdown heading={forms.heading} data= {forms.data}/>
                            <Dropdown heading={academics.heading} data={academics.data}/>
                            <NavLink to="#">Our Recruiters</NavLink>
                            <Dropdown heading={facilities.heading} data={facilities.data}/>
                            <Dropdown heading={contact.heading} data= {contact.data}/>

                        </div> */}

            <div className=" text-gray-50 mt-5 flex justify-between w-full flex-row-reverse">
              <div className="hidden  sm:flex justify-between items-center w-full">
                <NavLink to="/" className=" h-10">
                  Home
                </NavLink>
                <Dropdown heading={about.heading} data={about.data} />
                <Dropdown heading={forms.heading} data={forms.data} />
                <Dropdown heading={academics.heading} data={academics.data} />
                <NavLink to="/recruiters" className="h-10">
                  Our Recruiters{" "}
                </NavLink>
                <Dropdown heading={facilities.heading} data={facilities.data} />
                <Dropdown heading={contact.heading} data={contact.data} />
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                <button
                  onClick={toggleMobileMenu}
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-50 backdrop-blur-sm  hover:'text-white '  focus:outline-none "
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className={`${
                      isMobileMenuOpen ? "hidden" : "block"
                    } h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  <svg
                    className={`${
                      isMobileMenuOpen ? "block" : "hidden"
                    } h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile menu */}
            <div
              className={`${
                isMobileMenuOpen ? "block" : "hidden h-0"
              } sm:hidden transition-all`}
              id="mobile-menu"
            >
              <div className=" text-gray-50 px-2 pt-2 pb-3 space-y-1 backdrop-blur-sm rounded-lg">
                <NavLink to="/" className="block h-10">
                  Home
                </NavLink>
                <Dropdown heading={about.heading} data={about.data} />
                <Dropdown heading={forms.heading} data={forms.data} />
                <Dropdown heading={academics.heading} data={academics.data} />
                <NavLink to="/recruiters" className="block h-10">
                  Our Recruiters{" "}
                </NavLink>
                <Dropdown heading={facilities.heading} data={facilities.data} />
                <Dropdown heading={contact.heading} data={contact.data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
