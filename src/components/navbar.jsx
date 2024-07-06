import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Navigationbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3 sticky-top">
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="fs-3 fw-bold text-info"
          style={{ fontFamily: "Brush Script MT, Brush Script Std, cursive" }}
        >
          Prime Land For Sale
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              className="fs-5 "
              style={{ fontFamily: "URW Chancery L, cursive", color: "red" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/propertyInfo"
              className="fs-5"
              style={{
                fontFamily: "URW Chancery L, cursive",
                color: "chartreuse",
              }}
            >
              Property Info
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className="fs-5"
              style={{ fontFamily: "URW Chancery L, cursive", color: "yellow" }}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/land "
              className="fs-5"
              style={{
                fontFamily: "URW Chancery L, cursive",
                color: "Fuchsia",
              }}
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
