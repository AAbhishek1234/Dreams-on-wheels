// import React from 'react';
// import { Container, Row, Col, Carousel, Card } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// const CarouselComponent = () => {
//   const navigate = useNavigate();

//   const carData = [
//     { url: '/scorpio', name: 'Mahindra Scorpio', price: '₹13.62 - 17.42 Lakh', imgSrc: 'Images/scorpio.webp' },
//     { url: '/xuv 3xo', name: 'Mahindra XUV 3XO', price: '₹6.13 - 10.15 Lakh', imgSrc: 'Images/xuv 3xo.webp' },
//     { url: '/thar', name: 'Mahindra Thar', price: '₹11.35 - 17.60 Lakh', imgSrc: 'Images/thar.webp' },
//     { url: '/Mahindra Marazzo', name: 'Mahindra Marazzo', price: '₹7.51 - 13.04 Lakh', imgSrc: 'Images/marzoo.jpg' },
//     { url: '/Mahindra XUV700', name: 'Mahindra XUV700', price: '₹32.58 - 50.34 Lakh', imgSrc: 'Images/xuv700.webp' },
//     { url: '/Mahindra Bolero Neo', name: 'Mahindra Bolero Neo', price: '₹10.87 - 18.44 Lakh', imgSrc: 'Images/boleroneo.webp' },
//     // { url: '/seltos', name: 'Kia Seltos', price: '₹10.89 - 19.99 Lakh', imgSrc: 'https://via.placeholder.com/400x250?text=Seltos' },
//     // { url: '/hector', name: 'MG Hector', price: '₹15.00 - 22.12 Lakh', imgSrc: 'https://via.placeholder.com/400x250?text=Hector' },
//     // { url: '/magnite', name: 'Nissan Magnite', price: '₹5.99 - 10.94 Lakh', imgSrc: 'https://via.placeholder.com/400x250?text=Magnite' },
//     // { url: '/xuv700', name: 'Mahindra XUV700', price: '₹14.03 - 26.57 Lakh', imgSrc: 'https://via.placeholder.com/400x250?text=XUV700' },
//   ];

//   const handleCarClick = (url) => {
//     navigate(url);
//   };

//   return (
//     <>
//      <Container>
//                 <h2 className="text-center my-4" style={{marginLeft:"-50rem",marginTop:"2rem"}}>Cars from Mahindra</h2>
//             </Container>
//     <Container className="mt-5">
//       <Carousel indicators controls interval={3000}>
//         {Array.from({ length: Math.ceil(carData.length / 3) }, (_, slideIndex) => (
//           <Carousel.Item key={slideIndex}>
//             <Row className="justify-content-center">
//               {carData.slice(slideIndex * 3, slideIndex * 3 + 3).map((car) => (
//                 <Col key={car.name} md={4} className="mb-4">
//                   <Card
//                     className="h-100"
//                     onClick={() => handleCarClick(car.url)} // Use car.url here
//                     style={{ cursor: 'pointer' }}
//                   >
//                     <Card.Img
//                       variant="top"
//                       src={car.imgSrc}
//                       style={{ height: '200px', objectFit: 'cover' }}
//                     />
//                     <Card.Body>
//                       <Card.Title>{car.name}</Card.Title>
//                       <Card.Text>{car.price}</Card.Text>
//                     </Card.Body>
//                   </Card>
//                 </Col>
//               ))}
//             </Row>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </Container>
//     </>
//   );
// };

// export default CarouselComponent;


// // import React from 'react';
// // import { Container, Row, Col, Carousel, Card } from 'react-bootstrap';
// // import { useNavigate } from 'react-router-dom';

// // const CarouselComponent = () => {
// //   const navigate = useNavigate();

