import React from "react";
import { Navbar,Nav, Container, Button } from "react-bootstrap";
import logo from "../../assets/logo.png";
export default function LandingNav() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
<<<<<<< HEAD
    <Navbar.Brand href="/">WomenEx</Navbar.Brand>
=======
    <Navbar.Brand href="#home">
      <img src={logo} width="70%"/>
    </Navbar.Brand>
>>>>>>> d8a96158690e4b555cec0e34eb3156c69a259ec1
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
