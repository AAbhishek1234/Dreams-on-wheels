import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './csstoyota.css'; // Import the CSS
import "bootstrap/dist/css/bootstrap.min.css";

const AllToyota = () => {
  const navigate = useNavigate();

  const cards = [
    { id: 1, name: "Toyota Legender", image: "/Images/legender.webp", price: "51.65 Lakh-56.35 Lakh", url: "/legender" },
    { id: 2, name: "Toyota Fortuner", image: "/Images/fortuner.avif", price: "33.00 Lakh-51.00 Lakh", url: "/fortuner" },
    { id: 3, name: "Toyota Glanza", image: "/Images/glanza.png", price: "06.80 Lakh-10 Lakh*", url: "/glanza" },
    { id: 4, name: "Toyota Verna", image: "https://via.placeholder.com/150", price: "$400", url: "/product/400" },
    { id: 5, name: "Toyota Tucson", image: "https://via.placeholder.com/150", price: "$500", url: "/product/500" },
    { id: 6, name: "Toyota Alcazar", image: "https://via.placeholder.com/150", price: "$600", url: "/product/600" },
    { id: 7, name: "Toyota Aura", image: "https://via.placeholder.com/150", price: "$700", url: "/product/700" },
    { id: 8, name: "Toyota Santro", image: "https://via.placeholder.com/150", price: "$800", url: "/product/800" },
    { id: 9, name: "Toyota Elantra", image: "https://via.placeholder.com/150", price: "$900", url: "/product/900" },
    { id: 10, name: "Toyota Kona", image: "https://via.placeholder.com/150", price: "$1000", url: "/product/1000" },
  ];

  const handleCardClick = (url) => {
    navigate(url); // Navigate to the URL associated with the card
  };

  return (
    <Container className="my-4 all-toyota-cars">
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

export default AllToyota;