import React from "react";
import HeroSection from "../../components/hero/HeroSection";
import Pricing from "../../components/pricing/Pricing";
import { homeObjFour } from "./Data";

function Services() {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Services;
