
import React from 'react';
import { useEffect } from 'react';
import { Container, Row, Col, Card, Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Celerio.css';
import Footer from '../components/Footer';

const Celerio = () => {
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
              src="Images/celerio.png" 
              alt="Mahindra Alturas G4" 
              className="car-image"
            />
          </Col>
          <Col md={7} xs={12} className="p-4">
            <div className="car-info">
              <h2 className="car-title">Maruti Suzuki Celerio</h2>
              <p className="rating">
                <span className="stars">★★★★★</span> 575 Reviews
              </p>
              <p className="car-description">
              The Maruti Suzuki Celerio is a popular compact hatchback that has 
              garnered attention for its fuel efficiency, modern features, and affordable pricing.
              Available in the higher variants for connected car features, such as remote vehicle tracking and real-time status updates.
              </p>
              <p className="price">₹ 4.90 Lakh - 7.10 Lakh</p>
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
            <td>  1.0-liter 3-cylinder K10C engine (Dual Jet, Dual VVT)</td>
          </tr>
          <tr>
            <td>Seating Capacity</td>
            <td>4 passengers.</td>
          </tr>
          <tr>
            <td>Transmission</td>
            <td> 5-speed manual gearbox
            </td>
          </tr>
          <tr>
            <td>Fuel Type</td>
            <td>Petrol</td>
          </tr>
          <tr>
            <td>Mileage</td>
            <td>Around 24.97 km/l</td>
          </tr>
          <tr>
            <td>Price Range</td>
            <td> ₹ 4.90 Lakh - 7.10 Lakh</td>
          </tr>
          <tr>
            <td>Safety rating</td>
            <td>Dual Front Airbags (Driver and Co-driver)</td>
          </tr>
          <tr>
            <td>Body style</td>
            <td>Sport Utility Vehicle</td>
          </tr>
          <tr>
            <td>Acceleration</td>
            <td>Acceleration (0-100 km/h): Approximately 14-15 seconds</td>
          </tr>
          <tr>
            <td>Top Speed</td>
            <td> Around 160 km/h</td>
          </tr>
         
          <tr>
            <td>Available Colors</td>
            <td>5 Colors (Arctic White,
Silky Silver,
Glistening Grey,
Caffeine Brown,
Speedy Blue,
Shimmering Red )</td>
          </tr>
          <tr>
            <td>Other Feature</td>
            <td> Rear Parking Sensors and Camera (in higher variants) </td>
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
                "The Maruti car is a fantastic. The ride is smooth and the interior."
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
                "I love the features and safety ratings of this vehicle. Highly recommended for families!"
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
                "The performance is outstanding. It's a powerful maruti with great mileage."
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
          <Card className="shadow-sm" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
             <Card.Img 
               src="Images/hondahrv.webp" 
             alt="Bolero N" 
               style={{ height: '200px', objectFit: 'cover' }} 
             />
             <Card.Body className="d-flex flex-column">
               <Card.Title>Honda Hrv</Card.Title>
               <Card.Text className="price"> 14 Lakh*</Card.Text>
               <Button className="offer-button-custom" onClick={() => handleNavigate('/hondahrv')}>View Details</Button>
             </Card.Body>
           </Card>
         </Col>

         {/* Car Card 2 */}
         <Col sm={12} md={6} lg={4}>
           <Card className="shadow-sm" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
             <Card.Img 
               src="Images/mgwindsor.webp" 
               alt="Xuv 3xo" 
              style={{ height: '200px', objectFit: 'cover' }}
             />
             <Card.Body className="d-flex flex-column">
               <Card.Title>MG Windsor Ev</Card.Title>
               <Card.Text className="price">15.70 Lakh-18.10 Lakh</Card.Text>
               <Button className="offer-button-custom" onClick={() => handleNavigate('/xuv-3xo')}>View Details</Button>
             </Card.Body>
           </Card>
         </Col>

         {/* Car Card 3 */}
         <Col sm={12} md={6} lg={4}>
           <Card className="shadow-sm" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
             <Card.Img 
               src="Images/xuv700.webp" 
               alt="Xuv 700" 
               style={{ height: '200px', objectFit: 'cover' }}
             />
             <Card.Body className="d-flex flex-column">
               <Card.Title>Xuv 700</Card.Title>
               <Card.Text className="price">₹ 15 - 20 Lakh</Card.Text>
               <Button className="offer-button-custom" onClick={() => handleNavigate('/xuv700')}>View Details</Button>
             </Card.Body>
           </Card>
         </Col>
       </Row>



    </Container>
<Footer/>
    </>
   
  );
};

export default Celerio;

