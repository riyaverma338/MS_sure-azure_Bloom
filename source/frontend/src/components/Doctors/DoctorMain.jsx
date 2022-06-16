import React, { useState } from "react";
import { Container, Card, Button, FormControl, InputGroup} from "react-bootstrap";
import doctorimg from "../../assets/doctor.jpg"
import "../../css/Doctor.css";
import HealthBot from "../Modules/Disease/healthBot/HealthBot";
import doctors from "./doctor";
import close from './../../assets/close.png'


export default function DoctorMain() {
  const [showAppointemnt,setShowAppointment]=useState(false)

  const handleAppointment=(e)=>{
    e.preventDefault()
    setShowAppointment(true)
    window.scroll(0,0)
    document.getElementById("diseaseContainer").style.overflow="hidden"
  }
  
  const closeModal=(e)=>{
    e.preventDefault()
    setShowAppointment(false)
    document.getElementById("diseaseContainer").style.overflow="initial"

  }

  return (
    <>
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
        <Card className="doctor-card">
          <Card.Img variant="top" src={item.img} />
          <Card.Body>
            <h5>{item.name}</h5>
            <p>{item.location}</p>
            <Card.Text>
             {item.description}
            </Card.Text>
            <Button variant="primary" onClick={e=>handleAppointment(e)}>Schedule appointment</Button>
          </Card.Body>
        </Card>
        ))}
      </Container>
    </div>

    {showAppointemnt?
      <div className="appoint-container">
        <div className="white-bg">
        <img src={close} onClick={e=> closeModal(e)} alt="close"/>
        <h3>Schedule your appointment</h3>
      <div>
        <HealthBot/>
      </div>
        </div>
    </div>
    : ""
    }
  
    </>
   
  );
}
