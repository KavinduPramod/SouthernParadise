import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const propertyInfo = () => {
  const [perchAmount, setPerchAmount] = useState(7500000);
  const [priceInCurrency, setPriceInCurrency] = useState(null);
  const [exchangeRates, setExchangeRates] = useState({});
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get(
          "https://v6.exchangerate-api.com/v6/d70b02cf2093bbe18643bb28/latest/LKR"
        );
        setExchangeRates(response.data.conversion_rates);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };

    fetchExchangeRates();
  }, []);

  const calculatePrice = () => {
    if (exchangeRates[selectedCurrency]) {
      const priceInSelectedCurrency =
        perchAmount * exchangeRates[selectedCurrency];
      setPriceInCurrency(priceInSelectedCurrency.toFixed(2));
    }
  };

  return (
    <div>
      <Navbar />
      <div className="mh-vh-100 bg-dark text-light p-5 bg-black">
        <div className="mb-5">
          <h4 className="text-info">You get everything</h4>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card bg-secondary text-light h-100">
                <div className="card-body">
                  <h5 className="card-title">Electricity</h5>
                  <p className="card-text">3 phase</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card bg-secondary text-light h-100">
                <div className="card-body">
                  <h5 className="card-title">Water</h5>
                  <p className="card-text">Available</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card bg-secondary text-light h-100">
                <div className="card-body">
                  <h5 className="card-title">Telephone</h5>
                  <p className="card-text">Available</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card bg-secondary text-light h-100">
                <div className="card-body">
                  <h5 className="card-title">Internet</h5>
                  <p className="card-text">4G, Fibre</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card bg-secondary text-light h-100">
                <div className="card-body">
                  <h5 className="card-title">Zoning</h5>
                  <p className="card-text">
                    residential, commercial, agricultural, etc
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <h4 className="text-info">Address and Description</h4>
          <div className="card bg-secondary text-light mb-4">
            <div className="card-body">
              <h5 className="card-title">Address</h5>
              <p className="card-text">
                No,92, Wilfred Gunasekara Mawatha , Fort , Matara, Sri lanka,
              </p>
            </div>
          </div>
          <h4 className="text-info">Price per Perch</h4>
          <div className="card bg-secondary text-light mb-4">
            <div className="card-body">
              <p className="card-text">LKR 7,500,000</p>
            </div>
          </div>
          <h4 className="text-info">Accessibility</h4>
          <div className="card bg-secondary text-light mb-4">
            <div className="card-body">
              <p className="card-text">Public Bus Stand 5 minutes away</p>
              <p className="card-text">
                Colombo - Matara Highway 8 minutes away
              </p>
              <p className="card-text">Matara railway station 5 minutes away</p>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <h4 className="text-info">This land has 13.5 perches</h4>
          <h6>One perch is 7,500,000 LKR</h6>
          <p>
            Check the price in your currency as of today with the calculator
            below or contact us. The price is negotiable.
          </p>
          <div className="input-group mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Enter perch amount"
              value={perchAmount}
              onChange={(e) => setPerchAmount(e.target.value)}
            />
            <button
              className="btn btn-primary"
              type="button"
              onClick={calculatePrice}
              disabled={!exchangeRates[selectedCurrency]}
            >
              Calculate
            </button>
          </div>
          <div className="mb-3">
            <label htmlFor="selectCurrency" className="form-label">
              Select Currency:
            </label>
            <select
              name="selectCurrency"
              id="selectCurrency"
              className="form-select"
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}
            >
              {Object.keys(exchangeRates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
          {priceInCurrency && (
            <div className="alert alert-success mt-3">
              Price in {selectedCurrency}: {priceInCurrency}
            </div>
          )}
        </div>
        <div className="card bg-dark border-light m-5">
          <div className="card-body">
            <h5 className="card-title text-light">
              Location Map of the Property
            </h5>
            <iframe
              title="Property Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.3602678650827!2d80.54036707453605!3d5.94498902961655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae13f2abba16caf%3A0xad11743219501140!2s31%20Wilfred%20Gunasekera%20Mawatha%2C%20Matara!5e0!3m2!1sen!2slk!4v1720264997955!5m2!1sen!2slk"
              width="100%"
              height="600"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="mb-5">
          <h4 className="text-info">Way to the property</h4>
          <div className="ratio ratio-16x9">
            <video width="320" height="240" controls>
              <source src="/demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="mb-5">
          <h6>So what are you waiting for?</h6>
          <p>
            Contact us right now and build your dream home or the business
            you're looking for.
          </p>
          <Button className="btn btn-warning mb-2" as={Link} to="/contact">
            Contact
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default propertyInfo;
