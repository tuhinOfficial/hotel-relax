import React from "react";
import { Button, Carousel } from "react-bootstrap";
import "./Home.css";
import carousel1 from "../../assets/carousel1.jpg";
import carousel2 from "../../assets/carousel2.jpg";
import carousel3 from "../../assets/carousel3.jpg";
import Popular from "./Popular";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="carousel">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={carousel1} alt="First slide" />
            <Carousel.Caption>
              <h3>Extreme view And Comfortable</h3>
              <p>
                "Comfortable" refers to a state of physical or emotional ease
                and relaxation, free from discomfort or stress.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carousel2} alt="Second slide" />

            <Carousel.Caption>
              <h3>Natural view In A Hotel</h3>
              <p>
                "Natural view" refers to the scenery or landscape that is
                created by nature, without human intervention or artificial
                elements.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carousel3} alt="Third slide" />

            <Carousel.Caption>
              <h3>Five Star Hotel</h3>
              <p>
                A "five-star hotel" is a luxury accommodation that offers
                high-end amenities, superior service, and exquisite dining and
                entertainment options.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="my-4 ">
        <h2 className="text-center">Most Popular Hotels</h2>
        <Popular></Popular>
      </div>

      <div className="d-flex justify-content-center mb-4">
        <Link to="/hotels"><Button>View All</Button></Link>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
