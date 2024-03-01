import React from 'react'
import ImageSlider from '../components/ImageSlider'
import first from "../assets/firstHome.png"
import second from "../assets/secondHome.png"
import third from "../assets/thirdHome.png"
import four from "../assets/fourthHome.png"
import five from "../assets/fifthHome.png"
import six from "../assets/sixthHome.png"
import seven from "../assets/seventhHome.png"
import "../pageCss/home.css"
import ProductShow from '../components/productShow'
import { useNavigate } from 'react-router-dom';


function Home() {

  const navigate = useNavigate();
  return (
    <div id="homeMainDiv">
        <h2>More to Rack, easier and faster.</h2>
        <div id="signUpButton">
        <button id="homeSign" onClick={()=>{navigate("/signup",{replace:true})}}>Sign In or Create an Account</button>
        </div>
        <br />
        <img src={first} alt="" />
        <br />
        <br />
        <br />
        <ImageSlider/>
        <br />
        <br />
        <br />
        <img src={second} alt="" />
        <br />
        <br />
        <br />
        {/* data */}
        <img src={third} alt="" />
        <br />
        <br />
        <br />
        <img src={four} alt="" />
        <ProductShow/>
        <img src={seven} alt="" />
        <br />
        <br />
        <img src={five} alt="" />
        {/* slider products component */}
        <br />
        <br />
        <br />
        <img src={six} alt="" />
        <br />
        <br />
        <br />
        
         {/* slider products component */}
          {/* slider products component */}
          <h2>More to Know</h2>
    </div>
  )
}

export default Home