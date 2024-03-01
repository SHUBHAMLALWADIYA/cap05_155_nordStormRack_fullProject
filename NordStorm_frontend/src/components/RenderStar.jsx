import React from 'react'

const RenderStar = ({ rating }) => {
    const renderStars = () => {
      const stars = [];
      const fullStars = Math.floor(rating);
      const hasHalfStar = rating % 1 !== 0;
  
      // Add full stars
      for (let i = 0; i < fullStars; i++) {
        stars.push(<span key={i} className="full-star">&#9733;</span>);
      }
  
      // Add half star if needed
      if (hasHalfStar) {
        stars.push(<span key="half-star" className="half-star">&#9733;</span>);
      }
  
      // Add empty stars to fill up to 5 stars
      const remainingStars = 5 - stars.length;
      for (let i = 0; i < remainingStars; i++) {
        stars.push(<span key={`empty-star-${i}`} className="empty-star">&#9734;</span>);
      }
  
      return stars;
    };
  
    return (
      <div className="rating-stars">
        {renderStars()}
      </div>
    );
  };

export default RenderStar