import React, { useContext } from "react";
import HeroSection from "./component/HeroSection";
import { useProductContext } from "./context/ProductContext";

const About = () => {
  const myName = useProductContext();

  const data = {
    name: "Vaibhav Ecommerce",
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};

export default About;
