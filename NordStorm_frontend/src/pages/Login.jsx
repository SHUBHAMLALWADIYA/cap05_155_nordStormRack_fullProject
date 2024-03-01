import React, { useContext, useState } from 'react'
import "../componentsCss/signUp.css"
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import config from '../../config';
import { LoginlogoutContext } from '../context/Loginlogoutcontex.jsx';



function Login() {

const {toggle,setToggle}=useContext(LoginlogoutContext);
console.log(config.SERVER_URL)

  const [userDetails,setUserDetails]=useState({email:"",pass:""})
  const navigate = useNavigate();
  const handleChange=(e)=>{
    const {name,value}=e.target;

    setUserDetails({...userDetails,[name]:value})
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();

    try {
      const response=await axios.post(`${config.SERVER_URL}/user/login`,userDetails,{  withCredentials: true})
      console.log(response.data)
      let outputMsg=response.data.msg
      
      if(outputMsg=="Login successfull !"){
        localStorage.setItem("userId",`${response.data.userId}`)
        setToggle(!toggle)
        navigate("/products",{replace:true});
     
      }else{
        alert(outputMsg)
      }
    } catch (error){
      console.log("SignUp error   :",{error})
    }
  }









  return (
    <div id="creatAcc">
      <div id="content">
        <u><h2>Login</h2></u>
        <p>🛒 Valentine's day offers </p>
        <p>🛒 Up to 80% off</p>
        <p>🛒 Best deal is here </p>
        <br />
        <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email<span id="required">*</span></label>
        <br />
        <br />
        <input type="email" name="email" id="email" value={userDetails.email} onChange={handleChange} required/>
        <br />
        <br />
        <label htmlFor="pass">Password<span id="required">*</span></label>
        <br />
        <br />
        <input type="password" name="pass" id="pass" value={userDetails.pass} onChange={handleChange} required />
        <br />
        <br />
        <button type='submit' id="loginSubmit">Submit</button>
        </form>
        
      </div>
    </div>
  )
}

export default Login