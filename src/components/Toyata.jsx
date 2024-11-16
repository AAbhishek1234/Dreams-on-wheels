import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 
import './Toyota.css'; 

const Mg = () => {
    const cars = [
        { name: 'Toyota Legender', price: '51.65 Lakh - 56.35 Lakh', image: 'Images/legender.webp', url: '/legender' },
        { name: 'Toyota Fortuner', price: '33.00 Lakh- 51.00 Lakh', image: 'Images/fortuner.avif', url: '/fortuner' },
        { name: 'Toyota Glanza', price: '06.80  Lakh- 10 Lakh*', image: 'Images/glanza.png', url: '/glanza' },
       
    ];

    const navigate = useNavigate();

    const handleCardClick = (url) => {
        navigate(url);
    };

    const handleViewAllClick = () => {
        navigate('/all-toyota-cars'); // Adjust this route to your "View All" page
    };

    return (
        <>
            <Container fluid className="compact-container">
                <h2 className="my-4">Cars from Toyota</h2>
            </Container>

            <Container fluid className="compact-container">
                <Row className="g-4">
                    {cars.map((car, index) => (
                        <Col md={4} sm={12} key={index} className="d-flex justify-content-center">
                            <Card className="text-center toyota-car-card" onClick={() => handleCardClick(car.url)} style={{ cursor: 'pointer' }}>
                                <div className="toyota-card-img-wrapper">
                                    <Card.Img variant="top" src={car.image} alt={car.name} />
                                </div>
                                <Card.Body className="toyota-card-body">
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

export default Mg;
