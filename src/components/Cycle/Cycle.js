// import React, { useState } from "react";
// import { Container, ButtonContainer, StyledButton } from "../Cycle/CycleStyle";
// import Leftimage from "../../Images/left.png";
// import Righttbtn from "../../Images/right.png";
// import CycleImg1 from "../../Images/cycle body(1).png";
// import CycleImg2 from "../../Images/cycle body(2).png";
// import CycleImg3 from "../../Images/cycle body(3).png";
// import CycleImg4 from "../../Images/cycle body(4).png";
// import CycleImg5 from "../../Images/cycle body(5).png";
// import CycleImg6 from "../../Images/cycle body.png";
// import FrontTyre from "../../Images/fronttyre.png";
// import BackTyre from "../../Images/backtyre.png";

// const Cycle = () => {
//   const [animation, setAnimation] = useState(false);

//   const [cycleData, setCycleData] = useState([
//     { id: 1, image: CycleImg1 },
//     { id: 2, image: CycleImg2 },
//     { id: 3, image: CycleImg3 },
//     { id: 4, image: CycleImg4 },
//     { id: 5, image: CycleImg5 },
//     { id: 6, image: CycleImg6 },
//   ]);

//   const [tyre, settyre] = useState([
//     {
//       id: 1,
//       image: BackTyre,
//     },
//     {
//       id: 2,
//       image: FrontTyre,
//     },
//   ]);

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleLeftClick = () => {
//     console.log("left btn");
//     setAnimation(true);
//     let currentIndexValue = currentIndex;
//     currentIndexValue = currentIndexValue - 1;
//     if (currentIndexValue < 0) {
//       currentIndexValue = 0;
//     }
//     setCurrentIndex(currentIndexValue);
//   };

//   const handleRightClick = () => {
//     console.log("right btn");

//     let currentIndexValue = currentIndex;
//     currentIndexValue = currentIndexValue + 1;
//     if (currentIndexValue > cycleData.length - 1) {
//       currentIndexValue = cycleData.length - 1;
//     }
//     setCurrentIndex(currentIndexValue);
//   };

//   const currentCycle = cycleData[currentIndex];

//   return (
//     <>
//       <Container>
//         <div className="Cycleback-main">
//           <img className="Cycleback" src={tyre[0].image} alt="cycleback tyre" />
//           <img className="Cyclefront" src={tyre[1].image} alt="cycle front" />
//         </div>
//         <img className="CycleMain" src={currentCycle.image} alt="Cycle" />
//         <ButtonContainer>
//           <StyledButton>
//             <img src={Leftimage} onClick={handleLeftClick} alt="Left Arrow" />
//           </StyledButton>
//           <StyledButton>
//             <img src={Righttbtn} onClick={handleRightClick} alt="Right Arrow" />
//           </StyledButton>
//         </ButtonContainer>
//       </Container>
//     </>
//   );
// };

// export default Cycle;



import React, { useState } from 'react';
import { Container, ButtonContainer, StyledButton } from '../Cycle/CycleStyle';
import Leftimage from '../../Images/left.png';
import Righttbtn from '../../Images/right.png';
import CycleImg1 from '../../Images/cycle body(1).png';
import CycleImg2 from '../../Images/cycle body(2).png';
import CycleImg3 from '../../Images/cycle body(3).png';
import CycleImg4 from '../../Images/cycle body(4).png';
import CycleImg5 from '../../Images/cycle body(5).png';
import CycleImg6 from '../../Images/cycle body.png';
import FrontTyre from '../../Images/fronttyre.png';
import BackTyre from '../../Images/backtyre.png';

const Cycle = () => {
  const [cycleData, setCycleData] = useState([
    { id: 1, image: CycleImg1 },
    { id: 2, image: CycleImg2 },
    { id: 3, image: CycleImg3 },
    { id: 4, image: CycleImg4 },
    { id: 5, image: CycleImg5 },
    { id: 6, image: CycleImg6 },
  ]);

  const [tyre, settyre] = useState([
    { id: 1, image: BackTyre },
    { id: 2, image: FrontTyre },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const handleLeftClick = () => {
    console.log('left btn');

    let currentIndexValue = currentIndex;
    currentIndexValue = currentIndexValue - 1;
    if (currentIndexValue < 0) {
      currentIndexValue = 0;
    }
    setCurrentIndex(currentIndexValue);


    setAnimate(true);

    setTimeout(() => {
      setAnimate(false);
    }, 2000);
  };

  const handleRightClick = () => {
    console.log('right btn');

    let currentIndexValue = currentIndex;
    currentIndexValue = currentIndexValue + 1;
    if (currentIndexValue > cycleData.length - 1) {
      currentIndexValue = cycleData.length - 1;
    }
    setCurrentIndex(currentIndexValue);

    setAnimate(true);

    setTimeout(() => {
      setAnimate(false);
    }, 2000); 
  };

  const currentCycle = cycleData[currentIndex];

  return (
    <>
      <Container className={animate ? 'animate' : ''}>
        <div className='Cycleback-main'>
          <img className='Cycleback' src={tyre[0].image} alt='cycleback tyre' />
          <img className='Cyclefront' src={tyre[1].image} alt='cycle front' />
        </div>
        <img className='CycleMain' src={currentCycle.image} alt="Cycle" />
        <ButtonContainer>
          <StyledButton onClick={handleLeftClick}>
            <img src={Leftimage} alt="Left Arrow" />
          </StyledButton>
          <StyledButton onClick={handleRightClick}>
            <img src={Righttbtn} alt="Right Arrow" />
          </StyledButton>
        </ButtonContainer>
      </Container>
    </>
  );
};

export default Cycle;