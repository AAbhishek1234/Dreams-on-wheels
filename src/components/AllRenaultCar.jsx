import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './cssRenault.css'; 
import "bootstrap/dist/css/bootstrap.min.css";

const AllRenaultCar = () => {
  const navigate = useNavigate();

  const cards = [
    { id: 1, name: "Renault Fluence", image: "/Images/fluence.png", price: "13.70 Lakh", url: "/fluence" },
    { id: 2, name: "Renault Kiger", image: "/Images/kiger.jpg", price: "06.70 Lakh-13.15 Lakh", url: "/kiger" },
    { id: 3, name: "Renault Triber", image: "/Images/triber.jpg", price: "06.00 Lakh-09.00 Lakh", url: "/triber" },
    { id: 4, name: "Renault Duster", image: "https://via.placeholder.com/150", price: "$400", url: "/Duster" },
    { id: 5, name: "Renault Clio", image: "https://via.placeholder.com/150", price: "$500", url: "/Clio" },
    { id: 6, name: "Renault Captur", image: "https://via.placeholder.com/150", price: "$600", url: "/Captur" },
    { id: 7, name: "Renault  Arkana", image: "https://via.placeholder.com/150", price: "$700", url: "/ Arkana" },
    { id: 8, name: "Renault  Austral", image: "https://via.placeholder.com/150", price: "$800", url: "/  Austral" },
    { id: 9, name: "Renault Elantra", image: "https://via.placeholder.com/150", price: "$900", url: "/product/900" },
    { id: 10, name: "Renault Kadjar", image: "https://via.placeholder.com/150", price: "$1000", url: "/Kadjar" },
  ];

  const handleCardClick = (url) => {
    navigate(url); // Navigate to the URL associated with the card
  };

  return (
    <Container className="my-4 all-renault-cars">
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

export default AllRenaultCar;
