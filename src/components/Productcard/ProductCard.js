  import React from 'react';
  import { Card, Pic, Details } from './Style';
  import ButtonComponent from "../sectionBtn/Button";

  const ProductCard = ({ pic,name }) => {
    return (
      <Card>
        <Pic>
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
