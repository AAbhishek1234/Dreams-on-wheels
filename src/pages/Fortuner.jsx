
import React from 'react';
import { useEffect } from 'react';
import { Container, Row, Col, Card, Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './fortuner.css';
import Footer from '../components/Footer';

const  Legender = () => {
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
              src="Images/fortuner.avif" 
              alt="Mahindra Alturas G4" 
              className="car-image"
            />
          </Col>
          <Col md={7} xs={12} className="p-4">
            <div className="car-info">
              <h2 className="car-title">  Toyota Fortuner  </h2>
              <p className="rating">
                <span className="stars">★★★★★</span> 590 Reviews
              </p>
              <p className="car-description">
            

              The Toyota Fortuner is a popular midsize SUV that offers a 
              mix of luxury, performance, and off-road capability.
              </p>
              <p className="price">33.00 Lakh- 51.00 Lakh</p>
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
            <td> 2.7L 4-cylinder petrol and 2.8L 4-cylinder diesel engines.</td>
          </tr>
          <tr>
            <td>Seating Capacity</td>
            <td>  7 passengers across 3 rows</td>
          </tr>
          <tr>
            <td>Transmission</td>
            <td>   6-speed manual and 6-speed automatic.

            </td>
          </tr>
          <tr>
            <td>Fuel Type</td>
            <td> Petrol & Diesel</td>
          </tr>
          <tr>
            <td>Mileage</td>
            <td>  petrol variant delivers around 10 to 12 km/l,diesel variant offers around 12 to 14 km/l
            </td>
          </tr>
          <tr>
            <td>Price Range</td>
            <td>33.00 Lakh- 51.00 Lakh</td>
          </tr>
          <tr>
            <td>Safety rating</td>
            <td>Airbags: Dual front airbags, side airbags, and curtain airbags,Braking System: ABS with EBD</td>
          </tr>
          <tr>
            <td>Body style</td>
            <td>Sport Utility Vehicle,Premium leather upholstery.</td>
          </tr>
          <tr>
            <td>Acceleration</td>
            <td>0-100 km/h in approximately 10-11 seconds (depending on the engine).
            </td>
          </tr>
          <tr>
            <td>Top Speed</td>
            <td> 180 km/h </td>
          </tr>
         
          <tr>
            <td>Available Colors</td>
            <td>Colors: White Pearl, Silver, Grey, Black, and Avant-Garde Bronze.</td>
          </tr>
          <tr>
            <td>Other Feature</td>
            <td>safety assist features like lane departure warning and adaptive cruise control.</td>
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
                "The kia car is a fantastic. The ride is smooth and the interior."
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
                "The performance is outstanding. It's a powerful seltos with great mileage."
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

export default Legender;

