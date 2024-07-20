import React from "react";
import Navbar from "../components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "../components/hero";
import Footer from "../components/footer";
import "bootstrap-icons/font/bootstrap-icons.css";
import BeachImage from "../assets/matara-beach.jpg";
import BoatRideImage from "../assets/nilwala-boat.jpg";
import ParaviDuwaImg from "../assets/paraviDuwa.jpg";
import PropertyImage from "../assets/property.jpeg";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";

const Home = () => {
  const [visitCount, setVisitCount] = useState(0);
  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const userVisited = localStorage.getItem(`userVisited_${today}`);
    let currentCount = localStorage.getItem(`visitCount_${today}`);
    let totalCount = localStorage.getItem("totalVisitCount");

    if (!userVisited) {
      if (currentCount) {
        currentCount = parseInt(currentCount) + 1;
      } else {
        currentCount = 1;
      }
      localStorage.setItem(`visitCount_${today}`, currentCount);
      localStorage.setItem(`userVisited_${today}`, "true");

      // Update total visit count
      totalCount = totalCount ? parseInt(totalCount) + 1 : 1;
      localStorage.setItem("totalVisitCount", totalCount);
      console.log(`Updated total visit count: ${totalCount}`); // Debugging line
    } else {
      currentCount = parseInt(currentCount);
    }

    setVisitCount(currentCount);
  }, []);
  return (
    <div className="bg-black text-light">
      <Navbar />
      <div className="container-fluid">
        <Hero />
      </div>
      <div className="m-5 text-light fs-5 text-center">
        <p className="fs-5">
          Prime land for sale in Matara ancient Holland Fort. 13.5 perches of
          pristine land For sale in the heart of Matara historic Holland Fort,
          Southern Province, Sri Lanka. This stunning property offers
          breathtaking views of the Nilwala River, providing a serene and
          picturesque setting.
        </p>
        <h4 className="text-light fw-bold text-center mt-4 mb-3">
          Prime Location Benefits
        </h4>
        <ul className="list-unstyled">
          <li className="my-2">
            <i className="bi bi-geo-alt-fill text-primary"></i> Just minutes
            away from the beautiful beach
          </li>
          <li className="my-2">
            <i className="bi bi-bank2 text-success"></i> Close to banks and
            essential services
          </li>
          <li className="my-2">
            <i className="bi bi-bus-front-fill text-warning"></i> Conveniently
            near the bus stand for easy transportation
          </li>
          <li className="my-2">
            <i className="bi bi-cart-fill text-danger"></i> Proximity to Keells
            and Cargills Super Markets for all your shopping needs
          </li>
          <li className="my-2">
            <i className="bi bi-hospital-fill text-info"></i> Accessible to both
            government and private hospitals for quality healthcare
          </li>
        </ul>
        <p className="fs-5 mt-4">
          The property is located in the heart of Matara. Ideal for both
          residential and tourism purposes, this land is a rare opportunity to
          own a piece of paradise. Don't miss out on making your dream a
          reality!
        </p>
      </div>
      <div className="m-5">
        <h4 className="text-info">Matara</h4>
        <div className="ratio ratio-16x9 py-5">
          <video width="320" height="240" controls>
            <source src="/Intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="container my-5 d-flex justify-content-center">
        <div className="col-md-4 mb-4">
          <div
            className="card bg-dark border-light text-light"
            style={{ width: "100%" }}
          >
            <img
              src={PropertyImage}
              className="card-img-top"
              alt="Matara beach"
            />
            <div className="card-body text-center">
              <h6>The Land</h6>
              <p className="card-text">
                As mentioned earlier this property could change your life. This
                is the image of the property as of now if you want to know more
                click below. Do not miss this great opportunity!
              </p>
            </div>
            <Button
              variant="outline-light"
              className="m-2 fw-bold"
              size="sm"
              as={Link}
              to="/land"
            >
              More Details &gt;&gt;
            </Button>
          </div>
        </div>
      </div>
      <div className="card bg-dark border-light m-5">
        <div className="card-body">
          <h5 className="card-title text-light">Location Map</h5>
          <iframe
            title="Matara Holland Fort Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63387.47692775094!2d80.53417964268846!3d5.948530016012054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae132a3a70de621%3A0x42a46c00bdc679c8!2sMatara%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1657903001732!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="container my-5">
        <h4 className="text-center mb-4">Enjoy the life of a lifetime</h4>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div
              className="card bg-dark border-light text-light"
              style={{ width: "100%" }}
            >
              <img
                src={BeachImage}
                className="card-img-top"
                alt="Matara beach"
              />
              <div className="card-body">
                <p className="card-text">
                  Always enjoy the beautiful view of the beach, free to explore.
                  You will never be bored.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div
              className="card bg-dark border-light text-light"
              style={{ width: "100%" }}
            >
              <img
                src={BoatRideImage}
                className="card-img-top"
                alt="Beach Access"
              />
              <div className="card-body">
                <p className="card-text">
                  You can take a boat ride on the Nilwala River. There are
                  plenty of things to enjoy!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div
              className="card bg-dark border-light text-light"
              style={{ width: "100%" }}
            >
              <img
                src={ParaviDuwaImg}
                className="card-img-top"
                alt="Local Amenities"
              />
              <div className="card-body">
                <p className="card-text">
                  Want to relax? Just walk across the bridge to the Paravi Duwa
                  temple. You'll never regret it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
