import React from "react";
import { Navbar,Nav, Container, Button } from "react-bootstrap";
import logo from "../../assets/logo.png";
export default function LandingNav() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
    <Navbar.Brand href="#home">
      <img src={logo} width="70%"/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="justify-content-end"  style={{ width: "100%" }}>
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="#about">About Us</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
</Navbar>
    </>
  );
}
