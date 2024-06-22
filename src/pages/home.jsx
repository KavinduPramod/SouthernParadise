import React from "react";
import Navbar from "../components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "../components/hero";

const Home = () => {
  return (
    <div className="min-vh-100 bg-black">
      <Navbar />
      <div className="min-vh-100 ">
        <Hero />
        <div>
          <h1>home</h1>

          <p>home</p>

          <p>home</p>

          <p>home</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
