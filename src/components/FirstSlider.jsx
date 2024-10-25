import React from 'react';
import { Carousel } from 'react-bootstrap';
import './FirstSlider.css'; // Import your custom CSS

const ImageSlider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 responsive-image"
          src="Images/all.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 responsive-image"
          src="Images/grp1.webp"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 responsive-image"
          src="Images/bmw.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageSlider;
