import React from "react";
import "./index.css";
import AppCarousel from "../../components/ui/carousel";
import BlueTesla from "../../assets/BlueTesla.png";
import RedTesla from "../../assets/RedTesla.png";
import WhiteTesla from "../../assets/WhiteTesla.png";
const Index = () => {
  const images = [BlueTesla, RedTesla, WhiteTesla];
  return (
    <div className="TeslaOne">
      <AppCarousel images={images} />
    </div>
  );
};

export default Index;
