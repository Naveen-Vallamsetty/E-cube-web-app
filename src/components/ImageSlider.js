import React, { useState, useEffect } from "react";
import "../styles/MovieCard.css";

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="movie-imgslider">
      <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex}`} />
    </div>
  );
};

export default ImageSlider;
