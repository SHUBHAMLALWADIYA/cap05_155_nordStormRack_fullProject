import axios from 'axios'
import React, { useEffect, useState } from 'react'
import config from '../../config';
import "../pageCss/products.css"
import RenderStar from '../components/RenderStar';
function Products() {
const [productData,setProductsData]=useState([])

async function allProducts(){
  console.log("products")
  try {
    
    const products=await axios.get(`${config.SERVER_URL}/products/`,{withCredentials:true});
    console.log("products Data :",products)//products.data.msg
    if(products.data=='login again because both token expried'){
      alert("You have to Login First")
    }else{
      if(products.data.msg!='Cart data is now available'){
        alert(products.data.msg)
      }
    }
    
    setProductsData(products.data.data)
    console.log(products.data.data)
  } catch (error) {
    console.log("in All product :",error)
  }
}


const addToCart=async(userId,productId)=>{
const cartDetails={
  userId:userId,
  productId:productId
}
  try {
    const response=await axios.post(`${config.SERVER_URL}/cart/addToCart`,cartDetails,{withCredentials:true})
    console.log(response)
    
  } catch (error) {
    console.log("error while addto cart ",error)
  }
}
// ProductID: 1
// category: "Men"
// description: "Stylish hooded jacket for a casual and comfortable look."
// image: "https://rukminim2.flixcart.com/image/832/832/xif0q/jacket/x/n/0/l-1-no-togrblhdfuljacket-k20-tripr-original-imagwzhxv9ffhavj.jpeg?q=70&crop=false"
// price: "$89.99"
// rating: 3.5
// title: "Men's Hooded Jacket"
// _id: "65bf4eb3187de1fceeacebeb"


useEffect(()=>{allProducts()},[])

  return (
    <div>
        <h2>Products</h2>
        <div id="parent">
{
  productData?.map((iteam,index)=>(
    <div key={index}>
      <img src={iteam.image} alt={iteam.productID} />
      <div id="info">
      <p id="title">{iteam.title}®</p>
      <p id="price"> <span>Price</span> : ${iteam.price}</p>
      <p id='rating'><RenderStar rating={iteam.rating}/></p>
      <p id="des"><span>Description</span> : {iteam.description}</p>
      <button id="addToCart" onClick={()=>addToCart(localStorage.getItem("userId"),iteam._id)}>Add To Cart</button>
      </div>
      
    </div>
  ))
}
        </div>
    </div>
  )
}

export default Products