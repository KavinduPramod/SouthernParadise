import React, { useState, useCallback } from "react";
import Navbar from "../components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/footer";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import BeachImage from "../assets/matara-beach.jpg";
import BoatRideImage from "../assets/nilwala-boat.jpg";
import ParaviDuwaImg from "../assets/paraviDuwa.jpg";
import PropertyImage from "../assets/property.jpeg";

const land = () => {
  const photos = [
    {
      src: BeachImage,
      width: 4,
      height: 3,
    },
    {
      src: BoatRideImage,
      width: 4,
      height: 3,
    },
    {
      src: ParaviDuwaImg,
      width: 4,
      height: 3,
    },
    {
      src: PropertyImage,
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
      <Footer />
    </div>
  );
};

export default land;
