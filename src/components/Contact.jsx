import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
 

  return (
    <section className="contact" id="connect">
      <Container>
        
          
                <div
                  className="contact_conteiner">
                  <h2>Get In Touch</h2>
                  <form
                    action="https://formsubmit.co/terepana7@gmail.com" method="POST">
                    <Col size={12}  className="px-1">
                    <input type="text" name="name" placeholder="Name"/>
                    <input type="email" name="email" placeholder="Email Address" />
                    <textarea type="text" name="message"  placeholder="Message"></textarea>
                    </Col>
                    
                    <button type="submit">Send</button>
                  </form>
                </div>
              
          
        
      </Container>
    </section>
  );
};
