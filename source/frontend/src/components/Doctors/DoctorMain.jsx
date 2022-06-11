import React from "react";
import { Container, Card, Button, FormControl, InputGroup} from "react-bootstrap";
import doctorimg from "../../assets/doctor.jpg"
// import HomeNav from "../HomePage/HomeNav";
// import Footer from "../LandingPage/Footer";
import "../../css/Doctor.css";
import doctors from "./doctor";


export default function DoctorMain() {
  return (
    <div className="doctContainer">
      {/* <HomeNav /> */}
      <InputGroup className="col-6 searchbar">
          <FormControl
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            Search
          </Button>
        </InputGroup>
      <Container className="doctor-main">
        {doctors.map((item) => (
        <Card className="doctor-card" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={doctorimg} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <h6>{item.location}</h6>
            <Card.Text>
             {item.description}
            </Card.Text>
            <Button variant="primary">Schedule appointment</Button>
          </Card.Body>
        </Card>
        ))}
      </Container>
      {/* <Footer/> */}
    </div>
  );
}
