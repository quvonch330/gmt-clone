import React from "react";

import Manufactures from "../../components/manufacturers/Manufactures";
import { Offers } from "../../components/Home/Offers";
import { ProductsWrapper } from "../../components/Home/ProductsWrapper";
import { News } from "../../components/Home/News";
import { Footerhero } from "../../components/Home/Footerhero";
import { Form } from "../../components/Home/Form";



const Manufacturespage = () => {
  return (
    <div>
      <Manufactures />
      <ProductsWrapper />
      <Offers />
      <News />
      <Form />
      <Footerhero />
   

     

    
    </div>
  );
};

export default Manufacturespage;