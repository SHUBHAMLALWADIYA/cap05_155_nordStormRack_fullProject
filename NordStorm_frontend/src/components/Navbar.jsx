import React, { useContext } from "react";
import "../componentsCss/Navbar.css";
import { Link } from "react-router-dom";
import { LoginlogoutContext } from "../context/Loginlogoutcontex.jsx";
import Logout from "./logout.jsx";




function Navbar() {

  const {toggle,setToggle}=useContext(LoginlogoutContext)




  return (
    <div id="navBar">
      <div id="headLine">
        <p>
          Get gifts before Valentine’s Day! Order by 5PM PT on 2/5 for standard
          shipping. Valentine’s Day Gift Shop
        </p>
      </div>
      <div id="mainNav">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcLsJIzb6vCm1jytcXc1lHDBC0mu26SqAQoQ&usqp=CAU"
          alt=""
        />
        <div className="search-box">
          <input type="text" id="search-input" placeholder="Search..." />
          <button className="search-button">&#128269;</button>
        </div>

        <Link to="/signup">SignIn</Link>
        <Link to="/">Home</Link>
        <Link to="/cartData">🛒</Link>
        
        <Link to="/orderHistory">orderHistory</Link>
        <Link to="/products">Products</Link>
        {toggle?<Logout></Logout>:<Link to="/login">Login</Link>}
          
        
      
      </div>
      <hr />
    </div>
  );
}

export default Navbar;
