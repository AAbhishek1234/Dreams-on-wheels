import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './csstata.css'; // Import the CSS
import "bootstrap/dist/css/bootstrap.min.css";

const AllTata = () => {
  const navigate = useNavigate();

  const cards = [
    { id: 1, name: "Tata Nexon", image: "/Images/nexon.webp", price: "09.22 Lakh- 18.40 Lakh", url: "/nexon" },

    { id: 4, name: "Tata Curvv", image: "/Images/curvv.jpg", price: "11.59 Lakh-22.45 Lakh", url: "/curvv" },
    { id: 5, name: "Tata  Tigor", image: "/Images/tucson.avif", price: "$500", url: "/Tigor" },
    { id: 6, name: "Tata  Punch", image: "/Images/alcazar.webp", price: "$600", url: "/Punch" },
    { id: 7, name: "Tata Safari", image: "/Images/aura.webp", price: "7.50 Lakh-10.60 Lakh", url: "Safari" },
    { id: 8, name: "Tata Harrier", image: "/Images/santro.jpg", price: "$800", url: "/Harrier" },
    { id: 9, name: "Tata  Tiago", image: "/Images/elantra.jpg", price: "$900", url: "/ Tiago" },
    { id: 10, name: "Tata Nano", image: "/Images/kona.jpeg", price: "$1000", url: "/Nano" },
    { id: 2, name: "Tata Indigo", image: "/Images/venue.webp", price: "$200", url: "/Indigo" },
    { id: 3, name: "Tata Altroz", image: "/Images/altroz.webp", price: "07.53 Lakh-12.85 Lakh", url: "/altroz" },
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
