
import React from 'react';
import { useEffect } from 'react';
import { Container, Row, Col, Card, Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './xuv700.css';
import Footer from '../components/Footer';

const Xuv700 = () => {
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
              src="Images/xuv700.webp" 
              alt="Mahindra Alturas G4" 
              className="car-image"
            />
          </Col>
          <Col md={7} xs={12} className="p-4">
            <div className="car-info">
              <h2 className="car-title">Mahindra XUV 700</h2>
              <p className="rating">
                <span className="stars">★★★★★</span> 570 Reviews
              </p>
              <p className="car-description">
              The Mahindra XUV700 stands out for its combination of high-performance, cutting-edge technology, and safety features, making it one of the popular choices in the midsize SUV segment.
              Connected car technology with Alexa integration and remote vehicle management.
              </p>
              <p className="price">₹ 13 - 25.50 Lakh</p>
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
            <td>Engine Capacity</td>
            <td> 2.2 liters (2184 cc)</td>
          </tr>
          <tr>
            <td>Seating Capacity</td>
            <td>Available in 5-seater and 7-seater configurations</td>
          </tr>
          <tr>
            <td>Transmission</td>
            <td>6-speed manual transmission
            6-speed automatic transmission</td>
          </tr>
          <tr>
            <td>Fuel Type</td>
            <td>Diesel,Petrol</td>
          </tr>
          <tr>
            <td>Mileage</td>
            <td>Petrol: Around 11-12 km/l,Diesel: Around 15-16 km/l (may vary depending on driving conditions)</td>
          </tr>
          <tr>
            <td>Price Range</td>
            <td> ₹ 15 Lakh - ₹ 25.88 Lakh</td>
          </tr>
          <tr>
            <td>Safety rating</td>
            <td>Up to 7 airbags (top variant) ADAS (Advanced Driver Assistance System)</td>
          </tr>
          <tr>
            <td>Body style</td>
            <td>Sport Utility Vehicle</td>
          </tr>
          <tr>
            <td>Acceleration</td>
            <td>0-100 km/h: Around 9-10 seconds</td>
          </tr>
          <tr>
            <td>Top Speed</td>
            <td>Approximately 200 km/h</td>
          </tr>
         
          <tr>
            <td>Available Colors</td>
            <td>5 Colors (Midnight Black,
Everest White,
Dazzling Silver,
Red Rage,
Electric Blue)</td>
          </tr>
          <tr>
            <td>Other Feature</td>
            <td> Panoramic sunroof (Skyroof),360-degree camera,Sony 3D Surround Sound System with 12 speakers </td>
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
                "The Mahindra Xuv700 is a fantastic. The ride is smooth and the interior."
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
                "The performance is outstanding. It's a powerful Xuv with great mileage."
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
               src="Images/boleroneo.webp" 
             alt="Bolero N" 
               style={{ height: '200px', objectFit: 'cover' }} 
             />
             <Card.Body className="d-flex flex-column">
               <Card.Title>Bolero N</Card.Title>
               <Card.Text className="price">₹ 10 - 12 Lakh</Card.Text>
               <Button className="offer-button-custom" onClick={() => handleNavigate('/bolero-n')}>View Details</Button>
             </Card.Body>
           </Card>
         </Col>

         {/* Car Card 2 */}
         <Col sm={12} md={6} lg={4}>
           <Card className="shadow-sm" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
             <Card.Img 
               src="Images/xuv 3xo.webp" 
               alt="Xuv 3xo" 
              style={{ height: '200px', objectFit: 'cover' }}
             />
             <Card.Body className="d-flex flex-column">
               <Card.Title>Xuv 3xo</Card.Title>
               <Card.Text className="price">₹ 12 - 15 Lakh</Card.Text>
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

export default Xuv700;

