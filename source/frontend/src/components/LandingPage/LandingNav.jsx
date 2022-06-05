import React from "react";
import { Navbar,Nav, Container, Button } from "react-bootstrap";
import HomePage from "../HomePage/HomePage";
export default function LandingNav() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
    <Navbar.Brand href="#home">WomenEx</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="#link">About Us</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
</Navbar>
    </>
  );
}
