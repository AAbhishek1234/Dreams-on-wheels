import React from 'react';
import { Carousel } from 'react-bootstrap';

const ImageSlider = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/Images/sliderimg1.jpg" // Path to the first image
                    alt="First slide"
                    style={{height:"34.4rem"}}
                />
                
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/Images/sliderimg3change.jpg" // Path to the second image
                    alt="Second slide"
                    style={{height:"34.4rem"}}
                />
                
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/Images/sliderimg3.png" // Path to the third image
                    alt="Third slide"
                    style={{height:"34.4rem"}}
                />
               
            </Carousel.Item>
            {/* <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/Images/sliderimg1.jpg" // Path to the fourth image
                    alt="Fourth slide"
                />
                <Carousel.Caption>
                    <h3>Fourth Slide Caption</h3>
                </Carousel.Caption>
            </Carousel.Item> */}
        </Carousel>
    );
}

export default ImageSlider;
