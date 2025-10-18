import React from "react";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Project from "./sections/Project";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Project />
    </div>
  );
}

export default App;
