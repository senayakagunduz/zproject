import React from "react";
import { Card} from "react-bootstrap";
import "./team.scss"
const TeamMember = ({name, image, occupation}) => {
  return (
    <Card className="team-member">
        <Card.Img variant="top" src={require(`../../../../assests/img/team/${image}`)} />
        <Card.Title>{name}</Card.Title>
        <Card.Text><em>{occupation}</em></Card.Text>
    </Card>
  );
};

export default TeamMember;
