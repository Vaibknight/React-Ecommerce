import React from "react";
import HeroSection from "./component/HeroSection";

const About = () => {
  const data = {
    name: "Vaibhav Ecommerce",
  };

  return <HeroSection myData={data} />;
};

export default About;
