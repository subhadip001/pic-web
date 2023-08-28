import React from "react";
import "../styles/footer.css";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer">
      <div className=" flex w-[80%] mx-auto justify-between py-4">
           <div className="footer-item">
          <img className="" src={logo} alt="logo" />
          <div className="disc text-[18px] 3xl:text-[22px] red_hat_text leading-6">
            <p>Placement and Internship Cell,</p>
            <p>Indian Institute of Technology Roorkee,</p>
            <p>Roorkee-247667</p>
            <p>Distt. Haridwar, Uttarakhand, India</p>
          </div>
        </div>
        <div className="footer-item">
          <h2 className=" text-[29px] 3xl:text-[36px] font-bold">Contact Us</h2>
          <div className="disc text-[18px] 3xl:text-[22px] red_hat_text">
            <h3 className=" font-bold">Phone:</h3>
            <a className="footer-phone" href="tel:+91-1332-285260">
              +91 - 1332 - 285260
            </a>
            <h3 className=" font-bold">Email:</h3>
            <a className="footer-email text-[18px] 3xl:text-[22px] red_hat_text" href="mailTo:placement@iitr.ac.in">
              placement@iitr.ac.in or pic@iitr.ac.in
            </a>
            <h3 className=" font-bold">Linkedin:</h3>
            <a className="footer-email text-[18px] 3xl:text-[22px] red_hat_text" href="https://www.linkedin.com/company/tpoiitroorkee/" target="_blank">
            https://www.linkedin.com/company/tpoiitroorkee
            </a>
          </div>
        </div>
        <div className="footer-item">
          <h2 className=" text-3xl font-bold">Direct Links</h2>
          <div className="disc text-[18px] 3xl:text-[22px] red_hat_text flex flex-col gap-[6px]">
            <NavLink to="/placement">Placement Procedure</NavLink>
            <NavLink to="/departments">Department E-Brochures</NavLink>
            <NavLink to="/forms/job-announcement">Job Announcement Form</NavLink>
            <NavLink to="/forms/summer-internship">Summer Internship Form</NavLink>
            <NavLink to="/faq#">FAQs</NavLink>
          </div>
        </div>
      </div>
     

        <hr />
        <div className="copy-right pt-[10px]">
          <p className="copy-right-p">
          Copyright 2023, Placement and Internship Cell, IIT Roorkee
          </p>
          {/* <span className="text-[12px] 3xl:text-[16px]">
          <strong> Designed by</strong> Sheetal Narkhede, Atharva Duraphe and Kavin Madheswaran     <span className="px-5">|</span>   <strong> Developed by</strong> <a href="https://cyphertech.space" target="_blank"> Cypher Tech</a>
          </span> */}
        </div>
      </div>
    </>
  );
};

export default Footer;
