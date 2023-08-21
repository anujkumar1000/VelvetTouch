import React from "react";
// import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">VelvetTouch</div>
        {/* <Toggle /> */}
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul className="nonee" style={{ listStyleType: "none"}}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
              <NavLink to="/Intro">
                Home
              </NavLink>
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
               <NavLink to="/Intro">
                About
                </NavLink>
              </Link>
            </li>
            <li>
            <NavLink to="/Test">Test</NavLink>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
              <NavLink to="/Intro">
                Testimonial
              </NavLink>
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
