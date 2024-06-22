import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Navigationbar = () => {
  return (
    <Navbar bg="black" variant="dark" expand="lg" className="py-3 sticky-top">
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="fs-3 fw-bold"
          style={{ fontFamily: "Brush Script MT, Brush Script Std, cursive" }}
        >
          Southern Paradise
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              className="fs-5"
              style={{ fontFamily: "URW Chancery L, cursive" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className="fs-5"
              style={{ fontFamily: "URW Chancery L, cursive" }}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className="fs-5"
              style={{ fontFamily: "URW Chancery L, cursive" }}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/land"
              className="fs-5"
              style={{ fontFamily: "URW Chancery L, cursive" }}
            >
              Land
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
