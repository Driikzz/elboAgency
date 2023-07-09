import React from "react";
import './App.css';
import 'rsuite/dist/rsuite.min.css';
import CardCarousel from "./Components/CardCarousel";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Forms from "./Components/Form";
import About from "./Components/About";
import Tecno from "./Components/Techno";



function Home() {
  return (
    <div className="home">
      <Navbar></Navbar>
      <HomePage></HomePage>
      <About></About>
      <Tecno></Tecno>
      <CardCarousel></CardCarousel>
      <Forms></Forms>
      <Footer></Footer>
      
    </div>
  );
}

export default Home;
