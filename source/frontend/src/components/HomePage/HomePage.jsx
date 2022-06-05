import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import HomeNav from "./HomeNav";
import donate from "../../assets/donate.gif";

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
            <Button variant="primary">Check Out</Button>
          </Card.Body> 
        </Card>
      </Container>
      <div className="fund-raise">
        <img src={donate} />
      </div>

      <Footer/>
    </>
  );
}
