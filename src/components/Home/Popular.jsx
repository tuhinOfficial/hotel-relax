import React, { useEffect, useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";

const Popular = () => {
  const [data, setData] = useState([]);
  // console.log(data);
  
  useEffect(() => {
    fetch("http://localhost:5000/hotels")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      
      <div>
        <div className="cards">
          {data.slice(0, 6).map((singleData) => (
            <div key={singleData.id}>
              <Card className="px-3 py-3" style={{ width: "18rem" , height:"450px" }}>
                <Card.Img
                  variant="top"
                  src={singleData.image}
                />
                <Card.Body>
                  <Card.Title>{singleData.name}</Card.Title>
                  <Card.Text>
                    {singleData.description}
                  </Card.Text>
                </Card.Body>
                
                  <div className="d-flex justify-content-between mt-3 align-items-center">
                    <Button>view Details</Button>
                    <Button>Booking</Button>
                  </div>
                
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
