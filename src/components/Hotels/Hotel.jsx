import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Hotel.css";
import { Link } from "react-router-dom";
const Hotel = (props) => {
  const { id,name, image, description } = props.hotel;
//   console.log(id ,name,image);

  return (
    <div>
      <div>
        <Card className="px-3 py-3" style={{ width: "18rem", height: "550px" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>

          <div className="d-flex justify-content-between mt-3 align-items-center">
            <Link to={`/hotels/${id}`}><Button>view Details</Button></Link>
            <Button>Booking</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Hotel;
