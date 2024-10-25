import React from 'react';
import { Container, Row, Col, Carousel, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CarouselComponent = () => {
  const navigate = useNavigate();

  const carData = [
    { url: '/scorpio', name: 'Mahindra Scorpio', price: '₹13.62 - 17.42 Lakh', imgSrc: 'Images/scorpio.webp' },
    { url: '/xuv 3xo', name: 'Mahindra XUV 3XO', price: '₹6.13 - 10.15 Lakh', imgSrc: 'Images/xuv 3xo.webp' },
    { url: '/thar', name: 'Mahindra Thar', price: '₹11.35 - 17.60 Lakh', imgSrc: 'Images/thar.webp' },
    { url: '/Mahindra Marazzo', name: 'Mahindra Marazzo', price: '₹7.51 - 13.04 Lakh', imgSrc: 'Images/marzoo.jpg' },
    { url: '/Mahindra XUV700', name: 'Mahindra XUV700', price: '₹32.58 - 50.34 Lakh', imgSrc: 'Images/xuv700.webp' },
    { url: '/Mahindra Bolero Neo', name: 'Mahindra Bolero Neo', price: '₹10.87 - 18.44 Lakh', imgSrc: 'Images/boleroneo.webp' },
    // { url: '/seltos', name: 'Kia Seltos', price: '₹10.89 - 19.99 Lakh', imgSrc: 'https://via.placeholder.com/400x250?text=Seltos' },
    // { url: '/hector', name: 'MG Hector', price: '₹15.00 - 22.12 Lakh', imgSrc: 'https://via.placeholder.com/400x250?text=Hector' },
    // { url: '/magnite', name: 'Nissan Magnite', price: '₹5.99 - 10.94 Lakh', imgSrc: 'https://via.placeholder.com/400x250?text=Magnite' },
    // { url: '/xuv700', name: 'Mahindra XUV700', price: '₹14.03 - 26.57 Lakh', imgSrc: 'https://via.placeholder.com/400x250?text=XUV700' },
  ];

  const handleCarClick = (url) => {
    navigate(url);
  };

  return (
    <>
     <Container>
                <h2 className="text-center my-4" style={{marginLeft:"-50rem",marginTop:"2rem"}}>Cars from Mahindra</h2>
            </Container>
    <Container className="mt-5">
      <Carousel indicators controls interval={3000}>
        {Array.from({ length: Math.ceil(carData.length / 3) }, (_, slideIndex) => (
          <Carousel.Item key={slideIndex}>
            <Row className="justify-content-center">
              {carData.slice(slideIndex * 3, slideIndex * 3 + 3).map((car) => (
                <Col key={car.name} md={4} className="mb-4">
                  <Card
                    className="h-100"
                    onClick={() => handleCarClick(car.url)} // Use car.url here
                    style={{ cursor: 'pointer' }}
                  >
                    <Card.Img
                      variant="top"
                      src={car.imgSrc}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
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
    </Container>
    </>
  );
};

export default CarouselComponent;


// import React from 'react';
// import { Container, Row, Col, Carousel, Card } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// const CarouselComponent = () => {
//   const navigate = useNavigate();

//   const carData = [
//     { url: '/scorpio', name: 'Mahindra Scorpio', price: '₹13.62 - 17.42 Lakh', imgSrc: 'Images/scorpio.webp' },
//     { url: '/xuv3xo', name: 'Mahindra XUV 3XO', price: '₹6.13 - 10.15 Lakh', imgSrc: 'Images/xuv 3xo.webp' },
//     { url: '/thar', name: 'Mahindra Thar', price: '₹11.35 - 17.60 Lakh', imgSrc: 'Images/thar.webp' },
//     { url: '/marazzo', name: 'Mahindra Marazzo', price: '₹7.51 - 13.04 Lakh', imgSrc: 'Images/marzoo.jpg' },
//     { url: '/xuv700', name: 'Mahindra XUV700', price: '₹32.58 - 50.34 Lakh', imgSrc: 'Images/xuv700.webp' },
//     { url: '/boleroneo', name: 'Mahindra Bolero Neo', price: '₹10.87 - 18.44 Lakh', imgSrc: 'Images/boleroneo.webp' },
//   ];

//   const handleCarClick = (url) => {
//     navigate(url);
//   };

//   return (
//     <>
//       <Container>
//         <h2 className="my-4">Cars from Mahindra</h2>
//       </Container>
//       <Container className="mt-5">
//         <Carousel indicators controls interval={3000}>
//           {Array.from({ length: Math.ceil(carData.length / 3) }, (_, slideIndex) => (
//             <Carousel.Item key={slideIndex}>
//               <Row className="justify-content-center">
//                 {carData.slice(slideIndex * 3, slideIndex * 3 + 3).map((car) => (
//                   <Col key={car.name} xs={12} sm={6} md={4} className="mb-4"> {/* Responsive column sizes */}
//                     <Card
//                       className="h-100"
//                       onClick={() => handleCarClick(car.url)}
//                       style={{ cursor: 'pointer' }}
//                     >
//                       <Card.Img
//                         variant="top"
//                         src={car.imgSrc}
//                         style={{ height: '200px', objectFit: 'cover' }}
//                       />
//                       <Card.Body>
//                         <Card.Title>{car.name}</Card.Title>
//                         <Card.Text>{car.price}</Card.Text>
//                       </Card.Body>
//                     </Card>
//                   </Col>
//                 ))}
//               </Row>
//             </Carousel.Item>
//           ))}
//         </Carousel>
//       </Container>
//     </>
//   );
// };

// export default CarouselComponent;
