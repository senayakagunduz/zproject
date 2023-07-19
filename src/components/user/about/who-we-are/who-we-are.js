import React from "react";
import "./who-we-are.scss";
import { Col, Container, Row } from "react-bootstrap";

const WhoWeAre = () => {
  return (
    <Container className="who-we-are">
      <Row>
        <Col lg={3}>
          <div className="img-col">
            <img src="/img/about_1.jpg" alt="Who we are" />
            <div className="border-left"></div>
            <div className="border-top"></div>
          </div>
        </Col>
        <Col lg={9} className="who-we-are-content">
          <div className="who-we-are-info">
            <h2>About Us</h2>
            <p>
              Established in 2014 in the heart of San Francisco, Pick&Drive
              emerged from the vision of two experienced travellers, Johnathan
              Price and Melanie Ross. Having navigated the complexities and
              frustrations of traditional car rentals during their numerous
              journeys, they felt compelled to revolutionize the experience for
              fellow travellers. Johnathan, with his background in technology
              and a keen interest in the automotive industry, was perfectly
              suited to tackle the logistical challenges. He dreamt of creating
              a platform where renting a car would be as easy as ordering a meal
              online. Melanie, with her rich experience in customer service and
              operations, shared his vision and was determined to ensure that
              their service would be customer-centric and hassle-free.",
            </p>
          </div>
        </Col>
        {/****-------****/}
        <Col lg={9} className="who-we-are-content">
            <p>
              "Their shared passion for enhancing the travel experience led to
              the birth of Pick&Drive, a platform that combines cutting-edge
              technology with an unwavering commitment to customer service,
              providing a seamless car rental experience that is second to none.
              In our early days, we started with a modest fleet of cars,
              operating solely in San Francisco. But our dedication to quality
              and convenience quickly won over our customers. As our reputation
              grew, so did we. By 2017, we had expanded our operations to cover
              all of California. Today, we are proud to provide our trusted
              service in cities all across the United States. Despite our
              growth, we've never lost sight of our core values - reliability,
              flexibility, and exceptional service. Every decision we make,
              every policy we implement, is guided by these principles. We're
              not just about renting cars; we're about making your journey
              smoother, safer, and more enjoyable. As we look to the future, we
              remain committed to innovation and improvement. We continuously
              update our fleet to include the latest models and ensure our
              platform stays user-friendly and efficient. We're also excited
              about expanding our footprint even further, with plans to serve
              more cities and offer more services to our valued customers."
            </p>
        </Col>
        <Col lg={3}>
          <div className="img-col">
            <img src="/img/about_2.jpg" alt="Who we are" className="right" />
            <div className="border-right"></div>
            <div className="border-bottom"></div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WhoWeAre;
