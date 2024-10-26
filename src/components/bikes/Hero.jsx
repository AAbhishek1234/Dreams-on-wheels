import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 
import './Hero.css'; 

const Hero = () => {
    const bikes = [
        { name: ' Hero Xtream125', price: '₹13.62 - 17.42 Lakh', image: 'Images/xtream125.jpg', url: '/xtream125' },
        { name: 'splendor Xtech 2.0', price: '₹6.13 - 10.15 Lakh', image: 'Images/splendorXtec2.0.jpg', url: '/RoyalEnfield Gurella 450' },
        { name: 'Passion Pro', price: '₹11.35 - 17.60 Lakh', image: 'Images/passionpro.webp', url: '/New ClassicEnfield' },
    ];

    const navigate = useNavigate();

    const handleCardClick = (url) => {
        navigate(url);
    };

    const handleViewAllClick = () => {
        navigate('/all-hero-bikes'); // Adjust this route to your "View All" page
    };

    return (
        <>
            <Container fluid className="compact-container">
                <h2 className="my-4">Bikes from Hero</h2>
            </Container>

            <Container fluid className="compact-container">
                <Row className="g-4">
                    {bikes.map((bike, index) => (
                        <Col md={4} sm={12} key={index} className="d-flex justify-content-center">
                            <Card className="text-center hero-bike-card" onClick={() => handleCardClick(bike.url)} style={{ cursor: 'pointer' }}>
                                <div className="hero-card-img-wrapper">
                                    <Card.Img variant="top" src={bike.image} alt={bike.name} />
                                </div>
                                <Card.Body className="hero-card-body">
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

export default Hero;
 