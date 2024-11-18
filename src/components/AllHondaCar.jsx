import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './csshondacar.css'; // Import the CSS
import "bootstrap/dist/css/bootstrap.min.css";

const AllHondaCar = () => {
  const navigate = useNavigate();

  const cards = [
    { id: 1, name: "Honda City", image: "/Images/hondacity.webp", price: "13.40 Lakh-18.60 Lakh", url: "/hondacity" },
    { id: 2, name: "Honda HRV", image: "/Images/hondahrv.webp", price: "14 Lakh*", url: "/hondahrv" },
    { id: 3, name: "Honda Amaze", image: "/Images/amaze.jpg", price: "08.3- Lakh-11.31 Lakh", url: "/amaze" },
    { id: 4, name: "Honda ", image: "https://via.placeholder.com/150", price: "$400", url: "/product/400" },
    { id: 5, name: "Honda Tucson", image: "https://via.placeholder.com/150", price: "$500", url: "/product/500" },
    { id: 6, name: "Honda Alcazar", image: "https://via.placeholder.com/150", price: "$600", url: "/product/600" },
    { id: 7, name: "Honda Aura", image: "https://via.placeholder.com/150", price: "$700", url: "/product/700" },
    { id: 8, name: "Honda Santro", image: "https://via.placeholder.com/150", price: "$800", url: "/product/800" },
    { id: 9, name: "Honda Elantra", image: "https://via.placeholder.com/150", price: "$900", url: "/product/900" },
    { id: 10, name: "Honda Kona", image: "https://via.placeholder.com/150", price: "$1000", url: "/product/1000" },
  ];

  const handleCardClick = (url) => {
    navigate(url); // Navigate to the URL associated with the card
  };

  return (
    <Container className="my-4 all-kia-cars">
      <Row>
        {cards.map((card) => (
          <Col
            key={card.id}
            xs={6}  // Show 2 cards per row on mobile (50% width)
            sm={6}  // Show 2 cards per row on small screens (tablets)
            md={4}  // Show 3 cards per row on medium screens (laptops)
            lg={4}  // Show 3 cards per row on large screens (desktops)
            className="mb-4"
          >
            <Card
              className="h-100 shadow-sm text-center"
              onClick={() => handleCardClick(card.url)} // Navigate using the card's URL
              style={{ cursor: "pointer" }}
            >
              {/* Add fallback mechanism for the image */}
              <Card.Img 
                variant="top" 
                src={card.image} 
                alt={card.name}
                onError={(e) => (e.target.src = "https://via.placeholder.com/150")} 
              />
              <Card.Body>
                <Card.Title>{card.name}</Card.Title>
                <Card.Text>{card.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllHondaCar;
