import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './FirstSlider.css'; // Import your custom CSS

const ImageSlider = () => {
  return (
    <>
      <Carousel interval={1500}> {/* Set interval to 3000 ms (3 seconds) */}
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
      <Container>
        <h1 className="text-center" style={{ fontWeight: "bold",marginTop:"2rem" }}>
          Find Your Dream Car
        </h1>
      </Container>
    </>
  );
};

export default ImageSlider;
