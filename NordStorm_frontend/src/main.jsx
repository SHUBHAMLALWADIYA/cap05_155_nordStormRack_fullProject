import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginlogoutContextProvider from "./context/Loginlogoutcontex.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoginlogoutContextProvider>
    <BrowserRouter>
        <Navbar />
        <App />
        <Footer />
    </BrowserRouter>
    </LoginlogoutContextProvider>
  </React.StrictMode>
);


