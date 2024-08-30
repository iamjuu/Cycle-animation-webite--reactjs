import React from 'react';
import {Card,Pic,Details} from './Style'
import ButtonComponent from "../sectionBtn/Button";

const ProductCard = () => {
  return (

    <Card>
        <Pic></Pic>
       <Details> 
<p> a bike and in the  cycle dssf ijfeweijjh</p>
<div className='reviews'>
<p> ⭐⭐⭐⭐⭐</p>
        <ButtonComponent/>
</div>
       </Details>
    </Card>
  );
}

export default ProductCard;