// //   const carData = [
// //     { url: '/scorpio', name: 'Mahindra Scorpio', price: '₹13.62 - 17.42 Lakh', imgSrc: 'Images/scorpio.webp' },
// //     { url: '/xuv3xo', name: 'Mahindra XUV 3XO', price: '₹6.13 - 10.15 Lakh', imgSrc: 'Images/xuv 3xo.webp' },
// //     { url: '/thar', name: 'Mahindra Thar', price: '₹11.35 - 17.60 Lakh', imgSrc: 'Images/thar.webp' },
// //     { url: '/marazzo', name: 'Mahindra Marazzo', price: '₹7.51 - 13.04 Lakh', imgSrc: 'Images/marzoo.jpg' },
// //     { url: '/xuv700', name: 'Mahindra XUV700', price: '₹32.58 - 50.34 Lakh', imgSrc: 'Images/xuv700.webp' },
// //     { url: '/boleroneo', name: 'Mahindra Bolero Neo', price: '₹10.87 - 18.44 Lakh', imgSrc: 'Images/boleroneo.webp' },
// //   ];

// //   const handleCarClick = (url) => {
// //     navigate(url);
// //   };

// //   return (
// //     <>
// //       <Container>
// //         <h2 className="my-4">Cars from Mahindra</h2>
// //       </Container>
// //       <Container className="mt-5">
// //         <Carousel indicators controls interval={3000}>
// //           {Array.from({ length: Math.ceil(carData.length / 3) }, (_, slideIndex) => (
// //             <Carousel.Item key={slideIndex}>
// //               <Row className="justify-content-center">
// //                 {carData.slice(slideIndex * 3, slideIndex * 3 + 3).map((car) => (
// //                   <Col key={car.name} xs={12} sm={6} md={4} className="mb-4"> {/* Responsive column sizes */}
// //                     <Card
// //                       className="h-100"
// //                       onClick={() => handleCarClick(car.url)}
// //                       style={{ cursor: 'pointer' }}
// //                     >
// //                       <Card.Img
// //                         variant="top"
// //                         src={car.imgSrc}
// //                         style={{ height: '200px', objectFit: 'cover' }}
// //                       />
// //                       <Card.Body>
// //                         <Card.Title>{car.name}</Card.Title>
// //                         <Card.Text>{car.price}</Card.Text>
// //                       </Card.Body>
// //                     </Card>
// //                   </Col>
// //                 ))}
// //               </Row>
// //             </Carousel.Item>
// //           ))}
// //         </Carousel>
// //       </Container>
// //     </>
// //   );
// // };

// // export default CarouselComponent;





// import React from 'react';
// import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom'; // For navigation

// const CarsMahindra = () => {
//     const cars = [
//         { name: 'Mahindra Scorpio', price: '₹13.62 - 17.42 Lakh', image: 'Images/scorpio.webp', url: '/scorpio' },
//         { name: 'Mahindra XUV 3XO', price: '₹6.13 - 10.15 Lakh', image: 'Images/xuv 3xo.webp', url: '/punch' },
//         { name: 'Mahindra Thar', price: '₹11.35 - 17.60 Lakh', image: 'Images/thar.webp', url: '/thar' },
//         { name: 'Maruti FRONX', price: '₹7.51 - 13.04 Lakh', image: '/Images/sliderimg4.jpg', url: '/fronx' },
//         { name: 'Car 5', price: '₹X - Y Lakh', image: '/Images/sliderimg5.jpg', url: '/car5' },
//         { name: 'Car 6', price: '₹X - Y Lakh', image: '/Images/sliderimg6.jpg', url: '/car6' },
//         { name: 'Car 7', price: '₹X - Y Lakh', image: '/Images/sliderimg7.jpg', url: '/car7' },
//         { name: 'Car 8', price: '₹X - Y Lakh', image: '/Images/sliderimg8.jpg', url: '/car8' },
//         { name: 'Car 9', price: '₹X - Y Lakh', image: '/Images/sliderimg9.jpg', url: '/car9' },
//         { name: 'Car 10', price: '₹X - Y Lakh', image: '/Images/sliderimg10.jpg', url: '/car10' },
//     ];

//     const navigate = useNavigate();

//     // Helper function to group cars into slides
//     const chunkArray = (arr, size) => {
//         const chunkedArr = [];
//         for (let i = 0; i < arr.length; i += size) {
//             chunkedArr.push(arr.slice(i, i + size));
//         }
//         return chunkedArr;
//     };

//     const carChunks = chunkArray(cars, 3); // Group cars into sets of 3

//     const handleCardClick = (url) => {
//         navigate(url); // Navigate to the specified URL
//     };

