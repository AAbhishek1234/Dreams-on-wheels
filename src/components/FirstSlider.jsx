import React from 'react';
import { Carousel, Form, Button, FormControl } from 'react-bootstrap';

const ImageSlider = () => {
  return (
    <Carousel>
      {/* Slide 1 */}
      <Carousel.Item>
        <img style={{height:"32rem"}}
          className="d-block w-100"
          src="/Images/grp4.webp"
          alt="First slide"
        />
        
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <img style={{height:"32rem"}}
          className="d-block w-100"
          src="/Images/grp2.jpeg"
          alt="Second slide"
        />
      
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <img style={{height:"32rem"}}
          className="d-block w-100"
          src="/Images/grp3.png"
          alt="Third slide"
        />
      
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageSlider;


