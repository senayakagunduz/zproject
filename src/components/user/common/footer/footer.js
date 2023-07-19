import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from "../../../../assests/img/logo.png"
import { Link, useLocation } from 'react-router-dom'
import { settings } from '../../../../helpers/settings'
import {AiOutlineHome, AiFillCar, AiOutlineInfoCircle, AiOutlinePhone} from "react-icons/ai"
import {MdOutlinePrivacyTip} from "react-icons/md";
import Contact from '../../contact/contact-info/contact-info';
import "./footer.scss";

const Footer = () => {
  const {pathname}=useLocation();
  return (
    <footer>
      <Container>
        <Row className='g-5'>
          <Col lg={6} xl={3}>
            <Link to="/">
              <img src={logo} alt={settings.siteName} style={{width:"80px"}}></img>
            </Link>
            <p>
              Check out our new fleet of cars, latest offers, our advantages free extra online.Choose from one of our new car models.
            </p>
          </Col>
          <Col lg={6} xl={3} className='ms-auto'>
            <h2>Quick Links</h2>
            <ul>
              <li>
                <Link as={Link} to="/"><AiOutlineHome/>Home</Link>
              </li>
              <li>
                <Link as={Link} to="/vehicles"><AiFillCar/>Vehicles</Link>
              </li>
              <li>
                <Link as={Link} to="/about"><AiOutlineInfoCircle/>About us</Link>
              </li>
              <li>
                <Link as={Link} to="/contact" ><AiOutlinePhone/>Contact us</Link>
              </li>
              <li>
                <Link  to="/privacy" ><MdOutlinePrivacyTip/>Privacy Policy</Link>
              </li>
            </ul>
          </Col>
          <Col lg={6} xl={3}>
          <h2>Working Hours</h2>
          <ul>
            <li>
              <p>Monday - Friday</p>
              <p>9:00 AM - 6:00 PM</p>
            </li>
            <li>
              <p>Saturday</p>
              <p>9:00 AM - 7:00 PM</p>
            </li>
            <li>
              <p>Sunday</p>
              <p>9:00 AM - 5:00 PM</p>
            </li>
          </ul>
          </Col>
          <Col lg={6} xl={3}>
          <h2>Contact us</h2>
            <Contact/>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer