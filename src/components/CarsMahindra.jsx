import React, { useState, useEffect } from 'react';
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 
import './CarsMahindra.css'; 

const CarsMahindra = () => {
    const cars = [
        { name: 'Mahindra Scorpio', price: '₹13.62 - 17.42 Lakh', image: 'Images/scorpio.webp', url: '/scorpio' },
        { name: 'Mahindra XUV 3XO', price: '₹6.13 - 10.15 Lakh', image: 'Images/xuv 3xo.webp', url: '/xuv3xo' },
        { name: 'Mahindra Thar', price: '₹11.35 - 17.60 Lakh', image: 'Images/thar.webp', url: '/thar' },
        { name: 'Mahindra BE.05', price: '₹X - Y Lakh', image: 'Images/BE.05.webp', url: '/car4' },
        { name: 'Mahindra Bolero Neo', price: '₹X - Y Lakh', image: 'Images/boleroneo.webp', url: '/car5' },
        { name: 'Mahindra XUV700', price: '₹X - Y Lakh', image: 'Images/xuv700.webp', url: '/car6' },
        { name: 'Mahindra KUV100 NXT', price: '₹X - Y Lakh', image: 'Images/kuv100.jpg', url: '/car7' },
        { name: 'Mahindra Marazzo', price: '₹7.51 - 13.04 Lakh', image: 'Images/marzoo.jpg', url: '/car8' },
        { name: 'Mahindra Thar.e', price: '₹X - Y Lakh', image: 'Images/thare.jpg', url: '/car9' },
    ];

    const navigate = useNavigate();
    const [slideIndex, setSlideIndex] = useState(0); 
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Track if mobile view

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const chunkArray = (arr, size) => {
        const chunkedArr = [];
        for (let i = 0; i < arr.length; i += size) {
            chunkedArr.push(arr.slice(i, i + size));
        }
        return chunkedArr;
    };

    // Grouping logic: 3 items per slide for desktop, 1 per slide for mobile
    const carChunks = chunkArray(cars, isMobile ? 1 : 3);

    const handleCardClick = (url) => {
        navigate(url);
    };

    return (
        <>
            <Container>
                <h2 className="my-4">Cars from Mahindra</h2>
            </Container>
            <Container>
                <Carousel
                    activeIndex={slideIndex}
                    onSelect={setSlideIndex}
                    interval={1000} 
                >
                    {carChunks.map((chunk, idx) => (
                        <Carousel.Item key={idx}>
                            <Row>
                                {chunk.map((car, index) => (
                                    <Col 
                                        md={4} 
                                        sm={12} 
                                        key={index} 
                                        className="d-flex justify-content-center"
                                    >
                                        <Card 
                                            className="text-center car-card" 
                                            onClick={() => handleCardClick(car.url)} 
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <div className="card-img-wrapper">
                                                <Card.Img variant="top" src={car.image} alt={car.name} />
                                            </div>
                                            <Card.Body>
                                                <Card.Title>{car.name}</Card.Title>
                                                <Card.Text>{car.price}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
        </>
    );
};

export default CarsMahindra;
