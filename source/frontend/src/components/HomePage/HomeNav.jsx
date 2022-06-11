import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import "../../css/HomePage.css";
import { auth } from '../config/firebase';
export default function HomeNav() {

  const signOut=(e)=>{
    e.preventDefault();
    auth.signOut();
    window.location.href='/'
  }

  return (
    <>
    <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="/home">WomenEx</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">About Us</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
      <div className="d-flex home-btns">
      <Button variant="outline-success" onClick={e=>signOut(e)}>Logout</Button>
      <Button variant="outline-success">Donate</Button>
      </div>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}
