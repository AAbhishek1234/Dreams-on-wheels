import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 
import './Bajaj.css'; 

const Bajaj = () => {
    const bikes = [
        { name: 'Bajaj Freedom', price: '₹13.62 - 17.42 Lakh', image: 'Images/bajajfreedom125.webp', url: '/bajajfreedom' },
        { name: 'Bajaj Dominar', price: '₹6.13 - 10.15 Lakh', image: 'Images/bajajdominar250.jpeg', url: '/bajajdominar' },
        { name: 'Bajaj Pulsar', price: '₹11.35 - 17.60 Lakh', image: 'Images/pulsar.png', url: '/bajajpulsar' },
    ];

    const navigate = useNavigate();

    const handleCardClick = (url) => {
        navigate(url);
    };

    const handleViewAllClick = () => {
        navigate('/all-bajaj-bikes'); // Adjust this route to your "View All" page
    };

    return (
        <>
            <Container fluid className="compact-container">
                <h2 className="my-4">Bikes from Bajaj</h2>
            </Container>

            <Container fluid className="compact-container">
                <Row className="g-4">
                    {bikes.map((bike, index) => (
                        <Col md={4} sm={12} key={index} className="d-flex justify-content-center">
                            <Card className="text-center bajaj-bike-card" onClick={() => handleCardClick(bike.url)} style={{ cursor: 'pointer' }}>
                                <div className="bajaj-card-img-wrapper">
                                    <Card.Img variant="top" src={bike.image} alt={bike.name} />
                                </div>
                                <Card.Body className="bajaj-card-body">
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

export default Bajaj;
 