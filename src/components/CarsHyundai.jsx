import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 
import './CarsHyundai.css'; 

const CarsHyundai = () => {
    const cars = [
        { name: 'Hyundai i20', price: '₹07 Lakh - 11.20 Lakh', image: 'Images/i20.png', url: '/i20' },
        { name: 'Hyundai Aura', price: '₹7.50 Lakh - 10.60 Lakh', image: 'Images/aura.webp', url: '/aura' },
        { name: 'Hyundai Creta', price: '₹12.80 - 23.94 Lakh', image: 'Images/creta.jpg', url: '/creta' },
    ];

    const navigate = useNavigate();

    const handleCardClick = (url) => {
        navigate(url);
    };

    const handleViewAllClick = () => {
        navigate('/all-hyundai-cars'); // Adjust this route to your "View All" page
    };

    return (
        <>
            <Container fluid className="compact-container">
                <h2 className="my-4">Cars from Hyundai</h2>
            </Container>

            <Container fluid className="compact-container">
                <Row className="g-4">
                    {cars.map((car, index) => (
                        <Col md={4} sm={12} key={index} className="d-flex justify-content-center">
                            <Card className="text-center hyundai-car-card" onClick={() => handleCardClick(car.url)} style={{ cursor: 'pointer' }}>
                                <div className="hyundai-card-img-wrapper">
                                    <Card.Img variant="top" src={car.image} alt={car.name} />
                                </div>
                                <Card.Body className="hyundai-card-body">
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

export default CarsHyundai;
