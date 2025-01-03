import logo from "./logo.svg";
import "./App.css";
import Header from "./header";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Services from "./components/services";
import Resume from "./components/resume";
import { useState } from "react";

function App() {
  return (
    <div className="totalWebsite">
      <Header />
      <Home />
      <About />
      <Resume />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
