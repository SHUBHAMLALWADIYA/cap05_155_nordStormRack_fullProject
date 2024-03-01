import { Routes, Route } from "react-router-dom";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import OrderHistory from "../pages/OrderHistory";




function AllRoutes(){

    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/cartData" element={<Cart/>}/>
            <Route path="/orderHistory" element={<OrderHistory/>}/>
        </Routes>
        </>
    )
}

export default AllRoutes