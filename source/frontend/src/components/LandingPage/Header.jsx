import React from "react";
import women from "../../assets/landing1.jpg";
import "../../css/LandingPage.css"
import { Container, Button } from "react-bootstrap";
// import { UserContext } from "./../context/UserContext"
import { auth } from "../config/firebase";

export default function Header() {
  // const [userContext, setUserContext] = useContext(UserContext)
  const handleRedirect=(e)=>{
    e.preventDefault();
    if(auth){
      window.location.href="/"
    }
    else{
      window.location.href="/"
    }
  }

  return (
    <>
      <img className="landing-bg" src={women} width="100%" height="720vh" alt="bg"/>
      <div className="landing-btn">
      <Button onClick={e=>handleRedirect(e)}>Try Now!</Button>
      </div>

      {/* AboutUS */}
      <Container>
        <div style={{margin: "4rem 0"}}>
        <h2 style={{margin: "1rem 0"}}>ABOUT US</h2>
        <p id="about">
          Bloom is a platform build to empower women in health sector so that
          they can have awareness of fatal diseases like Breast Cancer, Cervical
          Cancer, Osteoporosis, Cardiovascular Disease etc. They can also
          schedule their appointment to meet doctors via our app. Bloom
          will also provide medical aid support where people can donate and help women who cannot afford the treatment
          expenses. 
        </p>

        {/* <h1>Blogs</h1>
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
        </Card> */}
        </div>
      </Container>
    </>
  );
}
