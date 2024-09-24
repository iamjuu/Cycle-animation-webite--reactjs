import React from "react";
import { Container } from "./Style";
import ProductCard from "../Productcard/ProductCard";
import Button from "../sectionBtn/Button";
import Helmat from "../../Images/hemat-removebg-preview.png";
import Jacket from "../../Images/jacket-removebg-preview.png";
import Cycleimg from "../../Images/fullbodycycle-removebg-preview.png";
import Bottle from "../../Images/bottle-removebg-preview.png";

const NewArrivals = () => {
  const products = [
    { pic: Helmat, name: "Vega Helmet" },
    { pic: Jacket, name: "NIKE Jacket" },
    { pic: Bottle, name: "Nike Bottle" },
  ];

  return (
    <Container>
      <h2>New Arrivals</h2>

      <div className="section">
        {products.map((product, index) => (
          <ProductCard key={index} pic={product.pic} name={product.name} />
        ))}
      </div>

      <div className="section1">
        <div className="heading">
          <h4>
            Life is like riding a bicycle. To keep your balance, you must keep
            moving
          </h4>
        </div>
     
        <div className="paragraph-image-section">
      <div className="content">
        <p>
          Cycling is more than just a physical activity; it's a journey of
          resilience and self-discovery. As you pedal through the ups and downs,
          each rotation of the wheels reminds you of the power of persistence.
          The challenges you face on the road, whether it's a steep hill or an
          endless stretch, reflect life's obstacles, and conquering them builds
          not just strength in your legs but also in your mind. Cycling teaches
          us that progress comes with patience, that balance is found in
          movement, and that sometimes the best way to clear your mind is to
          lose yourself in the rhythm of the ride. Every ride brings a fresh
          perspective, a renewed energy, and the constant reminder that no
          matter the distance or difficulty, you're capable of achieving more
          than you ever thought possible. So, when life feels overwhelming, hop
          on a bike, and just keep pedaling forward.
        </p>
      </div>
      <div className="image">
        <img src={Cycleimg} alt="Cycling" />
      </div>
    </div>
      </div>
    </Container>
  );
};

export default NewArrivals;