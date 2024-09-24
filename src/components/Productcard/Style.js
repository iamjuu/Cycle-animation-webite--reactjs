import styled from "styled-components";
export const Card= styled.div`
border-radius: 20px;
display: flex;
flex-direction: column;
align-items: center;
width: 410px;
height: 480px;
position: relative;
background-color:#455A64 ;

`

export const Pic = styled.div`
 width: 420px;
  position: relative;
  top: -50px;
  left: -50px;
  border-radius: 20px;
  height: 350px;
  background-color: transparent;
  transition: transform 0.5s ease-out 0.2s; 
  /* transform: translate(650px, 100px);  */
  animation: pic 2s ease-in;
  img{
    width: 300px;
}
  @keyframes pic {
    0% {
        transform: translate(850px, 10px);
    }
    100% {
        
    
    
  }

`
export const Details = styled.div`
top: 10px;
/* background-color: red; */
right: 130px;
p{
    color: white;
}
.reviews{
    position: relative;
    gap: 70px;
    display: flex;
}

`