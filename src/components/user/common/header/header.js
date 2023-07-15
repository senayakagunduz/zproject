import React from 'react'
import { Container,Button, ButtonGroup } from 'react-bootstrap'
import logo from "../../../../assests/img/logo.png"
import {settings} from '../../../../helpers/settings'
import Topbar from './topbar'
import Menubar from './menubar'
import "./header.scss"
const Header = () => {
  return (
   <Container>
    <div className="header">
      <div className="logo">
        <img src={logo} alt={settings.siteName} className='img-fluid' />
      </div>
      <div className='menus'>
          <Topbar/>
          <Menubar/>
      </div>
    </div>
   </Container>
  )
}

export default Header