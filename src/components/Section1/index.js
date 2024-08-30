import React from "react";
import { Container } from "./Style";
import ProductCard from "../Productcard/ProductCard";
import Button from "../sectionBtn/Button";
const index = () => {
  return (
    <Container>

   <h2> new arraivals</h2>


      <div>
        <ProductCard />
      </div>
    </Container>
  );
};

export default index;
