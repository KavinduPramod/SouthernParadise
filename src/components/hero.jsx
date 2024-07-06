import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import CarouselImage1 from "../assets/hero_1.jpg";
import CarouselImage2 from "../assets/hero_3.jpg";
import CarouselImage3 from "../assets/hero_2.jpg";

const Hero = () => {
  return (
    <div className="bg-black">
      <Carousel className="m-5">
        <Carousel.Item interval={3000}>
          <div
            className="d-block w-100"
            style={{
              backgroundImage: `url(${CarouselImage1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "600px",
            }}
          />
          <Carousel.Caption
            style={{
              bottom: "50%",
              transform: "translateY(50%)",
              textAlign: "center",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <h3 style={{ color: "#fff", fontWeight: "bold" }}>
              Prime land for sale in Matara
            </h3>
            <p style={{ color: "#ddd" }}>
              Just minutes away from the beautiful beach
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

        <Carousel.Item interval={3000}>
          <div
            className="d-block w-100"
            style={{
              backgroundImage: `url(${CarouselImage2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "600px",
            }}
          />
          <Carousel.Caption
            style={{
              bottom: "50%",
              transform: "translateY(50%)",
              textAlign: "center",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
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

        <Carousel.Item interval={3000}>
          <div
            className="d-block w-100"
            style={{
              backgroundImage: `url(${CarouselImage3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "600px",
            }}
          />
          <Carousel.Caption
            style={{
              bottom: "50%",
              transform: "translateY(50%)",
              textAlign: "center",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <h3 style={{ color: "#fff", fontWeight: "bold" }}>
              Beauty of Nilwala
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
