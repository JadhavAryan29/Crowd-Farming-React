import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/pages/Home";
import News from "./Components/pages/News";
import Contact from "./Components/pages/Contact";
import Details from "./Components/pages/Details";
import NotFound from "./Components/pages/NotFound";
import Navbar from "./Components/layouts/Navbar";
import Footer from "./Components/layouts/Footer";
import { Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/details" element={<Details />} />
          <Route exact path="/notfound" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}
export default App;
