import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from "../../../assests/img/logo.png"
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
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
    const {pathname} =useLocation();
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
            <Nav.Link as={Link} to="/admin" active={pathname==="/admin"}><RiHome3Line/>Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/admin/users" active={pathname==="/admin/users"}><RiUser3Line/>Users</Nav.Link>
            <Nav.Link as={Link} to="/admin/vehicles" active={pathname==="/admin/vehicles"}><RiCarLine/>Vehicles</Nav.Link>
            <Nav.Link as={Link} to="/admin/reservations" active={pathname==="/admin/reservations"}><RiFileList3Line/>Reservations</Nav.Link>
            <Nav.Link as={Link} to="/admin/contact-messages" active={pathname==="/admin/contact-messages"}><RiMessage3Line/>Contact Messages</Nav.Link>
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