
import React from 'react';
import { useEffect } from 'react';
import { Container, Row, Col, Card, Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './crosspolo.css';
import Footer from '../components/Footer';

const CrossPolo = () => {
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
              src="Images/crosspolo.jpg" 
              alt="Mahindra Alturas G4" 
              className="car-image"
            />
          </Col>
          <Col md={7} xs={12} className="p-4">
            <div className="car-info">
              <h2 className="car-title"> Volkswagen Cross Polo</h2>
              <p className="rating">
                <span className="stars">★★★★★</span> 590 Reviews
              </p>
              <p className="car-description">
             
              
              The Volkswagen Cross Polo is a rugged, sporty version of the standard 
              Polo hatchback. Designed for those seeking a premium hatchback with SUV-inspired
               elements, the Cross Polo combines functionality, style, and practicality.
              </p>
              <p className="price">11.59 Lakh - 23.45 Lakh</p>
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
            <td>  1.5L TDI Diesel Engine,1.2L MPI Petrol Engine</td>
          </tr>
          <tr>
            <td>Seating Capacity</td>
            <td>5 passengers</td>
          </tr>
          <tr>
            <td>Transmission</td>
            <td>5-speed manual.
            </td>
          </tr>
          <tr>
            <td>Fuel Type</td>
            <td>Petrol and Diesel</td>
          </tr>
          <tr>
            <td>Mileage</td>
            <td>  Petrol: ~16.47 km/l,Diesel: ~20.14 km/l.
            </td>
          </tr>
          <tr>
            <td>Price Range</td>
            <td>07.50 Lakh</td>
          </tr>
          <tr>
            <td>Safety rating</td>
            <td>Global NCAP 5-star safety standards.</td>
          </tr>
          <tr>
            <td>Body style</td>
            <td>Sport Utility Vehicle</td>
          </tr>
          <tr>
            <td>Acceleration</td>
            <td>Acceleration (0-100 km/h): Approximately 12 seconds</td>
          </tr>
          <tr>
            <td>Top Speed</td>
            <td> 170 km/h  for diesel veriant.
            </td>
          </tr>
         
          <tr>
            <td>Available Colors</td>
            <td>4 Colors (Flash Red.
Reflex Silver.
Candy White.
Toffee Brown.
)</td>
          </tr>
          <tr>
            <td>Other Feature</td>
            <td> Liquid-cooled battery pack to prevent overheating. </td>
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
                "The Mahindra car is a fantastic. The ride is smooth and the interior."
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

export default CrossPolo;

