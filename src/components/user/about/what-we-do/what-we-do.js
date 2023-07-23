import React from "react";
import "./what-we-do.scss";
import { Col, Container, Row } from "react-bootstrap";
import carImage from "../../../../assests/img/about/what_we_do.jpg";
import {GiCarKey,GiWatch,GiRecycle,GiJeep} from "react-icons/gi";
import {PiBuildings} from "react-icons/pi";
import {RiVipDiamondLine} from "react-icons/ri";


const WhatWeDo = () => {
  return (
    <Container fluid className="what-we-do">
      <Row>
        <Col md={5}>
          <img src={carImage} alt="" className="img-fluid" />
        </Col>
        <Col md={7}>
          <h2>What We Do</h2>
          <p>
            At Pick & Drive, we go beyond car rentals. We offer comprehensive
            transportation solutions tailored to the diverse needs of our
            customers. Our fleet comprises a wide array of vehicles, from
            compact, eco-friendly cars perfect for city driving, to spacious,
            rugged SUVs ideal for off-road adventures and family vacations. With
            our customer-centric approach, we have reimagined the car rental
            experience, providing not just a car, but a promise of quality,
            reliability, and convenience. We pride ourselves on our
            state-of-the-art booking system, round-the-clock customer service,
            and commitment to sustainability. Each vehicle in our fleet is
            meticulously maintained to ensure a safe, comfortable, and enjoyable
            driving experience. At Pick & Drive, we're not just providing a
            service - we're helping to create memorable journeys.
          </p>
          <Row className="props">
            <Col xl={4} sm={6}>
                <GiCarKey/><span>Individual Vehicle Rental</span>
            </Col>
            <Col xl={4} sm={6}>
                <GiWatch/><span>Extended Lease Programs</span>
            </Col>
            <Col xl={4} sm={6}>
                <GiRecycle/><span>Sustainable Mobility Solutions</span>
            </Col>
            <Col xl={4} sm={6}>
                <PiBuildings/><span>Corporate Fleet Solutions</span>
            </Col>
            <Col xl={4} sm={6}>
                <RiVipDiamondLine/><span>Premium Automobile Hire</span>
            </Col>
            <Col xl={4} sm={6}>
                <GiJeep/><span>Off-Road Vehicle Leasing</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default WhatWeDo;
