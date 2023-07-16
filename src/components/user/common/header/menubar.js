import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import {AiOutlineHome, AiFillCar, AiOutlineInfoCircle} from "react-icons/ai";
import {BsHeadphones} from "react-icons/bs"

const Menubar = () => {
  return (
    <div className="menubar">
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
               <AiOutlineHome/> Home
              </Nav.Link>
              <Nav.Link as={Link} to="/vehicles">
                <AiFillCar/>Vehicle
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                <AiOutlineInfoCircle/>About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                <BsHeadphones/>Contact
              </Nav.Link>
            </Nav>

            <div>
              <Button variant="secondary" as={Link} to="/auth">
                Register
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menubar;