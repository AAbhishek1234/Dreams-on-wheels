
import React from 'react';
import { useEffect } from 'react';
import { Container, Row, Col, Card, Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './altroz.css';
import Footer from '../components/Footer';

const Altroz = () => {
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
              src="Images/altroz.webp" 
              alt="Mahindra Alturas G4" 
              className="car-image"
            />
          </Col>
          <Col md={7} xs={12} className="p-4">
            <div className="car-info">
              <h2 className="car-title">Tata Altroz</h2>
              <p className="rating">
                <span className="stars">★★★★★</span> 590 Reviews
              </p>
              <p className="car-description">
             
              The Tata Altroz is a premium hatchback from Tata Motors,
               celebrated for its modern design, robust build quality, and emphasis on 
               safety. Launched in 2020, the Altroz stands out as the first vehicle built 
               on Tata's ALFA (Agile Light Flexible Advanced) architecture. It offers a
                blend of style, performance, and practicality, appealing to urban and 
                family-oriented buyers.
              </p>
              <p className="price">07.53 Lakh - 12.85 Lakh</p>
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
            <td>  1.2L Revotron Petrol, 1.2L iTurbo Petrol, 1.5L Revotorq Diesel</td>
          </tr>
          <tr>
            <td>Seating Capacity</td>
            <td>5 passengers</td>
          </tr>
          <tr>
            <td>Transmission</td>
            <td>5-speed manual, 6-speed manual (iTurbo), and AMT (available on select trims)
            </td>
          </tr>
          <tr>
            <td>Fuel Type</td>
            <td>Petrol & diesel</td>
          </tr>
          <tr>
            <td>Mileage</td>
            <td>  Petrol: ~19-21 km/l, Diesel: ~25-27 km/l
            </td>
          </tr>
          <tr>
            <td>Price Range</td>
            <td> 07.53 Lakh - 12.85 Lakh</td>
          </tr>
          <tr>
            <td>Safety rating</td>
            <td>5-star Global NCAP rating, ABS with EBD, dual airbags, ISOFIX child-seat mounts</td>
          </tr>
          <tr>
            <td>Body style</td>
            <td>Sport Utility Vehicle</td>
          </tr>
          <tr>
            <td>Acceleration</td>
            <td>Acceleration (0-100 km/h): Approximately 13-14 seconds</td>
          </tr>
          <tr>
            <td>Top Speed</td>
            <td> 175km/h (depending on engine and variant)</td>
          </tr>
         
          <tr>
            <td>Available Colors</td>
            <td>6 Colors (Opera Blue,
                High Street Gold,
                Downtown Red,
                Arcade Grey,
                Avenue White,
                Cosmo Dark ,
               )
</td>
          </tr>
          <tr>
            <td>Other Feature</td>
            <td> Dual-tone roof options and sporty alloy wheels.</td>
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

export default Altroz;

