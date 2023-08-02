import React from 'react'
import SideBar from '../components/admin/common/side-bar'
import { Col, Container, Row } from 'react-bootstrap'

const AdminTemplate = ({children}) => {
  return (
    <Container fluid className='p-0'>
      <Row>
        <Col lg={3} xxl={2} >
          <SideBar/>
        </Col>
        <Col lg={9} xxl={10}>
          {children}
        </Col>
      </Row>
    </Container>
  )
}

export default AdminTemplate