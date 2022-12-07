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
                        <h1>{"Hi I am Desarrollador"} <span className="wrap"> Full-stack</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nemo voluptatibus eveniet. Molestias maiores, repellendus nemo sint temporibus sapiente quaerat aperiam ducimus aspernatur nobis ipsam rerum perferendis quod veritatis doloribus.</p>
                    </Col>
                    <Col xs={12} md={6} xl={5}><img src={imgBanner} alt="" /></Col>
                </Row>
            </Container>
            
        </section>
    );
};

export default Banner;