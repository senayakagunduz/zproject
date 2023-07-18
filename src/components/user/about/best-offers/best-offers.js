import React from "react";
import SectionHeader from "../../common/section-header/section-header";
import { Col, Container, Row } from "react-bootstrap";
import carImage from "../../../../assests/img/vertical_car.png";
import OfferItem from "./offer-item";
import { AiFillCar } from "react-icons/ai";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { BiSolidCarWash } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineSupportAgent } from "react-icons/md";
import "./best-offers.scss";
const BestOffers = () => {
  return (
    <div className="best-offers">
      <SectionHeader title1="Get Hour" title2=" Best Offers" />
      <div className="offers">
        <Container>
          <Row>
            <Col lg={4}>
              <OfferItem
                icon={<AiFillCar />}
                title="Featured Luxury Cars"
                desc="The luxurious car boasts an elegant and sleek design, with its aerodynamic curves and polished chrome accents. Its opulent interior showcases handcrafted leather seats, exquisite wood paneling, and cutting-edge technology seamlessly integrated into the dashboard. "
              />
              <OfferItem
                icon={<BsFillBriefcaseFill />}
                title="Insurance Included"
                desc="The luxurious car boasts an elegant and sleek design, with its aerodynamic curves and polished chrome accents. Its opulent interior showcases handcrafted leather seats, exquisite wood paneling, and cutting-edge technology seamlessly integrated into the dashboard. "
              />
              <OfferItem
                icon={<BiSolidCarWash />}
                title="Available 12 640 Cars"
                desc="The luxurious car boasts an elegant and sleek design, with its aerodynamic curves and polished chrome accents. Its opulent interior showcases handcrafted leather seats, exquisite wood paneling, and cutting-edge technology seamlessly integrated into the dashboard. "
              />
            </Col>
            <Col lg={4} className="d-flex align-center justify-content-center">
              <img src={carImage} alt="" className="img-fluid" />
            </Col>
            <Col lg={4}>
              <OfferItem
                direction="right"
                icon={<CiLocationOn />}
                title="Any Location Rent"
                desc="The luxurious car boasts an elegant and sleek design, with its aerodynamic curves and polished chrome accents. Its opulent interior showcases handcrafted leather seats, exquisite wood paneling, and cutting-edge technology seamlessly integrated into the dashboard. "
              />
              <OfferItem
                direction="right"
                icon={<MdOutlineSupportAgent />}
                title="Online 24/7 Support"
                desc="The luxurious car boasts an elegant and sleek design, with its aerodynamic curves and polished chrome accents. Its opulent interior showcases handcrafted leather seats, exquisite wood paneling, and cutting-edge technology seamlessly integrated into the dashboard. "
              />
              <OfferItem
                direction="right"
                icon={<BiSolidCarWash />}
                title="Cleaning Included"
                desc="The luxurious car boasts an elegant and sleek design, with its aerodynamic curves and polished chrome accents. Its opulent interior showcases handcrafted leather seats, exquisite wood paneling, and cutting-edge technology seamlessly integrated into the dashboard. "
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BestOffers;
