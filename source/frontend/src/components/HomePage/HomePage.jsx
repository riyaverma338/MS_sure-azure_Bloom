import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import HomeNav from "./HomeNav";
import donate from "../../assets/donate_women.jpg";

import "../../css/HomePage.css";
import Footer from "../LandingPage/Footer";

export default function HomePage() {
  return (
    <>
      <HomeNav />
      <Container style={{ marginTop: "3rem" }}>
        <Card>
          <Card.Header>Module 1</Card.Header>
          <Card.Body>
            <Card.Title>Breast Cancer</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <div className="home-btns" >
            <Button variant="primary" onClick={e=>window.location.href="/module"}>Check Out</Button>
            </div>
          </Card.Body> 
        </Card>
      </Container>
      <div className="fund-raise">
        <div>
        <img src={donate} />
        </div>
        <div>
        <h1>You can Help</h1>
        <h4>Make an impact by providing assistance to needy women</h4>
        <h3>DONATE TODAY!</h3>
      </div>
      </div>

      <Footer/>
    </>
  );
}
