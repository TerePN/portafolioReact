import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/POKEAPI.jpeg";
import projImg2 from "../assets/img/RICKYandMORTY.jpeg";
import projImg3 from "../assets/img/ECOMMERCE.jpeg";
import projImg4 from "../assets/img/appReact.jpeg";

import Img1 from "../assets/img/fundamentos.png";
import Img2 from "../assets/img/html.jpeg";
import Img3 from "../assets/img/java_script.jpeg";
import Img4 from "../assets/img/react.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Projects = () => {

  const projects = [
    {
      title: "POKE API",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Ricky and Morty",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "E-commerce",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    
    {
      title: "App React",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    
  ];
  const certificates= [
    
    {
      title: "Web Development Fundamentals",
      description: "Design & Development",
      imgUrl: Img1,
    },
    {
      title: "JavaScript (Programming Language)",
      description: "Design & Development",
      imgUrl: Img3,
    },
    
    {
      title: "HyperText Markup Language (HTML)",
      description: "Design & Development",
      imgUrl: Img2,
    },
    {
      title: "Web Application Development with React",
      description: "Full Stack Software Engineering",
      imgUrl: Img4,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projets</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Certificates</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          certificates.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  )
};

export default Projects;

