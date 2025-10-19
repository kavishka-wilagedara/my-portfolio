import React from "react";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Project from "./sections/Project";
import Contact from "./sections/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
