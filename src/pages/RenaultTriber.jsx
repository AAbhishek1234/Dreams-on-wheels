import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./renaulttriber.css";
import Footer from "../components/Footer";

const RenaultTriber = () => {
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
                src="Images/triber.jpg"
                alt="Mahindra Alturas G4"
                className="car-image"
              />
            </Col>
            <Col md={7} xs={12} className="p-4">
              <div className="car-info">
                <h2 className="car-title"> Renault Triber </h2>
                <p className="rating">
                  <span className="stars">★★★★★</span> 550 Reviews
                </p>
                <p className="car-description">
                  The Renault Triber is a versatile and budget-friendly compact
                  MPV designed for families. It stands out with its modular
                  seating, offering a 7-seater configuration within a compact
                  footprint. The Triber is ideal for urban and highway drives,
                  combining practicality with modern styling.
                </p>
                <p className="price">06.00 Lakh- 09.00 Lakh</p>
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
              <td>1.0L Naturally Aspirated Petrol (3-cylinder, DOHC)</td>
            </tr>
            <tr>
              <td>Seating Capacity</td>
              <td>The triber can comfortably seat 7 passengers </td>
            </tr>
            <tr>
              <td>Transmission</td>
              <td> 5-speed Automated Manual Transmission (AMT)</td>
            </tr>
            <tr>
              <td>Fuel Type</td>
              <td> Petrol</td>
            </tr>
            <tr>
              <td>Mileage</td>
              <td>Petrol: AAMT (Automatic): 19.0 km/l</td>
            </tr>
            <tr>
              <td>Price Range</td>
              <td>06.00 Lakh- 09.00 Lakh</td>
            </tr>
            <tr>
              <td>Safety rating</td>
              <td>
                ABS with EBD, Dual Front Airbags, Rear Parking Sensors, Reverse
                Camera.
              </td>
            </tr>
            <tr>
              <td>Body style</td>
              <td>Sport Utility Vehicle</td>
            </tr>
            <tr>
              <td>Acceleration</td>
              <td>
                Achieves 0-100 km/h in approximately 16 seconds, as it focuses
                more on practicality than speed.
              </td>
            </tr>
            <tr>
              <td>Top Speed</td>
              <td>
                Approximately 140-150 km/h, depending on load and driving
                conditions.
              </td>
            </tr>

            <tr>
              <td>Available Colors</td>
              <td>
                Colors:Ice Cool White Electric Blue Cedar Brown Moonlight Silver
                Metal Mustard (most iconic color)
              </td>
            </tr>
            <tr>
              <td>Other Feature</td>
              <td>
              Low Maintenance Costs: Ideal for budget-conscious families.
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

export default RenaultTriber;
