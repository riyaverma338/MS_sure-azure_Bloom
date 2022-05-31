import React from "react";
import { Navbar,Nav, Container, Button } from "react-bootstrap";
export default function LandingNav() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">WomenEx</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">About Us</Nav.Link>
        <Nav.Link href="#action2">Contact</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    </>
  );
}
