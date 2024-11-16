
import React from 'react';
import { useEffect } from 'react';
import { Container, Row, Col, Card, Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './aura.css';
import Footer from '../components/Footer';

const Aura = () => {
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
              src="Images/aura.webp" 
              alt="Mahindra Alturas G4" 
              className="car-image"
            />
          </Col>
          <Col md={7} xs={12} className="p-4">
            <div className="car-info">
              <h2 className="car-title">Hyundai Aura</h2>
              <p className="rating">
                <span className="stars">★★★★★</span> 580 Reviews
              </p>
              <p className="car-description">
             
The Hyundai Aura is a compact sedan that slots below the Hyundai Verna
 in the company's sedan lineup. It offers a combination of stylish design, 
 practicality, and a range of features, making it a popular choice in the sub-4 meter
  sedan segment, particularly in markets like India. The Hyundai Aura is available in
   multiple engine options, with both petrol and diesel variants, and provides a high
    level of comfort, safety, and technology for its price.
              </p>
              <p className="price">₹7.50 Lakh - 10.60 Lakh</p>
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
            <td>   Petrol:82 hp (61 kW), Turbocharged Petrol Engine:100 hp (74.5 kW)</td>
          </tr>
          <tr>
            <td>Seating Capacity</td>
            <td>5 passengers.</td>
          </tr>
          <tr>
            <td>Transmission</td>
            <td> 6-speed manual or 7-speed dual-clutch transmission (DCT)
            </td>
          </tr>
          <tr>
            <td>Fuel Type</td>
            <td>Petrol</td>
          </tr>
          <tr>
            <td>Mileage</td>
            <td>  Around 20-21 km/l
            </td>
          </tr>
          <tr>
            <td>Price Range</td>
            <td> ₹7.50 Lakh - 10.60 Lakh</td>
          </tr>
          <tr>
            <td>Safety rating</td>
            <td>Dual Front Airbags (standard across variants)</td>
          </tr>
          <tr>
            <td>Body style</td>
            <td>Sport Utility Vehicle</td>
          </tr>
          <tr>
            <td>Acceleration</td>
            <td>Acceleration (0-100 km/h): Approximately 11-13 seconds</td>
          </tr>
          <tr>
            <td>Top Speed</td>
            <td> Around 190 km/h (for the turbo petrol variant)</td>
          </tr>
         
          <tr>
            <td>Available Colors</td>
            <td>6 Colors (Polar White,
Typhoon Silver,
Starry Night,
Fiery Red,
Vintage Brown,
Blue )</td>
          </tr>
          <tr>
            <td>Other Feature</td>
            <td> Rear Parking Sensors and Camera (in higher variants),Isofix Child Seat Mounts </td>
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
                "The Hyundai car is a fantastic. The ride is smooth and the interior."
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
                "The performance is outstanding. It's a powerful hyundai with great mileage."
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
               src="Images/glanza.png" 
             alt="Bolero N" 
               style={{ height: '200px', objectFit: 'cover' }} 
             />
             <Card.Body className="d-flex flex-column">
               <Card.Title> Toyota Glanza</Card.Title>
               <Card.Text className="price">06.80Lakh - 10Lakh</Card.Text>
               <Button className="offer-button-custom" onClick={() => handleNavigate('/glanza')}>View Details</Button>
             </Card.Body>
           </Card>
         </Col>

         {/* Car Card 2 */}
         <Col sm={12} md={6} lg={4}>
           <Card className="shadow-sm" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
             <Card.Img 
               src="Images/triber.jpg" 
               alt="Xuv 3xo" 
              style={{ height: '200px', objectFit: 'cover' }}
             />
             <Card.Body className="d-flex flex-column">
               <Card.Title>Renault Triber</Card.Title>
               <Card.Text className="price">06.00 Lakh - 09.00 Lakh</Card.Text>
               <Button className="offer-button-custom" onClick={() => handleNavigate('/triber')}>View Details</Button>
             </Card.Body>
           </Card>
         </Col>

         {/* Car Card 3 */}
         <Col sm={12} md={6} lg={4}>
           <Card className="shadow-sm" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
             <Card.Img 
               src="Images/nexon.webp" 
               alt="Xuv 700" 
               style={{ height: '200px', objectFit: 'cover' }}
             />
             <Card.Body className="d-flex flex-column">
               <Card.Title>Tata Nexon</Card.Title>
               <Card.Text className="price">09.22 Lakh-18.40 Lakh</Card.Text>
               <Button className="offer-button-custom" onClick={() => handleNavigate('/nexon')}>View Details</Button>
             </Card.Body>
           </Card>
         </Col>
       </Row>



    </Container>
<Footer/>
    </>
   
  );
};

export default Aura;

