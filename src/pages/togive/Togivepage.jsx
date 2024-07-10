import React from "react";
import TogiveHero from "../../components/togive/TogiveHero";
import { Offers } from "../../components/Home/Offers";
import { Footerhero } from "../../components/Home/Footerhero";


const Togivepage = () => {
  return (
    <div>
      <TogiveHero />
      <Offers />
      <Footerhero />
    </div>
  );
};

export default Togivepage;