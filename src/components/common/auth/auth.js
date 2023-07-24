import React, { useEffect, useState } from "react";
import {
  Card,
  Col,
  Container,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";
import logo from "../../../assests/img/logo.png";
import { settings } from "../../../helpers/settings";
import { RiCloseCircleLine, RiHome7Line } from "react-icons/ri";
import { useNavigate, useSearchParams } from "react-router-dom";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";
import "./auth.scss";
import { login } from "../../../api/user-service";

const Auth = () => {
  const [searchParams]=useSearchParams();
  const [key,setKey]=useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    setKey(searchParams.get("key") || "login");
  },[searchParams])

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
            <Tabs activeKey={key}
                  onSelect={(k) => setKey(k)}>
              <Tab eventKey="login" title="Login">
                <LoginForm  setKey={setKey}/>
              </Tab>
              <Tab eventKey="register" title="Register">
                <RegisterForm setKey={setKey}/>
              </Tab>
            </Tabs>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
