import React, { useState, useCallback } from "react";
import Navbar from "../components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/footer";
import Gallery from "react-photo-gallery";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Carousel, { Modal, ModalGateway } from "react-images";
import Image1 from "../assets/load/1.jpeg";
import Image2 from "../assets/load/2.jpeg";
import Image3 from "../assets/load/3.jpeg";
import Image4 from "../assets/load/4.jpeg";
import Image5 from "../assets/load/5.jpeg";
import Image6 from "../assets/load/6.jpeg";
import Image7 from "../assets/load/7.jpeg";
import Image8 from "../assets/load/8.jpeg";
import Image9 from "../assets/load/9.jpeg";
import Image10 from "../assets/load/10.jpeg";
import Image11 from "../assets/load/11.jpeg";
import Image12 from "../assets/load/12.jpeg";
import Image13 from "../assets/load/13.jpeg";
import Image14 from "../assets/load/14.jpeg";
import Image15 from "../assets/load/15.jpeg";
import Image16 from "../assets/load/16.jpeg";
import Image17 from "../assets/load/17.jpeg";

const land = () => {
  const photos = [
    {
      src: Image1,
      width: 4,
      height: 3,
    },
    {
      src: Image2,
      width: 4,
      height: 3,
    },
    {
      src: Image3,
      width: 4,
      height: 3,
    },
    {
      src: Image4,
      width: 4,
      height: 3,
    },
    {
      src: Image5,
      width: 4,
      height: 3,
    },
    {
      src: Image6,
      width: 4,
      height: 3,
    },
    {
      src: Image7,
      width: 4,
      height: 3,
    },
    {
      src: Image8,
      width: 4,
      height: 3,
    },
    {
      src: Image9,
      width: 4,
      height: 3,
    },
    {
      src: Image10,
      width: 4,
      height: 3,
    },
    {
      src: Image11,
      width: 4,
      height: 3,
    },
    {
      src: Image12,
      width: 4,
      height: 3,
    },
    {
      src: Image13,
      width: 4,
      height: 3,
    },
    {
      src: Image14,
      width: 4,
      height: 3,
    },
    {
      src: Image15,
      width: 4,
      height: 3,
    },
    {
      src: Image16,
      width: 4,
      height: 3,
    },
    {
      src: Image17,
      width: 4,
      height: 3,
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className="bg-black text-light min-vh-100">
      <Navbar />
      <div className="container-fluid">
        <Gallery photos={photos} onClick={openLightbox} />
      </div>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      <div className="container text-center my-4">
        <h2>Interested in this property? Don't miss out!</h2>
        <p className="mb-4">
          Explore more details and get in touch with us for any queries.
        </p>
        <Button
          className="btn btn-primary me-3 mb-2"
          as={Link}
          to="/propertyInfo"
        >
          Property Information
        </Button>
        <Button className="btn btn-warning mb-2" as={Link} to="/contact">
          Contact
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default land;
