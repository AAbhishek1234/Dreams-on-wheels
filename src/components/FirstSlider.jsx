// import React from 'react';
// import { Carousel, Container } from 'react-bootstrap';
// import './FirstSlider.css'; // Import the custom CSS file

// const FirstSlider = () => {
//     return (
//         <>
//             <Carousel>
//                 <Carousel.Item>
//                     <img
//                         className="d-block w-100 custom-img"
//                         src="Images/sliderimg1.jpg"
//                         alt="First slide"
//                     />
//                 </Carousel.Item>

//                 <Carousel.Item>
//                     <img
//                         className="d-block w-100 custom-img"
//                         src="Images/sliderimg3.png"
//                         alt="Second slide"
//                     />
//                 </Carousel.Item>

//                 <Carousel.Item>
//                     <img
//                         className="d-block w-100 custom-img"
//                         src="Images/sliderimg3change.jpg"
//                         alt="Third slide"
//                     />
//                 </Carousel.Item>
//             </Carousel>
//             <Container>
//                 <h1 className="text-center my-4" style={{ fontWeight: "bold" }}>Find Your Dream Cars</h1>
//             </Container>
//         </>
//     );
// }

// export default FirstSlider;





import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './FirstSlider.css'; // Import the custom CSS file

const FirstSlider = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img"
                        src="Images/sliderimg1.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img"
                        src="Images/sliderimg3.png"
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img"
                        src="Images/sliderimg3change.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <Container>
                <h1 className="text-center my-4" style={{ fontWeight: "bold" }}>Find Your Dream Cars</h1>
            </Container>
        </>
    );
}

export default FirstSlider;
