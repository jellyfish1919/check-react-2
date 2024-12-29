import React from "react";
import { Card, Button } from "react-bootstrap";
import "../App.css"

const PlayerCard = ({
  name = "Didier Drogba",
  team = "chelsea",
  nationality = "Cote d'ivoire",
  jerseyNumber = "11",
  age = "40",
  imageUrl = "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRBEFkE2S3OxKobZmeQBBb2egdwcAFeEbfuUG29AmbwYgQabTgSBv3iiXwq86m_N7YcItFK8TcvpOwMK4g",
}) => {
 
  return (
    <div>
      {/* <h4>player</h4> */}
      <Card style={{ height:"20rem",width: "18rem" }}>
        <Card.Img className="photo" variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {team}
            <br />
            {nationality} <br />
            {jerseyNumber}
            <br />
            {age}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PlayerCard;