import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './csstata.css'; // Import the CSS
import "bootstrap/dist/css/bootstrap.min.css";

const AllTata = () => {
  const navigate = useNavigate();

  const cards = [
    { id: 1, name: "Hyundai Creta", image: "/Images/creta.jpg", price: "12.80 Lakh- 23.94 Lakh", url: "/creta" },
    { id: 3, name: "Hyundai i20", image: "/Images/i20.png", price: "07 Lakh-11.20 Lakh", url: "/i20" },
    { id: 4, name: "Hyundai Verna", image: "/Images/verna.png", price: "$400", url: "/product/400" },
    { id: 5, name: "Hyundai Tucson", image: "/Images/tucson.avif", price: "$500", url: "/product/500" },
    { id: 6, name: "Hyundai Alcazar", image: "/Images/alcazar.webp", price: "$600", url: "/product/600" },
    { id: 7, name: "Hyundai Aura", image: "/Images/aura.webp", price: "7.50 Lakh-10.60 Lakh", url: "/aura" },
    { id: 8, name: "Hyundai Santro", image: "/Images/santro.jpg", price: "$800", url: "/product/800" },
    { id: 9, name: "Hyundai Elantra", image: "/Images/elantra.jpg", price: "$900", url: "/product/900" },
    { id: 10, name: "Hyundai Kona", image: "/Images/kona.jpeg", price: "$1000", url: "/product/1000" },
    { id: 2, name: "Hyundai Venue", image: "/Images/venue.webp", price: "$200", url: "/product/200" },
  ];

  const handleCardClick = (url) => {
    navigate(url); // Navigate to the URL associated with the card
  };

  return (
    <Container className="my-4 all-tata-cars">
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

export default AllTata;
