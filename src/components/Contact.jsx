import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
 

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          {/* <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col> */}
          <Col size={12}  >
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form
                    action="https://formsubmit.co/terepana7@gmail.com" method="POST">
                    <Col size={12} sm={6} className="px-1">
                    <input type="text" name="name" placeholder="Name"/>
                    <input type="email" name="email" placeholder="Email Address" />
                    <textarea type="text" name="message"  placeholder="Message"></textarea>
                    </Col>
                    
                    <button type="submit">Send</button>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
