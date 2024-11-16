import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 
import './Honda.css'; 

const Honda = () => {
    const cars = [
        { name: 'Honda City', price: '13.40 Lakh - 18.60 Lakh', image: 'Images/hondacity.webp', url: '/hondacity' },
        
        { name: 'Honda HRV', price: '14 Lakh*', image: 'Images/hondahrv.webp', url: '/hondahrv' },
        { name: 'Honda Amaze', price: '08.30 Lakh-11.31 Lakh', image: 'Images/amaze.jpg', url: '/amaze' },
    ];

    const navigate = useNavigate();

    const handleCardClick = (url) => {
        navigate(url);
    };

    const handleViewAllClick = () => {
        navigate('/all-Honda-cars'); // Adjust this route to your "View All" page
    };

    return (
        <>
            <Container fluid className="compact-container">
                <h2 className="my-4">Cars from Honda</h2>
            </Container>

            <Container fluid className="compact-container">
                <Row className="g-4">
                    {cars.map((car, index) => (
                        <Col md={4} sm={12} key={index} className="d-flex justify-content-center">
                            <Card className="text-center honda-car-card" onClick={() => handleCardClick(car.url)} style={{ cursor: 'pointer' }}>
                                <div className="honda-card-img-wrapper">
                                    <Card.Img variant="top" src={car.image} alt={car.name} />
                                </div>
                                <Card.Body className="honda-card-body">
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
                                         View All
                                          </Button>
           </Container>
        </>
    );
};

export default Honda;
