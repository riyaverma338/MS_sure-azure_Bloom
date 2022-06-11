import React, { useEffect,useContext } from "react";
import { Container, Card, Button } from "react-bootstrap";
import HomeNav from "./HomeNav";
import donate from "../../assets/donate.gif";

import "../../css/HomePage.css";
import Footer from "../LandingPage/Footer";
import { UserContext } from "../context/UserContext";
import { auth } from "../config/firebase";

export default function HomePage() {
  const [userContext, setUserContext] = useContext(UserContext)

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
            <Button variant="primary" onClick={e=>window.location.href="/module"}>Check Out</Button>
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
