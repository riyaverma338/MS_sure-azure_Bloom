import React from "react";
import women from "../../assets/womenimg.jpg";
import "../../css/LandingPage.css"
import { Container, Card,  Button } from "react-bootstrap";
export default function Header() {
  return (
    <>
      <img className="landing-bg" src={women} width="100%" />
      <div className="landing-btn">
      <Button onClick={e=>window.location.href="/login"}>Try Now!</Button>
      </div>
      
      {/* AboutUS */}
      <Container>
        <h1>About Us</h1>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>

        <h1>Blogs</h1>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
