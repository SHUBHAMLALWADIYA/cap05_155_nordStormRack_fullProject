import React, { useState, useEffect } from 'react';
import "../componentsCSS/ImageSlider.css"
import first from "../assets/purse.png"
import second from "../assets/discount.png"
import third from "../assets/shoes.png"
import zero from "../assets/zero.png"
const ImageSlider = () => {
 
let arry=[zero,first,second,third]
  
  const welcomeText = "Welcome to Our Store!";
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % arry.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, [arry.length]);





  const goToPrevImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? arry.length - 1 : prevIndex - 1
      );
    };
  
    const goToNextImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === arry.length - 1 ? 0 : prevIndex + 1
      );
    };



  return (
    <div className="slider-container">
    <button className="slider-left" onClick={goToPrevImage}>
      &lt;
    </button>
    <button className="slider-right" onClick={goToNextImage}>
      &gt;
    </button>
    <img
      src={arry[currentImageIndex]}
      alt={`Image ${currentImageIndex}`}
      className="slider-image"
    />
  </div>
  );
};





export default ImageSlider;