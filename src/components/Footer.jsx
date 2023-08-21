import React from "react";
import "../styles/footer.css";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer">
      <div className=" flex w-[80%] mx-auto justify-between py-12">
           <div className="footer-item">
          <img className="logo" src={logo} alt="logo" />
          <div className="disc">
            <p>Placement and Internship Cell,</p>
            <p>Indian Institute of Technology Roorkee,</p>
            <p>Roorkee-247667</p>
            <p>Distt. Haridwar, Uttarakhand, India</p>
          </div>
        </div>
        <div className="footer-item">
          <h2 className=" text-3xl font-bold">Contact Us</h2>
          <div className="disc">
            <h3 className=" font-bold">Phone</h3>
            <a className="footer-phone" href="tel:+91-1332-285260">
              +91 - 1332 - 285260
            </a>
            <h3 className=" font-bold">Email</h3>
            <a className="footer-email" href="mailTo:placement@iitr.ac.in">
              placement@iitr.ac.in or pic@iitr.ac.in
            </a>
          </div>
        </div>
        <div className="footer-item">
          <h2 className=" text-3xl font-bold">Direct Links</h2>
          <div className="disc">
            <NavLink to="/placement">Placement Procedure</NavLink>
            <NavLink to="/departments">E-Brochures</NavLink>
            <NavLink to="/forms">Forms</NavLink>
            <NavLink to="/faq#">FAQs</NavLink>
          </div>
        </div>
      </div>
     

        <hr />
        <div className="copy-right">
          <p className="copy-right-p">
            Copyright © 2023 Placement and Internship Cell, IITR. All rights
            reserved.
          </p>
          <span>
            Developed by <a href="https://cyphertech.space" target="_blank"> Cypher Tech</a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
