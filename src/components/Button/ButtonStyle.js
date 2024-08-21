import styled from 'styled-components';

export const Div = styled.div`
  background-color: ${(props) => props.bgColor || 'gray'};
  color: transparent;
  /* padding: 20px; */
  width: 20px;
  height: 20px;
  margin: 10px 0;
  border-radius: 50%;
  transition: transform 0.2s ease-in-out;
  border: 3px solid rgba(128, 128, 128, ${props => props.borderOpacity || 0.8});
  &:hover {
    transform: scale(1.3);
    cursor: pointer;
  }
`;