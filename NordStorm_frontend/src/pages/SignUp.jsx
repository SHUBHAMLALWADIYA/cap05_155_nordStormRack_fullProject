import React, { useState } from "react";
import "../componentsCss/signUp.css"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import config from '../../config';

function SignUp() {

  const [userDetails,setUserDetails]=useState({username:"",email:"",pass:""})
  const navigate = useNavigate();
  const handleChange=(e)=>{
    const {name,value}=e.target;

    setUserDetails({...userDetails,[name]:value})
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();

    try {
      const responce=await axios.post(`${config.SERVER_URL}/user/signup`,userDetails,{withCredentials:true})
      console.log(responce.data)
      let outputMsg=responce.data.msg
      if(outputMsg=='New user has been successfully created account'){
        navigate("/login",{replace:true});
      }
      if(outputMsg){
        alert(outputMsg)
      }
      
    } catch (error){
      console.log("SignUp error   :",{error})
    }
  }



  return (
    <div id="creatAcc">
      <div id="content">
        <u><h2>Create Account</h2></u>
        <p>💳 Check out faster</p>
        <p>🚛 Track orders easily</p>
        <p>🎫Coupnes for new User's</p>
        <br />
        <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email<span id="required">*</span></label>
        <br />
        <input type="email" name="email" id="email" placeholder="Enter Your Email" value={userDetails.email} onChange={handleChange} required/>
        <br />
        <br />
        <label htmlFor="username">UserName<span id="required">*</span></label>
        <br />
        <input type="text" name="username" id="username" placeholder="Enter Your Name" value={userDetails.username} onChange={handleChange} required/>
        <br />
        <br />
        <label htmlFor="pass">Password<span id="required">*</span></label>
        <br />
        <input type="password" name="pass" id="pass" placeholder="Your password" value={userDetails.pass} onChange={handleChange} required />
        <br />
        <br />
       <p> <input type="checkbox" name="" id="check" />Keep me signed in</p>
       <p id="policy">By creating an account ,you agree to our Privacy Policy and Terms&Conditions</p>
        <button id="createAccButton"type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
