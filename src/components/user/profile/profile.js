import React from "react";
import ProfileForm from "./profile-form";
import PasswordForm from "./password-form";
import { Col, Container, Row } from "react-bootstrap";
import {FaUserCircle} from 'react-icons/fa';
import { useAppSelector } from "../../../store/slices/hooks";


const Profile = () => {
  const user=useAppSelector(state=>state.auth.user); //Redux daki user objesini bize verecek
  return (
    <Container>
      <Row className="g-5">
        <Col lg={2} className="text-center">
         <FaUserCircle size="120"/>
          <h4 >{user.firstName} {user.lastName}</h4>
          <em>admin@carrental.com</em>
        </Col>
        <Col md={5}>
            <h3>Update Profile</h3>
          <ProfileForm />
        </Col>
        <Col md={5}>
            <h3>Update Password</h3>
          <PasswordForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
