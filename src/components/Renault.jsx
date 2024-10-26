import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 
import './Renault.css'; 

const Kia = () => {
    const cars = [
        { name: 'Renault Fluence', price: '₹13.62 - 17.42 Lakh', image: 'Images/fluence.png', url: '/fluence' },
        { name: 'Renault Kiger', price: '₹11.35 - 17.60 Lakh', image: 'Images/kiger.jpg', url: '/kiger' },
        { name: 'Renault Triber', price: '₹6.13 - 10.15 Lakh', image: 'Images/triber.jpg', url: '/triber' },
    ];

    const navigate = useNavigate();

    const handleCardClick = (url) => {
        navigate(url);
    };

    const handleViewAllClick = () => {
        navigate('/all-renault-cars'); // Adjust this route to your "View All" page
    };

    return (
        <>
            <Container fluid className="compact-container">
                <h2 className="my-4">Cars from Renault</h2>
            </Container>

            <Container fluid className="compact-container">
                <Row className="g-4">
                    {cars.map((car, index) => (
                        <Col md={4} sm={12} key={index} className="d-flex justify-content-center">
                            <Card className="text-center renault-car-card" onClick={() => handleCardClick(car.url)} style={{ cursor: 'pointer' }}>
                                <div className="renault-card-img-wrapper">
                                    <Card.Img variant="top" src={car.image} alt={car.name} />
                                </div>
                                <Card.Body className="renault-card-body">
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

export default Kia;
