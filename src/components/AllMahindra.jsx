import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './cssmahindraall.css'; // Import the CSS
import "bootstrap/dist/css/bootstrap.min.css";

const AllMahindra = () => {
  const navigate = useNavigate();

  const cards = [
    { id: 1, name: "Mahindra Creta", image: "/Images/creta.jpg", price: "12.80 Lakh- 23.94 Lakh", url: "/creta" },
    { id: 3, name: "Mahindra i20", image: "/Images/i20.png", price: "07 Lakh-11.20 Lakh", url: "/i20" },
    { id: 4, name: "Mahindra Verna", image: "/Images/verna.png", price: "$400", url: "/" },
    { id: 5, name: "Mahindra  Thar 5-Door", image: "/Images/tucson.avif", price: "$500", url: "/ Thar 5-Door" },
    { id: 6, name: "Mahindra Scorpio EV", image: "/Images/alcazar.webp", price: "$600", url: "/Scorpio EV" },
    { id: 7, name: "Mahindra  KUV100 NXT", image: "/Images/aura.webp", price: "7.50 Lakh-10.60 Lakh", url: "/ KUV100 NXT" },
    { id: 8, name: "Mahindra XUV400 EV", image: "/Images/santro.jpg", price: "$800", url: "/XUV400 EV" },
    { id: 9, name: "Mahindra e-Verito", image: "/Images/elantra.jpg", price: "$900", url: "/e-Verito" },
    { id: 10, name: "Mahindra  Xylo", image: "/Images/kona.jpeg", price: "$1000", url: "/ Xylo" },
    { id: 2, name: "Mahindra NuvoSport", image: "/Images/venue.webp", price: "$200", url: "/NuvoSport" },
  ];

  const handleCardClick = (url) => {
    navigate(url); // Navigate to the URL associated with the card
  };

  return (
    <Container className="my-4 all-mahindra-cars">
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

export default AllMahindra;
