import React from "react";
import "../componentsCss/footer.css";
import footer from "../assets/footer.png"
import { useNavigate } from 'react-router-dom';
function Footer() {

  const navigate=useNavigate()
  return (
    <div id="mainDiv">
      <div id="getMail">
        <div>
          <input id="footerInput" type="email" placeholder="Email Adress" />
          <button id="footerButton" onClick={()=>{navigate("/signup",{replace:true})}}>Sign Up</button>
        </div>
      </div>
      <img src={footer} alt="" />
    </div>
  );
}

export default Footer;
