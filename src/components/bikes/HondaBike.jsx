import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 
import './HondaBike.css'; 

const HondaBike = () => {
    const bikes = [
        { name: 'Honda SP125', price: '₹13.62 - 17.42 Lakh', image: 'Images/hondsp125.avif', url: '/honda125' },
        { name: 'Honda CB350', price: '₹6.13 - 10.15 Lakh', image: 'Images/hondacb350.jpg', url: '/hondacb350' },
        { name: 'Honda CB300F', price: '₹11.35 - 17.60 Lakh', image: 'Images/Honda-CB300F.webp', url: '/hondacb300f' },
    ];

    const navigate = useNavigate();

    const handleCardClick = (url) => {
        navigate(url);
    };

    const handleViewAllClick = () => {
        navigate('/all-honda-bikes'); // Adjust this route to your "View All" page
    };

    return (
        <>
            <Container fluid className="compact-container">
                <h2 className="my-4">Bikes from Honda</h2>
            </Container>

            <Container fluid className="compact-container">
                <Row className="g-4">
                    {bikes.map((bike, index) => (
                        <Col md={4} sm={12} key={index} className="d-flex justify-content-center">
                            <Card className="text-center honda-bike-card" onClick={() => handleCardClick(bike.url)} style={{ cursor: 'pointer' }}>
                                <div className="honda-card-img-wrapper">
                                    <Card.Img variant="top" src={bike.image} alt={bike.name} />
                                </div>
                                <Card.Body className="honda-card-body">
                                    <Card.Title>{bike.name}</Card.Title>
                                    <Card.Text>{bike.price}</Card.Text>
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

export default HondaBike;
 