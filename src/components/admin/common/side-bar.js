import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from "../../../assests/img/logo.png"
import { Link, Navigate, useNavigate } from 'react-router-dom'
import {
    RiHome3Line,
    RiUser3Line,
    RiCarLine,
    RiFileList3Line,
    RiLogoutCircleLine,
    RiDashboardLine,
    RiMessage3Line
} from "react-icons/ri";
import { logout } from '../../../store/slices/auth-slice';
import { encryptedLocalStorage } from '../../../helpers/functions/encrypt-storage';
import { question } from '../../../helpers/functions/swal';
import { useAppDispatch } from '../../../store/slices/hooks';
import "./side-bar.scss";

const SideBar = () => {
    const dispatch=useAppDispatch();
    const navigate=useNavigate();
    const handleLogout = () => {
        question("Logout", "Are you sure to logout?")
        .then((result) => {
          if (result.isConfirmed) {
            dispatch(logout());
            encryptedLocalStorage.removeItem("token");
            navigate("/");
          }
        });
      };
  return (
    <Navbar bg="light" expand="lg" className='admin-navbar'>
      <Container>
        <Navbar.Brand as={Link} to="/admin">
            <img src={logo} alt="admin panel" className='img-fluid' style={{height:"200px"}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/admin"><RiHome3Line/>Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/admin"><RiUser3Line/>Users</Nav.Link>
            <Nav.Link as={Link} to="/admin"><RiCarLine/>Vehicles</Nav.Link>
            <Nav.Link as={Link} to="/admin"><RiFileList3Line/>Reservations</Nav.Link>
            <Nav.Link as={Link} to="/admin/contact-messages"><RiMessage3Line/>Contact Messages</Nav.Link>
            <Nav.Link as={Link} to="/"><RiDashboardLine/>Web Site</Nav.Link>
            <Nav.Link onClick={handleLogout}>
                <RiLogoutCircleLine />Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default SideBar