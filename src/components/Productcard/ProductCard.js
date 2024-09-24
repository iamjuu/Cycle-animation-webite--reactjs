import React, { useState, useEffect } from 'react';
import { Card, Pic, Details } from './Style';
import ButtonComponent from "../sectionBtn/Button";

const ProductCard = ({ pic, name }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); 
    };
  }, []);

  return (
    <Card>
      <Pic style={{
        transform: `translate(${50}px, ${scrollY * 0.1}px)` 
      }}>
        <img src={pic} alt="Product" />
      </Pic>
      <Details>
        <p>{name}</p>
        <div className='reviews'>
          <p>⭐⭐⭐⭐⭐</p>
          <ButtonComponent />
        </div>
      </Details>
    </Card>
  );
}

export default ProductCard;
