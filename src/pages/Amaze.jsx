import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./amaze.css";
import Footer from "../components/Footer";

const Amaze = () => {
  const navigate = useNavigate();
  const handleNavigate = (url) => {
    navigate(url);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container fluid className="car-details-container my-4">
        <Card className="car-card shadow-sm">
          <Row className="align-items-center">
            <Col md={5} xs={12}>
              <Card.Img
                src="Images/amaze.jpg"
                alt="Mahindra Alturas G4"
                className="car-image"
              />
            </Col>
            <Col md={7} xs={12} className="p-4">
              <div className="car-info">
                <h2 className="car-title"> Honda Amaze</h2>
                <p className="rating">
                  <span className="stars">★★★★★</span> 575 Reviews
                </p>
                <p className="car-description">
                  The Honda Amaze is a popular subcompact sedan in India, known
                  for its spacious interior, fuel efficiency, and attractive
                  pricing. It is available in both petrol and diesel engine
                  options.
                </p>
                <p className="price"> 08.30 Lakh-11.31 Lakh</p>
                <Button className="offer-button">View All Offers</Button>
              </div>
            </Col>
          </Row>
        </Card>

        <h2 className="my-4 spec-title">Key Specifications and Features</h2>
        <Table className="spec-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Engine Type</td>
              <td>1.2L i-VTEC Petrol Engine,1.5L i-DTEC Diesel Engine.</td>
            </tr>
            <tr>
              <td>Seating Capacity</td>
              <td>The Honda Amaze can comfortably seat 5 passengers </td>
            </tr>
            <tr>
              <td>Transmission</td>
              <td> 5-speed manual and CVT options.</td>
            </tr>
            <tr>
              <td>Fuel Type</td>
              <td> Petrol,Diesel</td>
            </tr>
            <tr>
              <td>Mileage</td>
              <td>
                
                Petrol: Around 18-19 km/l (manual) and 19-20 km/l (CVT),Diesel:
                Around 24-25 km/l.
              </td>
            </tr>
            <tr>
              <td>Price Range</td>
              <td>08.30 Lakh-11.31 Lakh</td>
            </tr>
            <tr>
              <td>Safety rating</td>
              <td>
              ABS with EBD, Dual Front Airbags, Rear Parking Sensors, Reverse Camera.
              </td>
            </tr>
            <tr>
              <td>Body style</td>
              <td>Sport Utility Vehicle</td>
            </tr>
            <tr>
              <td>Acceleration</td>
              <td>
                0-100 km/h Acceleration: Around 12-13 seconds depend on petrol
                variant .
              </td>
            </tr>
            <tr>
              <td>Top Speed</td>
              <td>Approximately 160 km/h . </td>
            </tr>

            <tr>
              <td>Available Colors</td>
              <td>
                Colors: Platinum White Pearl, Modern Steel Metallic, Lunar
                Silver Metallic, Golden Brown Metallic, Radiant Red Metallic,
                and Amber Brown Metallic.
              </td>
            </tr>
            <tr>
              <td>Other Feature</td>
              <td>
                
              Automatic Climate Control, Smart Keyless Entry, and Electric Sunroof.
              </td>
            </tr>
          </tbody>
        </Table>
        <h2 className="my-4">User Review and Rating</h2>
        <Row className="mb-4">
          {/* Testimonial Cards */}
          <Col sm={12} md={6} lg={4}>
            <Card className="testimonial-card">
              <Card.Body>
                <Card.Title>John Doe</Card.Title>
                <Card.Text>
                  "The kia car is a fantastic. The ride is smooth and the
                  interior."
                </Card.Text>
                <p className="stars">★★★★★</p>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card className="testimonial-card">
              <Card.Body>
                <Card.Title>Jane Smith</Card.Title>
                <Card.Text>
                  "I love the features and safety ratings of this vehicle.
                  Highly recommended for families!"
                </Card.Text>
                <p className="stars">★★★★★</p>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card className="testimonial-card">
              <Card.Body>
                <Card.Title>Alex Johnson</Card.Title>
                <Card.Text>
                  "The performance is outstanding. It's a powerful seltos with
                  great mileage."
                </Card.Text>
                <p className="stars">★★★★★</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <h2 className="my-4"> Also viewed these cars</h2>
        <Row className="mb-4">
          {/* Car Card 1 */}
          <Col sm={12} md={6} lg={4}>
            <Card
              className="shadow-sm"
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Card.Img
                src="Images/boleroneo.webp"
                alt="Bolero N"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>Bolero N</Card.Title>
                <Card.Text className="price">₹ 10 - 12 Lakh</Card.Text>
                <Button
                  className="offer-button-custom"
                  onClick={() => handleNavigate("/bolero-n")}
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Car Card 2 */}
          <Col sm={12} md={6} lg={4}>
            <Card
              className="shadow-sm"
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Card.Img
                src="Images/xuv 3xo.webp"
                alt="Xuv 3xo"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>Xuv 3xo</Card.Title>
                <Card.Text className="price">₹ 12 - 15 Lakh</Card.Text>
                <Button
                  className="offer-button-custom"
                  onClick={() => handleNavigate("/xuv-3xo")}
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Car Card 3 */}
          <Col sm={12} md={6} lg={4}>
            <Card
              className="shadow-sm"
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Card.Img
                src="Images/xuv700.webp"
                alt="Xuv 700"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>Xuv 700</Card.Title>
                <Card.Text className="price">₹ 15 - 20 Lakh</Card.Text>
                <Button
                  className="offer-button-custom"
                  onClick={() => handleNavigate("/xuv700")}
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Amaze;