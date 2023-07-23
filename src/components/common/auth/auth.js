import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Nav,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";
import loginImg from "../../../../src/assests/img/auth/login_bg.jpg";
import logo from "../../../assests/img/logo.png";
import { settings } from "../../../helpers/settings";
import { RiCloseCircleLine, RiHome7Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";
import "./auth.scss";

const Auth = () => {
  const navigate = useNavigate();
  return (
    <Container fluid className="auth">
      <Row>
        <Col lg={7} className="banner">
          <div className="toolbar">
            {/**-1 bir önceki sayfaya git diyoruz */}
            <RiCloseCircleLine onClick={() => navigate(-1)} />
            <RiHome7Line onClick={() => navigate("/")} />
          </div>
          <img src={logo} alt={settings.siteName} style={{ height: "200px" }} />
        </Col>
        <Col lg={5} className="forms">
          <Card className="py-4">
            <Tabs defaultActiveKey="profile">
              <Tab eventKey="login" title="Login">
                <LoginForm />
              </Tab>
              <Tab eventKey="register" title="Register">
                <RegisterForm />
              </Tab>
            </Tabs>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
