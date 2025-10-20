import React from "react";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Project from "./sections/Project";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
