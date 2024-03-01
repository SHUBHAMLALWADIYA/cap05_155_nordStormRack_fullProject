import axios from 'axios';
import React, { useEffect, useState } from 'react'
import config from '../../config';
import RenderStar from '../components/RenderStar';
import "../pageCss/cart.css"

function Cart() {

  const [cartData,setCartData]=useState([])

async function allProducts(){
  console.log("products")
  try {
    
    const products=await axios.get(`${config.SERVER_URL}/cart/cartData`,{withCredentials:true});
    console.log("cart Data :",products)
    setCartData(products.data.myproducts)
    console.log(products.data)
    if(products.data=='login again because both token expried'){
      alert("You Are Logged-Out so Login again")
    }
    
  } catch (error){
    console.log("in Cart :",error)
  }
}

useEffect(()=>{allProducts()},[])

 async function deleteIteam (userId,productId){
  const cartDetails={
    userId:userId,
    productId:productId
  }

  console.log(cartDetails)
  try {
    const data=await axios.post(`${config.SERVER_URL}/cart/deleteProduct`,cartDetails,{withCredentials:true})
    console.log(data)
    const newData=cartData.filter((ele,index)=>{if(ele.productId!=productId){
      return ele
    }})
    setCartData(newData)
  } catch (error) {
    console.log("error while deleting the cart iteam",error)
  }
 }

let Total =cartData.reduce((acc, obj) => acc + Math.round(obj.productdetails.price), 0);
 //place order

 const handlePlaceOrder = async () => {
  try {
    const response = await axios.post(`${config.SERVER_URL}/order/placeOrder`,{userId:localStorage.getItem("userId")},{withCredentials:true});
    console.log(response.data);
    alert(response.data.msg)
  } catch (error) {
   
    console.error('Error placing order:', error.message);
  }
}
 

  return (<>
   <h2>Cart</h2>
    <div id="cart">
    {
  cartData?.map((iteam,index)=>(
    <div key={index}>
      <img src={iteam.productdetails.image} alt={iteam.productId} />
      <div id="info">
      <p id="title">{iteam.productdetails.title}®</p>
      <p id="price"> <span>Price</span> : ${iteam.productdetails.price}</p>
      <p id='rating'><RenderStar rating={iteam.productdetails.rating}/></p>
      <p id="des"><span>Description</span> : {iteam.productdetails.description}</p>
      <button id="delete" onClick={()=>deleteIteam(localStorage.getItem("userId"),iteam.productId)}>Delete from Cart </button>
      </div>
     
    </div>
  ))
}

    </div>
    <button id="cartButton" onClick={()=>handlePlaceOrder()}>Place Order & PayNow <span id="valueTotal">${Total}</span> </button>
  </>
   
  )
}

export default Cart