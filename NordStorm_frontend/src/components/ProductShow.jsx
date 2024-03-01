import React, { useState } from "react";
import "../componentsCss/productShow.css"

const ProductShow = () => {
    let images=["https://n.nordstrommedia.com/it/15efb06b-9816-46b1-80aa-b5b23c6b1df9.jpeg?h=1224&w=1224",
"https://n.nordstrommedia.com/it/689bbc02-ed5f-43df-9f43-5540d6e5b3c3.jpeg?h=1224&w=1224",
"https://n.nordstrommedia.com/it/f3261a7c-7c65-46fa-aadf-0ef3786d4408.jpeg?h=1224&w=1224",
"https://n.nordstrommedia.com/it/5ebbae20-e078-47eb-aa36-0b7244f46168.jpeg?h=1224&w=1224",
"https://n.nordstrommedia.com/it/66143565-ce0a-47b4-b3ad-be1ec086cb03.jpeg?h=1224&w=1224",
"https://n.nordstrommedia.com/it/0c719552-1020-4a4e-97fe-f2741679cef5.jpeg?h=1224&w=1224",
"https://n.nordstrommedia.com/it/298eae4f-e49f-40be-9178-10f638d86dad.jpeg?h=1224&w=1224",
"https://n.nordstrommedia.com/it/cd70ec3b-0c27-4d0b-8fa3-2b542ee3867e.jpeg?h=1224&w=1224",
"https://n.nordstrommedia.com/it/a3b3a766-7f09-4ac8-bc7e-cd47f7249372.jpeg?h=1224&w=1224"
]
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 3));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => Math.min(images.length - 3, prevIndex + 3));
  };

  return (
    <div>
       <button className="recButtons left" onClick={handlePrevClick}>&lt;</button>
       <div id="recbutt">
       <button className="recButtons right" onClick={handleNextClick}>&gt;</button>
       </div>
       
      <div className="image-slider-container">
        <div className="image-slider">
          {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
            <div key={index} className="image-block">
              <img className="productImg" src={image} alt={`Product ${index + currentIndex + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductShow;