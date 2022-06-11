import React, { useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";
import HomeNav from "./HomeNav";
import donate from "../../assets/donate_women.jpg";

import "../../css/HomePage.css";
import Footer from "../LandingPage/Footer";
// import { UserContext } from "../context/UserContext";
import { auth } from "../config/firebase";

export default function HomePage() {
  // const [userContext, setUserContext] = useContext(UserContext)

  useEffect(()=>{
    if(auth){
      console.log(auth.currentUser)
    }
  },[])
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
        <img src={donate} alt="donate"/>
        </div>
        <div className="fund-text">
        <h1>You Can Help !</h1>
        <h4>We need you to join us in the fight for women's Health Care. <br/>Make an impact by providing assistance in the form of Medical Aid to needy women. </h4>
        <div className="donate-btns">
        <Button>Make a Donation Today!</Button>
        </div>
      </div>
      </div>

      <Footer/>
    </>
  );
}
