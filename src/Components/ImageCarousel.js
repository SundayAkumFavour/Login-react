import React, { useState } from "react";
import "../Css/ImageCarousel.css";

const images = [
  require("./img1.jpeg"),
  require("./img2.jpeg"),
  require("./img3.jpeg")
];

function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <button className="carousel-btn" onClick={prevSlide}>&lt;</button>
      <img src={images[current]} alt="carousel" className="carousel-img" />
      <button className="carousel-btn" onClick={nextSlide}>&gt;</button>
    </div>
  );
}

export default ImageCarousel;
