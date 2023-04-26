import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <div>
      <Navbar bg="transparent" expand="lg">
        <Container>
          <Link to="/" className="text-decoration-none logo"><span className="hotel">Hotel</span> <span className="relax">.Com</span></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className="nav-items" to="/">Home</Link>
              <Link className="nav-items" to="/hotels">Hotels</Link>
              <Link className="nav-items" to="/login">LogIn</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
