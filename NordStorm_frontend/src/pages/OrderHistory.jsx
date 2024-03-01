
import axios from "axios";
import React, { useEffect, useState } from "react";
import config from "../../config";
import "../pageCss/orderHistory.css"
import RenderStar from "../components/RenderStar";
function OrderHistory() {

  const [data, setData] = useState([]);

  const order_history = async () => {
    try {
      const history = await axios.get(`${config.SERVER_URL}/order/history`, {
        withCredentials: true,
      });

      
      setData(history.data.orderHistory);
      console.log("orderHistory : ", history.data.orderHistory);
    } catch (error) {
      console.log("error while order history : ", error);
    }
  };

  const sum = data.reduce((acc, obj) => acc + Math.round(obj.productPrice), 0);

 
  useEffect(() => {
    order_history();
  }, []);




  return (
    <div>
        <h2>Order History</h2>
        <div id="parent">
{
  data?.map((ele,index)=>(
    
      <div key={index} >
        <img src={ele.productImage} alt={ele.productId} />
        <div id="data">
        <h3 id="pTitle">{ele.productTitle}</h3>
         <p><span>Price :</span> ${ele.productPrice}</p>
         <p><span>Rating </span><RenderStar rating={ele.productRating}/></p>
         <p><span>Category :</span>{ele.productCategory}</p>
         <p><span>Description :</span>{ele.productDescription}</p>
         <p><span id="dant">Date and time :(✅)</span><span id="date"> {ele.orderDate}</span></p>
       
        </div>
        
      </div>
  ))
}
        </div>
        <button id="totalAmount"> Your spent ${sum}</button>
    </div>
  )
}

export default OrderHistory






