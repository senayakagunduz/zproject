import React from "react";
import { Container} from "react-bootstrap";
import logo from "../../../../assests/img/logo.png";
import { settings } from "../../../../helpers/settings";
import Topbar from "./topbar";
import Menubar from "./menubar";
import "./header.scss";
const Header = () => {
  return (
    <Container className="p-0 fixed-top">
      <div className="header">
        <div className="logo">
          <img src={logo} alt={settings.siteName} className="img-fluid" />
          {/* <div className="logo_text">
            PICK & <br /> <span>DRIVE</span>
            <p>YOUR RELIABLE RIDE, AS LONG AS YOU NEED</p>
          </div> */}
        </div>
        <div className="menus">
          <Topbar />
          <Menubar />
        </div>
      </div>
    </Container>
  );
};

export default Header;
