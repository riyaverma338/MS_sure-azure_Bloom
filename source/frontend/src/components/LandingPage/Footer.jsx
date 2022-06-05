import React from "react";
import { Button, Container, Form} from "react-bootstrap";
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../../css/LandingPage.css"
import { Link } from "@mui/material";

export default function Footer() {
  return (
    <>
      <div className="main" id="contact">
        <Container>
          <div className="foot-content">
          <div>
            <h4>WomenEx</h4>
            <p>Follow us on Social Media</p>
            <YouTubeIcon/>
            <InstagramIcon/>
            <FacebookIcon/>
            <TwitterIcon/>
            <LinkedInIcon/>
          </div>
          <div>
            <h4>Contact Us</h4>
            <Form className="form-footer">
                <Form.Control type="email" placeholder="Name" className="input-field-footer" />
                <Form.Control type="password" placeholder="Email"  />
                <Form.Control type="password" placeholder="Phone no" />
                <Form.Control as="textarea" placeholder="Type your message here.." rows={3} />
                <Button type="submit" className="footer-btn" style={{opacity: "0.9",
border:"none", backgroundColor:"#FFCBE6", color:"#000", margin: "0 0.5rem" }}>Submit</Button>
            </Form>
          </div>
          </div>
        </Container>
      </div>
    </>
  );
}