//     return (
//       <>
//        <Container>
//          <h2 className="my-4">Cars from Mahindra</h2>
//        </Container>
//         <Container>
//             <Carousel>
//                 {carChunks.map((chunk, idx) => (
//                     <Carousel.Item key={idx}>
//                         <Row>
//                             {chunk.map((car, index) => (
//                                 <Col md={4} sm={12} key={index}>
//                                     <Card className="text-center" onClick={() => handleCardClick(car.url)} style={{ cursor: 'pointer' }}>
//                                         <Card.Img variant="top" src={car.image} alt={car.name} />
//                                         <Card.Body>
//                                             <Card.Title>{car.name}</Card.Title>
//                                             <Card.Text>{car.price}</Card.Text>
//                                         </Card.Body>
//                                     </Card>
//                                 </Col>
//                             ))}
//                         </Row>
//                     </Carousel.Item>
//                 ))}
//             </Carousel>
//         </Container>
//         </>
//     );
// };

// export default CarsMahindra;


























import React, { useState } from 'react';
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // For navigation
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './CarsMahindra.css'; // Add custom styles here

const CarsMahindra = () => {
    const cars = [
        { name: 'Mahindra Scorpio', price: '₹13.62 - 17.42 Lakh', image: 'Images/scorpio.webp', url: '/scorpio' },
        { name: 'Mahindra XUV 3XO', price: '₹6.13 - 10.15 Lakh', image: 'Images/xuv 3xo.webp', url: '/xuv3xo' },
        { name: 'Mahindra Thar', price: '₹11.35 - 17.60 Lakh', image: 'Images/thar.webp', url: '/thar' },
        { name: 'Maruti FRONX', price: '₹7.51 - 13.04 Lakh', image: 'Images/marzoo.jpg', url: '/fronx' },
        { name: 'Car 5', price: '₹X - Y Lakh', image: 'Images/xuv 3xo.webp', url: '/car5' },
        { name: 'Car 6', price: '₹X - Y Lakh', image: 'Images/scorpio.webp', url: '/car6' },
        // { name: 'Car 7', price: '₹X - Y Lakh', image: 'Images/car7.webp', url: '/car7' },
        // { name: 'Car 8', price: '₹X - Y Lakh', image: 'Images/car8.webp', url: '/car8' },
        // { name: 'Car 9', price: '₹X - Y Lakh', image: 'Images/car9.webp', url: '/car9' },
        // { name: 'Car 10', price: '₹X - Y Lakh', image: 'Images/car10.webp', url: '/car10' },
    ];

    const navigate = useNavigate();
    const [slideIndex, setSlideIndex] = useState(0); // Track the current slide index

    // Helper function to group cars into slides
    const chunkArray = (arr, size) => {
        const chunkedArr = [];
        for (let i = 0; i < arr.length; i += size) {
            chunkedArr.push(arr.slice(i, i + size));
        }
        return chunkedArr;
    };

    const carChunks = chunkArray(cars, 3); // Initial grouping of cars into sets of 3

    const handleCardClick = (url) => {
        navigate(url); // Navigate to the specified URL
    };

    return (
        <>
            <Container>
                <h2 className="my-4">Cars from Mahindra</h2>
            </Container>
            <Container>
                <Carousel
                    activeIndex={slideIndex}
                    onSelect={setSlideIndex}
                    interval={3000} // Disable automatic cycling
                >
                    {carChunks.map((chunk, idx) => (
                        <Carousel.Item key={idx}>
                            <Row>
                                {chunk.map((car, index) => (
                                    <Col md={4} sm={12} key={index} className="d-flex justify-content-center">
                                        <Card 
                                            className="text-center car-card" 
                                            onClick={() => handleCardClick(car.url)} 
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <div className="card-img-wrapper">
                                                <Card.Img variant="top" src={car.image} alt={car.name} />
                                            </div>
                                            <Card.Body>
                                                <Card.Title>{car.name}</Card.Title>
                                                <Card.Text>{car.price}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Carousel.Item>
                    ))}
                </Carousel>
                {/* Navigation Icons */}
                
            </Container>
        </>
    );
};

export default CarsMahindra;
