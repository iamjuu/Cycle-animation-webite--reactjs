import styled from "styled-components";
export const Card= styled.div`
border-radius: 20px;
display: flex;
flex-direction: column;
align-items: center;
/* justify-content: center; */
width: 410px;
height: 480px;
position: relative;
background-color:black ;

`

export const Pic = styled.div`
width: 420px;
position: relative;
top: 5px;
border-radius: 20px;
height: 350px;
background-color: red;
transition: transform 0.5s ease 0.2s; /* Smooth transition with delay */
&:hover {
    transform: translate(30px,-15px); /* Moves the component 30px to the right on hover */
  }

`
export const Details = styled.div`
top: 10px;
right: 130px;
p{
    color: white;
}
.reviews{
    position: relative;
top: 30px;
gap: 70px;
    display: flex;
}

`