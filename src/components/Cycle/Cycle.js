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
import Colordiv from '../Button/Button';
import Nike from '../Text/Text';

const Cycle = () => {
  const [cycleData] = useState([
    { id: 1, image: CycleImg1 },
    { id: 2, image: CycleImg2 },
    { id: 3, image: CycleImg3 },
    { id: 4, image: CycleImg4 },
    { id: 5, image: CycleImg5 },
    { id: 6, image: CycleImg6 },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const handleLeftClick = () => {
    let currentIndexValue = currentIndex - 1;
    if (currentIndexValue < 0) {
      currentIndexValue = 0;
    }
    setTimeout(() => {
      setCurrentIndex(currentIndexValue);
    }, 1800);

    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 2000);
  };

  const handleRightClick = () => {
    let currentIndexValue = currentIndex + 1;
    if (currentIndexValue > cycleData.length - 1) {
      currentIndexValue = cycleData.length - 1;
    }
    setTimeout(() => {
      setCurrentIndex(currentIndexValue);
    }, 1800);

    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 2000);
  };

  const handleCycleChange = (index) => {
    setCurrentIndex(index);
    setAnimate(true)
  };

  const currentCycle = cycleData[currentIndex];

  return (
    <>
      <Container className={animate ? 'animate' : ''}>
        <div className='Cycleback-main'>
          <img className='Cycleback' src={BackTyre} alt='cycleback tyre' />
          <img className='Cyclefront' src={FrontTyre} alt='cycle front' />
        </div>
        <img className='CycleMain' src={currentCycle.image} alt="Cycle" />

        <ButtonContainer>
          <StyledButton onClick={handleLeftClick}>
            <img src={Leftimage} alt="Left Arrow" />
          </StyledButton>
          <StyledButton onClick={handleRightClick}>
            <img src={Righttbtn} alt="Right Arrow" />
          </StyledButton>

          <Colordiv Bg='green' func={() => handleCycleChange(0)} />
          <Colordiv Bg='red' func={() => handleCycleChange(1)} />
          <Colordiv Bg='blue' func={() => handleCycleChange(2)} />
          <Colordiv Bg='gray' func={() => handleCycleChange(3)} />
          <Colordiv Bg='skyblue' func={() => handleCycleChange(4)} />
        </ButtonContainer>

        <Nike />
      </Container>
    </>
  );
};

export default Cycle;
