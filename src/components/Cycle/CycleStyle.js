import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 150px;
  color: white;
  width: 900px;
  height: 500px;
  border-radius: 20px;
  background-color: gray;
  opacity: 60%;
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
    animation: fronttyre 3s infinite ease-in-out;
  }
  &.animate .Cycleback {
    animation: backtyre 3s infinite ease-out;
  }

  @keyframes fronttyre {
    0% {
      transform: translate(50%) rotate(100deg);
    }
    50% {
      transform: translate(1px);
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
`;

export const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: red;
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
