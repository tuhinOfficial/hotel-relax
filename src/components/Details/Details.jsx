import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

const Details = () => {
  const { name, image, description, location, amenities,price,rating } = useLoaderData();
  console.log(amenities);

  return (
    <div className="mt-4">
      <h2 className="text-center mb-4">Details of {name}</h2>

      <div className="d-flex justify-content-center">
        <Card style={{ width: "30rem", padding: "10px 15px" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle>${price}</Card.Subtitle>
            <div className="mt-2"><Card.Subtitle >Ratings: {rating}</Card.Subtitle></div>
            <div className="py-2 d-flex gap-1 align-items-center" style={{fontSize:"18px"}}>
              <span>
                <CiLocationOn style={{color:"blue", fontSize:'20px'}}/>
              </span>
              <span>{location}</span>
            </div>
            <div>
              <p>{description}</p>
            </div>
          </Card.Body>
          <h4>Features</h4>
          <ListGroup className="list-group-flush">
            
            {amenities.map((items, index) => (
              <ListGroup.Item key={index}>{items}</ListGroup.Item>
            ))}
          
          </ListGroup>
          
          <div className="d-flex justify-content-center mt-3 align-items-center">
            <Button>Booking</Button>
          </div>
        
        </Card>
      </div>

      <div className="my-4 text-center">
        <Link to="/hotels">
          <button className="btn btn-primary">
            <FaChevronLeft />
            <span>Back</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Details;
