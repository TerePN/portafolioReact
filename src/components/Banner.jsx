import { Container, Row, Col } from "react-bootstrap"
import React from 'react';
import imgBanner from '../assets/img/img-banner.jpg';

const Banner = () => {
    return (
        <section className='banner' id="home">
            <Container>
                <Row className="align-items-center">
                
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portafolio</span>
                        <h1>{"Hi I am Teresa Pana"} <br /> <span className="wrap"> Desarroladora Full-stack</span></h1>
                        <p>I'm a proactive person,
excellent teammate
organized and responsible. I enjoy
a lot to learn new things, my
objective is a challenging position and
dynamic where I can share my
experience and in turn add new
knowledge.</p>
                    </Col>
                    <Col xs={12} md={6} xl={5}><img src={imgBanner} alt="" /></Col>
                </Row>
            </Container>
            
        </section>
    );
};

export default Banner;