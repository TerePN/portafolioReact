import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}  className="text-center text-sm-end">
          <div className="social-icons"> 
                <a href="https://www.linkedin.com/in/teresa-cecilia-pana-1a7968184/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/TerePN"><i className="fa-brands fa-github"></i></a>
                <a href="https://instagram.com/tere.pana?igshid=ZDdkNTZiNTM="><img src={navIcon3} alt="" /></a>
              </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
