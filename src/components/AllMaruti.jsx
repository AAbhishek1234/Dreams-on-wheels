import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './cssallmaruti.css'; // Import the CSS
import "bootstrap/dist/css/bootstrap.min.css";

const  AllMaruti = () => {
  const navigate = useNavigate();

  const cards = [
    { id: 1, name: "Maruti Suzuki Creta", image: "/Images/creta.jpg", price: "12.80 Lakh- 23.94 Lakh", url: "/creta" },
    { id: 3, name: "Maruti Suzuki i20", image: "/Images/i20.png", price: "07 Lakh-11.20 Lakh", url: "/i20" },
    { id: 4, name: "Maruti Suzuki Verna", image: "/Images/verna.png", price: "$400", url: "/product/400" },
    { id: 5, name: "Maruti Suzuki Baleno", image: "/Images/tucson.avif", price: "$500", url: "/Baleno" },
    { id: 6, name: "Maruti Suzuki Grand Vitara", image: "/Images/alcazar.webp", price: "$600", url: "/Grand Vitara" },
    { id: 7, name: "Maruti Suzuki Invicto", image: "/Images/aura.webp", price: "7.50 Lakh-10.60 Lakh", url: "/Invicto" },
    { id: 8, name: "Maruti Suzuki Ertiga", image: "/Images/santro.jpg", price: "$800", url: "/Ertiga" },
    { id: 9, name: "Maruti Suzuki Dzire", image: "/Images/elantra.jpg", price: "$900", url: "/Dzire" },
    { id: 10, name: "Maruti Suzuki Swift", image: "/Images/kona.jpeg", price: "$1000", url: "/Swift" },
    { id: 2, name: "Maruti Suzuki Alto K10", image: "/Images/venue.webp", price: "$200", url: "/Alto K10" },
  ];

  const handleCardClick = (url) => {
    navigate(url); // Navigate to the URL associated with the card
  };

  return (
    <Container className="my-4 all-maruti-cars">
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

export default AllMaruti;
