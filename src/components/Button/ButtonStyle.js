import styled from 'styled-components';


 export const Div = styled.div`
  background-color: ${(props) => props.bgColor || 'gray'};
  color:transparent;
  /* padding: 20px; */
  width: 30px;
  height: 30px;
  margin: 10px 0;
  border-radius: 50%;
`;