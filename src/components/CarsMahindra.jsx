// import React from 'react';
// import { Card, Container, Row, Col, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom'; 
// import './CarsMahindra.css'; 

// const CarsMahindra = () => {
//     const cars = [
//         { name: 'Alturas G4', price: '₹13.62 - 17.42 Lakh', image: 'Images/alturas.jpeg', url: '/alturas' },
//         { name: 'XUV 700', price: '₹6.13 - 10.15 Lakh', image: 'Images/xuv700.webp', url: '/xuv700' },
//         { name: 'Marzoo', price: '₹11.35 - 17.60 Lakh', image: 'Images/marzoo.jpg', url: '/marzoo' },
//     ];

//     const navigate = useNavigate();

//     const handleCardClick = (url) => {
//         navigate(url);
//     };

//     const handleViewAllClick = () => {
//         navigate('/all-mahindra-cars'); // Adjust this route to your "View All" page
//     };

//     return (
//         <>
//             <Container fluid className="compact-container">
//                 <h2 className="my-4">Cars from Mahindra</h2>
//             </Container>

//             <Container fluid className="compact-container">
//                 <Row className="g-4">
//                     {cars.map((car, index) => (
//                         <Col md={4} sm={12} key={index} className="d-flex justify-content-center">
//                             <Card className="text-center mahindra-car-card" onClick={() => handleCardClick(car.url)} style={{ cursor: 'pointer' }}>
//                                 <div className="mahindra-card-img-wrapper">
//                                     <Card.Img variant="top" src={car.image} alt={car.name} />
//                                 </div>
//                                 <Card.Body className="mahindra-card-body">
//                                     <Card.Title>{car.name}</Card.Title>
//                                     <Card.Text>{car.price}</Card.Text>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                     ))}
//                 </Row>
//             </Container>

//             {/* View All Button */}
//             <Container fluid className="d-flex justify-content-center my-4">
//                 <Button variant="primary" className="view-all-button" onClick={handleViewAllClick}>
//                     View All
//                 </Button>
//             </Container>
//         </>
//     );
// };

// export default CarsMahindra;



import React, { useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import './CarsMahindra.css'; 

const CarsMahindra = () => {
    const [showAll, setShowAll] = useState(false); // State to toggle view

    const cars = [
        { name: 'Alturas G4', price: '₹13.62 - 17.42 Lakh', image: 'Images/alturas.jpeg', url: '/alturas' },
        { name: 'XUV 700', price: '₹6.13 - 10.15 Lakh', image: 'Images/xuv700.webp', url: '/xuv700' },
        { name: 'Marzoo', price: '₹11.35 - 17.60 Lakh', image: 'Images/marzoo.jpg', url: '/marzoo' },
    ];

    // Additional cars to show when "View All" is clicked
    const additionalCars = [
        { name: 'Scorpio', price: '₹13.62 - 17.42 Lakh', image: 'Images/scorpio.webp', url: '/scorpio' },
        { name: 'XUV 3XO', price: '₹6.13 - 10.15 Lakh', image: 'Images/xuv 3xo.webp', url: '/xuv3xo' },
        { name: 'Thar.E', price: '₹11.35 - 17.60 Lakh', image: 'Images/thare.jpg', url: '/thar' },
    ];

const navigate = useNavigate();
    const handleCardClick = (url) => {
        // Navigate to the specific car details page if a car card is clicked
        navigate(url);
    };

    const handleViewAllClick = () => {
        // Toggle the state to show/hide additional cars
        setShowAll((prev) => !prev);
    };

    return (
        <>
            <Container fluid className="compact-container">
                <h2 className="my-4">Cars from Mahindra</h2>
            </Container>

            <Container fluid className="compact-container">
                <Row className="g-4">
                    {cars.map((car, index) => (
                        <Col md={4} sm={12} key={index} className="d-flex justify-content-center">
                            <Card className="text-center mahindra-car-card" onClick={() => handleCardClick(car.url)} style={{ cursor: 'pointer' }}>
                                <div className="mahindra-card-img-wrapper">
                                    <Card.Img variant="top" src={car.image} alt={car.name} />
                                </div>
                                <Card.Body className="mahindra-card-body">
                                    <Card.Title>{car.name}</Card.Title>
                                    <Card.Text>{car.price}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}

                    {/* Conditionally render additional cars */}
                    {showAll && additionalCars.map((car, index) => (
                        <Col md={4} sm={12} key={index} className="d-flex justify-content-center">
                            <Card className="text-center mahindra-car-card" onClick={() => handleCardClick(car.url)} style={{ cursor: 'pointer' }}>
                                <div className="mahindra-card-img-wrapper">
                                    <Card.Img variant="top" src={car.image} alt={car.name} />
                                </div>
                                <Card.Body className="mahindra-card-body">
                                    <Card.Title>{car.name}</Card.Title>
                                    <Card.Text>{car.price}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            {/* View All Button */}
            <Container fluid className="d-flex justify-content-center my-4">
                <Button variant="primary" className="view-all-button" onClick={handleViewAllClick}>
                    {showAll ? 'View Less' : 'View All'} {/* Toggle button text */}
                </Button>
            </Container>
        </>
    );
};

export default CarsMahindra;
