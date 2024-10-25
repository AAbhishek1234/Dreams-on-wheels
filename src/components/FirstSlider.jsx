import React from 'react';
import { Carousel, Form, Button, FormControl } from 'react-bootstrap';

const ImageSlider = () => {
  return (
    <Carousel>
      {/* Slide 1 */}
      <Carousel.Item>
        <img style={{height:"32rem"}}
          className="d-block w-100"
          src="/Images/all.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <img style={{height:"32rem"}}
          className="d-block w-100"
          src="/Images/bmw.jpg"
          alt="Second slide"
        />
      
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <img style={{height:"32rem"}}
          className="d-block w-100"
          src="/Images/mercedies.webp"
          alt="Third slide"
        />
      
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageSlider;


