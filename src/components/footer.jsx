import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-light py-5">
      <footer className="container">
        <div className="row">
          <div className="col-12 col-md-3 mb-3">
            <h5>Quick Links</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-light">
                  Home
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/about" className="nav-link p-0 text-light">
                  About
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/contact" className="nav-link p-0 text-light">
                  Contact
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/land" className="nav-link p-0 text-light">
                  Land
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-3 mb-3">
            <h5>More Locations</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  href="https://en.wikipedia.org/wiki/Matara_fort"
                  className="nav-link p-0 text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Matara Fort
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="https://en.wikipedia.org/wiki/Matara,_Sri_Lanka"
                  className="nav-link p-0 text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Paravi Duwa Temple
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="https://en.wikipedia.org/wiki/Star_Fort,_Matara"
                  className="nav-link p-0 text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Star Fort
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="https://www.google.com/maps/place/Madiha+Beach,+Beach+Road,+Madiha,+Matara,+Sri+Lanka.,+Matara+81000/data=!4m2!3m1!1s0x3ae13ee42b00bf13:0xaa62b86b03d9ed9a?sa=X&ved=1t:242&ictx=111"
                  className="nav-link p-0 text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Madiha Beach
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p>
              <i className="bi bi-telephone-fill"></i> +94 76 813 7825
            </p>
            <p>
              <i className="bi bi-envelope-fill"></i> Brayanivaneesha@gmail.com
            </p>
            <div>
              <a href="https://www.facebook.com" className="text-light me-3">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.twitter.com" className="text-light me-3">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://www.instagram.com" className="text-light me-3">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.linkedin.com" className="text-light">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="col-12 mt-3">
            <p>
              Meet the developer click{" "}
              <a
                href="https://kavindupramod.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                here
              </a>
              !
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
