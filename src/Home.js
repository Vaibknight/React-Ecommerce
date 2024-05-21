import React from "react";
import styled from "styled-components";
import HeroSection from "./component/HeroSection";
import Trusted from "./component/Trusted";
import Services from "./component/Services";
import Footer from "./component/Footer";
import FeaturedProduct from "./component/FeaturedProduct";

const Home = () => {
  const data = {
    name: "Vaibhav Store",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeaturedProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
