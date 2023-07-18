import React from "react";
import TeamMember from "./team-member";
import SectionHeader from "../../common/section-header/section-header";
import Spacer from "../../../common/spacer/spacer";
import { Col, Container, Row } from "react-bootstrap";
import team from "./team.json"

const Team = () => {
  return (
    <div className="team">
      <SectionHeader
        title1="Executive"
        title2="Team"
        desc="We are here to meet your transportation needs by suggesting vip cars which are elgible to your..."
      />
      <Spacer/>
      <Container>
        <Row className="g-5">
            {
                team.map((member)=>(
                    <Col md="4" key={member.id}>
                        <TeamMember {...member}/>
                    </Col>
                ))
            }
        </Row>
      </Container>
    </div>
  );
};

export default Team;
