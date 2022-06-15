import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import logo from "../../../assets/logo.png";
import "../../../css/HomePage.css";
import { auth } from '../../config/firebase';
export default function ModuleNav() {

  const signOut=(e)=>{
    e.preventDefault();
    auth.signOut();
    window.location.href='/'
  }

  return (
    <>
    <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="/home">
      <img src={logo} width="70%" alt="logo"/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="justify-content-end home-btns"
        style={{ maxHeight: '100px', width:"100%" }}
        navbarScroll
      >
     
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
