// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Dream On Wheels </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Navigation links */}
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/bikes">Bikes</Nav.Link>
            <Nav.Link as={Link} to="/cars">Cars</Nav.Link>

            {/* Dropdown for Categories */}
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/bikes">Bikes</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/cars">Cars</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
          {/* Right-aligned buttons */}
          <Nav>
            <Nav.Link href="#signup">
              <Button variant="outline-success">Sign Up</Button>
            </Nav.Link>
            <Nav.Link href="#login">
              <Button variant="outline-primary">Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
