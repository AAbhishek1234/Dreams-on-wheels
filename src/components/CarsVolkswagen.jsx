import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 
import './CarsVolkswagen.css'; 

const CarsVolkswagen = () => {
    const cars = [
        { name: 'Volkswagen Cross Polo', price: '7.50 Lakh', image: 'Images/crosspolo.jpg', url: '/crosspolo' },
        { name: 'Volkswagen Taigun', price: '13.55 Lakh - 23.60 Lakh', image: 'Images/taigun.jpg', url: '/taigun' },
        { name: 'Volkswagen Virtus GT Line', price: ' 14.07 Lakh*', image: 'Images/virtusgt.webp', url: '/virtusgt' },
    ];

    const navigate = useNavigate();

    const handleCardClick = (url) => {
        navigate(url);
    };

    const handleViewAllClick = () => {
        navigate('/all-volkswagen-cars'); // Adjust this route to your "View All" page
    };

    return (
        <>
            <Container fluid className="compact-container">
                <h2 className="my-4">Cars from Volkswagen</h2>
            </Container>

            <Container fluid className="compact-container">
                <Row className="g-4">
                    {cars.map((car, index) => (
                        <Col md={4} sm={12} key={index} className="d-flex justify-content-center">
                            <Card className="text-center volkswagen-car-card" onClick={() => handleCardClick(car.url)} style={{ cursor: 'pointer' }}>
                                <div className="volkswagen-card-img-wrapper">
                                    <Card.Img variant="top" src={car.image} alt={car.name} />
                                </div>
                                <Card.Body className="volkswagen-card-body">
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

export default CarsVolkswagen;
