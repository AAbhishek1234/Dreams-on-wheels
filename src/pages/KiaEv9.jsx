
import React from 'react';
import { useEffect } from 'react';
import { Container, Row, Col, Card, Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './kiaev9.css';
import Footer from '../components/Footer';

const KiaEv9 = () => {
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
              src="Images/kiaev9.jpg" 
              alt="Mahindra Alturas G4" 
              className="car-image"
            />
          </Col>
          <Col md={7} xs={12} className="p-4">
            <div className="car-info">
              <h2 className="car-title"> Kia EV9</h2>
              <p className="rating">
                <span className="stars">★★★★★</span> 590 Reviews
              </p>
              <p className="car-description">
              The Kia EV9 is an all-electric, three-row SUV that was introduced
               by Kia as part of its expansion into the electric vehicle (EV) market.
               The Kia EV9 is part of Kia's broader strategy to provide sustainable, 
               eco-friendly vehicles, with a focus on performance, space, and advanced technology in the electric vehicle segment.
              </p>
              <p className="price">1.37Crore</p>
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
            <td>  Fully electric (no internal combustion engine).</td>
          </tr>
          <tr>
            <td>Battery,Motor</td>
            <td>  77.4 kWh or larger (depending on the model), Dual-motor (AWD) setup or single motor (RWD), depending on the variant.</td>
          </tr>
          <tr>
            <td>Charging</td>
            <td> Fast Charging: 10-80% in around 20-30 minutes using a DC fast charger,Home Charging: Full charge from 0-100% can take about 9-10 hours using a level 2 charger.</td>
          </tr>
          <tr>
            <td>Seating Capacity</td>
            <td>Three rows of seats, seating up to 7 passengers.</td>
          </tr>
          <tr>
            {/* <td>Transmission</td>
            <td> Transmission: 8-speed automatic.
            </td> */}
          </tr>
          <tr>
            <td>Fuel Type</td>
            <td>1.6L Turbocharged Hybrid Engine</td>
          </tr>
          <tr>
            <td>Mileage</td>
            <td>  Approximately 24 mpg city / 29 mpg highway, Approximately 39 mpg city / 35 mpg highway.
            </td>
          </tr>
          <tr>
            <td>Price Range</td>
            <td>1.37cr</td>
          </tr>
          <tr>
            <td>Safety rating</td>
            <td>the Kia EV9 has not been officially tested for safety ratings by organizations such as the Euro NCAP or NHTSA, as it is still in development and hasn't been fully launched in all markets.</td>
          </tr>
          <tr>
            <td>Body style</td>
            <td>Sport Utility Vehicle</td>
          </tr>
          <tr>
            <td>Acceleration</td>
            <td>0-60 mph in around 5 seconds (for performance variants).</td>
          </tr>
          <tr>
            <td>Top Speed</td>
            <td> top speed of around 115 mph (185 km/h).</td>
          </tr>
         
          <tr>
            <td>Available Colors</td>
            <td>Colors (Snow White Pearl,
Gravity Gray,
Ebony Black,
Sapphire Blue,
Silky Silver,
Infrared,
Everlasting Silver)</td>
          </tr>
          <tr>
            <td>Other Feature</td>
            <td> Advanced Driver Assistance Systems (ADAS)</td>
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
                "The  car is a fantastic. The ride is smooth and the interior."
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
                "The performance is outstanding. It's a powerful cars with great mileage."
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

export default KiaEv9;

