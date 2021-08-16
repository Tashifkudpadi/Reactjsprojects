import React from "react";
import HeroSection from "../../components/hero/HeroSection";
import { homeObjTwo } from "./Data";
import Pricing from "../../components/pricing/Pricing";

function Products() {
  return (
    <>
      <HeroSection {...homeObjTwo} />
      <Pricing />
    </>
  );
}

export default Products;
