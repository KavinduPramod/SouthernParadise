import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  return (
    <div className="bg-black text-light">
      <Navbar />
      <div className="container text-center my-5">
        <h1 className="display-4">Contact Us</h1>
        <div className="mt-4">
          <h3>Email Us</h3>
          <a
            href="mailto:Brayanivaneesha@gmail.com"
            className="btn btn-lg btn-outline-warning my-3"
          >
            Brayanivaneesha@gmail.com
          </a>
        </div>
        <div className="mt-4">
          <h3>Call or Message Us</h3>
          <a
            href="tel:+94768137825"
            className="btn btn-lg btn-outline-success my-3"
          >
            +94 76 813 7825
          </a>
        </div>
        <div className="mt-4">
          <h3>WhatsApp Us</h3>
          <a
            href="https://wa.me/94768137825"
            className="btn btn-lg btn-outline-info my-3"
          >
            WhatsApp +94 76 813 7825
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
