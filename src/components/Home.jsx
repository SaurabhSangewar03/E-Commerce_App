import React from "react";
import Products from "./Products";
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
import '../App.css'

function Home() {
  return (
    <div className="hero">
      <h1 style={{textAlign: "center", marginTop: "15px"}}>Amazing Offer On All This Products...</h1>
      <ImageSlider slides={SliderData} />
      <Products/>
    </div>
  );
}

export default Home;
