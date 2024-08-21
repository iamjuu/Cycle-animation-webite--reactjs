import React from 'react';
import {Div} from '../Button/ButtonStyle'


const Colordiv = ({ Bg,func }) => {
  return <Div  onClick={func} bgColor={Bg}> </Div>;
};

export default Colordiv;
