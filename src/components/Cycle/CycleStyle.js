import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 150px;
  color: white;
  width: 900px;
  height: 550px;
  /* cursor:; */
  /* background-color: red; */
  border-radius: 20px;
  opacity: 90%;
  img {
    width: 40px;
    color: white;
  }
  .CycleMain {
    width: 700px;
  }
  .Cyclefront {
    z-index: -1;
    top: 20px;
    left: 135px;
    position: absolute;
    width: 655px;
  }
  .Cycleback {
    z-index: -1;
    top: 55px;
    left: -33px;
    position: absolute;
    width: 655px;
  }
  &.animate .Cyclefront {
    animation: fronttyre 1s infinite ease-in-out;
  }
  &.animate .Cycleback {
    animation: backtyre 1s infinite ease-out;
  }

  @keyframes fronttyre {
    0% {
      transform: translate(50%) rotate(60deg);
    }
    50% {
      transform: translate(0);
    }
  }

  @keyframes backtyre {
    0% {
      transform: translate(-50%) rotate(300deg);
    }
    50% {
      transform: translate(0);
    }
  }
  @media (max-width: 900px) {  
    width: 95%;
    .CycleMain {  
      width: 95%;
    }  
    .Cyclefront,  
    .Cycleback {  
      width: 95%; 
    }  
  }  

  @media (max-width: 600px) {  
    top: 100px;
    .CycleMain {  
      font-size: 14px;
    }  
    img {  
      width: 30px; 
    }  
  } 
    

  
    
    `;

export const StyledButton = styled.button`
  font-size: 18px;
  border-radius: 8px;
  cursor: pointer;
  background-color: transparent;
  transition: background-color 0.3s ease, transform 0.2s ease;
border: transparent;
  &:hover {
    background-color: darkgray;
    transform: scale(1.05);
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 10px;
`;
