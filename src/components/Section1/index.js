import React from "react";
import { Container } from "./Style";
import ProductCard from "../Productcard/ProductCard";
import Button from "../sectionBtn/Button";
import Helmat from "../../Images/hemat-removebg-preview.png"
import Jacket from "../../Images/jacket-removebg-preview.png"
import Bottle from "../../Images/bottle-removebg-preview.png"
const index = () => {
  return (
    <Container>

   <h2> new arraivals</h2>


      <div className="section">
        <ProductCard pic={Helmat}  name={'vega helmat'}/>
        <ProductCard  pic={Jacket} name={'NIKE jacket'}/>
        <ProductCard  pic={Bottle} name={'NIke Bottle '}/>

      </div>
     <div className="section1">
      <h4> Life is like riding a bicycle. To keep your balance, you must keep moving </h4>
     </div >
    </Container>
  );
};

export default index;
