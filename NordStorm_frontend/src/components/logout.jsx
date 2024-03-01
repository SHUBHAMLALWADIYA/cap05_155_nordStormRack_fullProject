import React, { useContext } from 'react'
import { LoginlogoutContext } from '../context/Loginlogoutcontex'
import axios from 'axios'
import config from '../../config'

function Logout() {
const {toggle,setToggle}=useContext(LoginlogoutContext)
    
  const handleSubmit=async()=>{

    try {
      const responce=await axios.post(`${config.SERVER_URL}/user/logout`,{},{withCredentials:true})
      console.log(responce.data)
      let outputMsg=responce.data.msg
      alert(outputMsg)
     setToggle(!toggle) 
    } catch (error){
      console.log("SignUp error   :",{error})
    }
  }
  return (
    <button onClick={()=>{handleSubmit()}}>Logout</button>
  )
}


export default Logout