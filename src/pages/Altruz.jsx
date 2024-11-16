
import React from 'react';
import { useEffect } from 'react';
import { Container, Row, Col, Card, Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Altruz.css';
import Footer from '../components/Footer';

const Altruz = () => {
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
              src="Images/alturas.jpeg" 
              alt="Mahindra Alturas G4" 
              className="car-image"
            />
          </Col>
          <Col md={7} xs={12} className="p-4">
            <div className="car-info">
              <h2 className="car-title">Mahindra Alturas G4</h2>
              <p className="rating">
                <span className="stars">★★★★★</span> 570 Reviews
              </p>
              <p className="car-description">
                Mahindra Alturas G4 is a 7-seater SUV with the last recorded price of Rs. 27.70 - 31.88 Lakh. It is available in 5 variants, 2157 cc engine option, and 1 transmission option: Automatic. The Alturas G4 is available in 4 colours. Mileage ranges from 11.5 kmpl to 12.02 kmpl.
              </p>
              <p className="price">₹ 8 - 15.50 Lakh</p>
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
            <td>2157 cc</td>
          </tr>
          <tr>
            <td>Seating Capacity</td>
            <td>7 Seats</td>
          </tr>
          <tr>
            <td>Transmission</td>
            <td>Automatic (TC) with 7 gears and manual override</td>
          </tr>
          <tr>
            <td>Fuel Type</td>
            <td>Diesel</td>
          </tr>
          <tr>
            <td>Mileage</td>
            <td>11.5–12.03 km/L </td>
          </tr>
          <tr>
            <td>Price Range</td>
            <td> ₹ 30.10 Lakh - ₹ 31.88 Lakh</td>
          </tr>
          <tr>
            <td>Safety rating</td>
            <td>5-star (KNCAP)</td>
          </tr>
          <tr>
            <td>Body style</td>
            <td>Sport Utility Vehicle</td>
          </tr>
          <tr>
            <td>Acceleration</td>
            <td>A0 to 100 km/h in around 11 seconds</td>
          </tr>
          <tr>
            <td>Top Speed</td>
            <td>Approximately 200 km/h</td>
          </tr>
         
          <tr>
            <td>Available Colors</td>
            <td>4 Colors (Pearl White, D Sat Silver, Napoli Black, and Regal Blue)</td>
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
                "The Mahindra Alturas G4 is a fantastic SUV! The ride is smooth and the interior."
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
                "The performance is outstanding. It's a powerful SUV with great mileage."
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
               src="Images/fronx.avif" 
             alt="Bolero N" 
               style={{ height: '200px', objectFit: 'cover' }} 
             />
             <Card.Body className="d-flex flex-column">
               <Card.Title>Fronx</Card.Title>
               <Card.Text className="price">08.67 Lakh-15.10 Lakh</Card.Text>
               <Button className="offer-button-custom" onClick={() => handleNavigate('/fronx')}>View Details</Button>
             </Card.Body>
           </Card>
         </Col>

         {/* Car Card 2 */}
         <Col sm={12} md={6} lg={4}>
           <Card className="shadow-sm" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
             <Card.Img 
               src="Images/i20.png" 
               alt="Xuv 3xo" 
              style={{ height: '200px', objectFit: 'cover' }}
             />
             <Card.Body className="d-flex flex-column">
               <Card.Title>Hyundai i20</Card.Title>
               <Card.Text className="price">07.00 Lakh- 11.20 Lakh</Card.Text>
               <Button className="offer-button-custom" onClick={() => handleNavigate('/i20')}>View Details</Button>
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
               <Card.Text className="price">15 Lakh - 20 Lakh</Card.Text>
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

export default Altruz;

