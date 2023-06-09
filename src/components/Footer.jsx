import React from "react";
import "../styles/footer.css";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer">
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
          <h2>Contact Us</h2>
          <div className="disc">
            <h3>Phone</h3>
            <a className="footer-phone" href="tel:+91-1332-285260">
              +91 - 1332 - 285260
            </a>
            <h3>Email</h3>
            <a className="footer-email" href="mailTo:placement@iitr.ac.in">
              placement@iitr.ac.in or pic@iitr.ac.in
            </a>
          </div>
        </div>
        <div className="footer-item">
          <h2>Direct Links</h2>
          <div className="disc">
            <NavLink to="/placement">Placement Procedure</NavLink>
            <NavLink href="#">E-Brochures</NavLink>
            <NavLink to="/forms/job-announcement">Forms</NavLink>
            <NavLink to="/faq#">FAQs</NavLink>
          </div>
        </div>

        <hr />
        <div className="copy-right">
          <p className="copy-right-p">
            Copyright © 2023 Placement and Internship Cell, IITR. All rights
            reserved.
          </p>
          <p>
            Designed by Atharva Duraphe, Kavin Madheswaran, S. Rabiudeen and
            Sheetal Narkhede | Developed by Cypher Tech
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
