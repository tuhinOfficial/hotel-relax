import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css"

const Footer = () => {
  return (
    <div
      className="py-4 px-4"
      style={{ backgroundColor: "#212A3E", color: "#FFFFFF" }}
    >
      <Container>
        <Row>
          <Col>
            <div>
              <h4>Follow us </h4>
              <div
                className="d-flex gap-3"
                style={{ fontSize: "24px", color: "#3E54AC" }}
              >
                <FaFacebook></FaFacebook>
                <FaInstagram></FaInstagram>
                <FaTwitter></FaTwitter>
              </div>
            </div>
          </Col>

          <Col>
            <div>
              <h5>Links</h5>
              <Link className="text-decoration-none text-white" to="/">
                Home
              </Link>{" "}
              <br />
              <Link className="text-decoration-none text-white" to="/hotels">
                Hotels
              </Link>
            </div>
          </Col>

          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Send Message</Form.Label><br/>
                <textarea placeholder="Write a Message" cols={40} rows={6}></textarea>
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
