import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './cssmg.css'; // Import the CSS
import "bootstrap/dist/css/bootstrap.min.css";

const AllMg = () => {
  const navigate = useNavigate();

  const cards = [
    { id: 1, name: "MG Comet Ev", image: "/Images/mgcomet.webp", price: "07.40 Lakh- 11.00 Lakh", url: "/mgcomet" },
    { id: 3, name: "MG Windsor Ev", image: "/Images/mgwindsor.webp", price: "15.70 Lakh-18.10 Lakh", url: "/mgwindsor" },
    { id: 4, name: "MG Hector", image: "/Images/mghector.jpg", price: "16.30Lakh-27.00 Lakh", url: "/mghector" },
    { id: 5, name: "MG Astor", image: "/Images/tucson.avif", price: "$500", url: "/Astor" },
    { id: 6, name: "MG ZS EV", image: "/Images/alcazar.webp", price: "$600", url: "/ZS EV" },
    { id: 7, name: "MG  Gloster", image: "/Images/aura.webp", price: "7.50 Lakh-10.60 Lakh", url: "/ Gloster" },
    { id: 8, name: "MG RX5", image: "/Images/santro.jpg", price: "$800", url: "/RX5" },
    { id: 9, name: "MG Marvel R", image: "/Images/elantra.jpg", price: "$900", url: "/Marvel R" },
    { id: 10, name: "MG  HS", image: "/Images/kona.jpeg", price: "$1000", url: "/ HS" },
    { id: 2, name: "MG Cyberster", image: "/Images/venue.webp", price: "$200", url: "/Cyberster" },
  ];

  const handleCardClick = (url) => {
    navigate(url); // Navigate to the URL associated with the card
  };

  return (
    <Container className="my-4 all-mg-cars">
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

export default AllMg;
