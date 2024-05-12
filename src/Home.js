import React from "react";
import styled from "styled-components";
import HeroSection from "./component/HeroSection";
import Trusted from "./component/Trusted";
import Services from "./component/Services";

const Home = () => {
  const data = {
    name: "Vaibhav Store",
  };

  return (
    <>
      <HeroSection myData={data} />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
