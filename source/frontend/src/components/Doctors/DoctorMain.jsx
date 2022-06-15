import React from "react";
import { Container, Card, Button, FormControl, InputGroup} from "react-bootstrap";
import doctorimg from "../../assets/doctor.jpg"
import "../../css/Doctor.css";
import doctors from "./doctor";


export default function DoctorMain() {
  return (
    <div className="doctContainer">
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
        <Card className="doctor-card">
          <Card.Img variant="top" src={item.img} />
          <Card.Body>
            <h5>{item.name}</h5>
            <p>{item.location}</p>
            <Card.Text>
             {item.description}
            </Card.Text>
            <Button variant="primary">Schedule appointment</Button>
          </Card.Body>
        </Card>
        ))}
      </Container>
    </div>
  );
}
