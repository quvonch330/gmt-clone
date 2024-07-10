import React from "react";
import Podkluch from "../../components/podkluch/Podkluch";
import { Offers } from "../../components/Home/Offers";
import { Footerhero } from "../../components/Home/Footerhero";
import { Form } from "../../components/Home/Form";

const Podkluchpage = () => {
  return (
    <div>
      <Podkluch/>
      <Offers />
      <Form />
      <Footerhero />
    </div>
  );
};

export default Podkluchpage;