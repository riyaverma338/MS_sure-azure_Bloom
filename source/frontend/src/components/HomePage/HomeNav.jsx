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
        className="justify-content-end home-btns"
        style={{ maxHeight: '100px', width:"100%" }}
        navbarScroll
      >
        {/* <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">About Us</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link> */}
         {/* <Button variant="outline-success">Login</Button>
      <Button variant="outline-success">Donate</Button> */}
     
      <div className="d-flex home-btns">
      <Button variant="outline-success" onClick={e=>signOut(e)}>Logout</Button>
      <Button variant="outline-success">Donate</Button>
      </div>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}
