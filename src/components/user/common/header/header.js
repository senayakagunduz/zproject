import React from 'react'
import { Container,Button, ButtonGroup } from 'react-bootstrap'
import logo from "../../../../assests/img/favicon.ico"
const Header = () => {
  return (
   <Container>
    <div className="header">
      <div className="logo">
        <Button>hello</Button>
        <p>hello</p>
        <img src={logo} alt="" />
      </div>
    </div>
   </Container>
  )
}

export default Header