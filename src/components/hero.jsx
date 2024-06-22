import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import CarouselImage1 from "../assets/matara.jpg";
import CarouselImage2 from "../assets/fort.jpg";
import CarouselImage3 from "../assets/nilwalaRiver.jpg";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="min-vh-100 bg-black">
      <Carousel className="m-2">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={CarouselImage1}
            alt="First slide"
          />
          <Carousel.Caption
            style={{
              bottom: "50%",
              transform: "translateY(50%)",
              textAlign: "center",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <h3 style={{ color: "#fff", fontWeight: "bold" }}>
              Prime land for sale in Matara
            </h3>
            <p style={{ color: "#ddd" }}>
              Just minutes away from the beautiful beach{" "}
            </p>
            <Button
              variant="outline-light"
              className="m-2 fw-bold"
              size="lg"
              as={Link}
              to="/land"
            >
              More Details
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={CarouselImage1}
            alt="First slide"
          />
          <Carousel.Caption
            style={{
              bottom: "50%",
              transform: "translateY(50%)",
              textAlign: "center",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <h3 style={{ color: "#fff", fontWeight: "bold" }}>
              Prime land for sale in Matara
            </h3>
            <p style={{ color: "#ddd" }}>
              Just minutes away from the beautiful beach{" "}
            </p>
            <Button
              variant="outline-light"
              className="m-2 fw-bold"
              size="lg"
              as={Link}
              to="/land"
            >
              More Details
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={CarouselImage2}
            alt="Second slide"
          />
          <Carousel.Caption
            style={{
              bottom: "50%",
              transform: "translateY(50%)",
              textAlign: "center",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <h3 style={{ color: "#fff", fontWeight: "bold" }}>
              Everything you need is minutes away
            </h3>
            <p style={{ color: "#ddd" }}>
              Conveniently near the bus stand for easy transportation.
            </p>
            <Button
              variant="outline-light"
              className="m-2 fw-bold"
              size="lg"
              as={Link}
              to="/land"
            >
              More Details
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={CarouselImage3}
            alt="Third slide"
          />
          <Carousel.Caption
            style={{
              bottom: "50%",
              transform: "translateY(50%)",
              textAlign: "center",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <h3 style={{ color: "#fff", fontWeight: "bold" }}>
              Feel the beauty of Nilwala
            </h3>
            <p style={{ color: "#ddd" }}>
              This stunning property offers breathtaking views of the Nilwala
              River
            </p>
            <Button
              variant="outline-light"
              className="m-2 fw-bold"
              size="lg"
              as={Link}
              to="/contact"
            >
              Contact Us
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;
