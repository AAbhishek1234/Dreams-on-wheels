import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 
import './Tvs.css'; 

const Tvs = () => {
    const bikes = [
        { name: 'Tvs Raider125', price: '₹13.62 - 17.42 Lakh', image: 'Images/raider125.jpg', url: '/raider125' },
        { name: 'Tvs Ronin', price: '₹6.13 - 10.15 Lakh', image: 'Images/ronin.webp', url: '/tvsronin' },
        { name: 'Tvs ApacheRTR 160', price: '₹11.35 - 17.60 Lakh', image: 'Images/Apachertr160.webp', url: '/apachertr160' },
    ];

    const navigate = useNavigate();

    const handleCardClick = (url) => {
        navigate(url);
    };

    const handleViewAllClick = () => {
        navigate('/all-tvs-bikes'); // Adjust this route to your "View All" page
    };

    return (
        <>
            <Container fluid className="compact-container">
                <h2 className="my-4">Bikes from Tvs</h2>
            </Container>

            <Container fluid className="compact-container">
                <Row className="g-4">
                    {bikes.map((bike, index) => (
                        <Col md={4} sm={12} key={index} className="d-flex justify-content-center">
                            <Card className="text-center tvs-bike-card" onClick={() => handleCardClick(bike.url)} style={{ cursor: 'pointer' }}>
                                <div className="tvs-card-img-wrapper">
                                    <Card.Img variant="top" src={bike.image} alt={bike.name} />
                                </div>
                                <Card.Body className="tvs-card-body">
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

export default Tvs;
 