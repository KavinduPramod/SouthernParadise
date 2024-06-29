import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import PropertyInfo from "./pages/propertyInfo";
import Contact from "./pages/contact";
import Land from "./pages/land";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="propertyInfo" element={<PropertyInfo />} />
      <Route path="contact" element={<Contact />} />
      <Route path="land" element={<Land />} />
    </Routes>
  );
}

export default App;
