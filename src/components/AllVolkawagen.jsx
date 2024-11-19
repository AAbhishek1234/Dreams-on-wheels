import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./cssVolkswagen.css"; // Import the CSS
import "bootstrap/dist/css/bootstrap.min.css";

const AllVolkawagen = () => {
  const navigate = useNavigate();

  const cards = [
    {
      id: 1,
      name: "Volkawagen Cross Polo",
      image: "/Images/crosspolo.jpg",
      price: "7.50 Lakh",
      url: "/crosspolo",
    },
    {
      id: 3,
      name: "Volkawagen Taigun",
      image: "/Images/taigun.jpg",
      price: "13.55Lakh-23.60Lakh",
      url: "/i20",
    },
    {
      id: 4,
      name: "Volkawagen Virtus Gt Line",
      image: "/Images/virtusgt.webp",
      price: "14.07 Lakh*",
      url: "/virtusgt",
    },
    {
      id: 5,
      name: "Volkawagen  Passat",
      image: "/Images/tucson.avif",
      price: "$500",
      url: "/ Passat",
    },
    {
      id: 6,
      name: "Volkawagen Arteon",
      image: "/Images/alcazar.webp",
      price: "$600",
      url: "/Arteon",
    },
    {
      id: 7,
      name: "Volkawagen  T-Roc",
      image: "/Images/aura.webp",
      price: "7.50 Lakh-10.60 Lakh",
      url: "/ T-Roc",
    },
    {
      id: 8,
      name: "Volkawagen Atlas",
      image: "/Images/santro.jpg",
      price: "$800",
      url: "/Atlas",
    },
    {
      id: 9,
      name: "Volkawagen ID.4",
      image: "/Images/elantra.jpg",
      price: "$900",
      url: "/ID.4",
    },
    {
      id: 10,
      name: "Volkawagen  ID. Buzz",
      image: "/Images/kona.jpeg",
      price: "$1000",
      url: "/ ID. Buzz",
    },
    {
      id: 2,
      name: "Volkawagen e-Golf",
      image: "/Images/venue.webp",
      price: "$200",
      url: "/e-Golf",
    },
  ];

  const handleCardClick = (url) => {
    navigate(url); // Navigate to the URL associated with the card
  };

  return (
    <Container className="my-4 all-volkawagen-cars">
      <Row>
        {cards.map((card) => (
          <Col
            key={card.id}
            xs={6} // Show 2 cards per row on mobile (50% width)
            sm={6} // Show 2 cards per row on small screens (tablets)
            md={4} // Show 3 cards per row on medium screens (laptops)
            lg={4} // Show 3 cards per row on large screens (desktops)
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
                onError={(e) =>
                  (e.target.src = "https://via.placeholder.com/150")
                }
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

export default AllVolkawagen;
