import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        {/* Main Content Row */}
        <Row className="text-center text-md-start mb-4">
          <Col xs={12} md={6} className="mb-4">
            <h5 className="mb-3">About Us</h5>
            <p>
              Your go-to platform for exploring a variety of vehicles. Discover, compare, and find the best options for your needs!
            </p>
          </Col>

          <Col xs={12} md={6}>
            <h5 className="mb-3">Contact Us</h5>
            <p>Email: <a href="mailto:support@carbikefinder.com" className="text-light">support@carbikefinder.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="text-light">+123 456 7890</a></p>
          </Col>
        </Row>

        {/* Footer Bottom Row */}
        <Row className="text-center">
          <Col>
            <p className="mb-0">&copy; 2024 CarBikeFinder. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
