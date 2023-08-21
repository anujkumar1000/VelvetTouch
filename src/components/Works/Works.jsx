import React, { useContext } from "react";
import "./Works.css";
import Lakme from "../../img/Lakme.png";
import Garnier from "../../img/Garnier.png";
import Neutrogena from "../../img/neutrogena.png";
import Ponds from "../../img/Ponds.png";
import mamaearth from "../../img/mamaearth.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
import { NavLink } from "react-router-dom";
import Test from "./Test";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Trusted Products from
          </span>
          <span>Best Brands</span>
          <spane>
            We will recommende trusted and budget Friendly
            <br />
            brands which will be good for your skin-type
            <br />
          </spane>
          <NavLink to="/Test"><button className="button s-button">Test</button></NavLink>
          
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img height="50px" src={Lakme} alt="" />
          </div>
          <div className="w-secCircle">
            <img height="70px"src={Garnier} alt="" />
          </div>
          <div className="w-secCircle">
            <img height="40px" src={Neutrogena} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img height="50px" src={Ponds} alt="" />
          </div>
          <div className="w-secCircle">
            <img height="200px" src={mamaearth} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
