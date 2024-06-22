import React from "react";
import Navbar from "../components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "../components/hero";
import Footer from "../components/footer";
import "bootstrap-icons/font/bootstrap-icons.css";

const Home = () => {
  return (
    <div className="min-vh-100 bg-black text-light">
      <Navbar />
      <div className="container-fluid">
        <Hero />
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
              <i className="bi bi-cart-fill text-danger"></i> Proximity to
              Keells and Cargills Super Markets for all your shopping needs
            </li>
            <li className="my-2">
              <i className="bi bi-hospital-fill text-info"></i> Accessible to
              both government and private hospitals for quality healthcare
            </li>
          </ul>
          <p className="fs-5 mt-4">
            The property is located in the heart of Matara. Ideal for both
            residential and tourism purposes, this land is a rare opportunity to
            own a piece of paradise. Don't miss out on making your dream a
            reality!
          </p>
          <div className="card bg-dark border-light mt-5">
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
