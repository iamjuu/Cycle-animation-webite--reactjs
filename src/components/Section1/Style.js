import styled from "styled-components";  


export  const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
 background-color: #00292a; 
width: 100%;
/* height: 700px; */

h2{
letter-spacing:10px;
  -webkit-text-stroke: 1px white;
  font-size: 40px;
  line-height: 1;
}

.section{
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
}

.section1{
  /* background-color: #fff; */
  h4{
    

    position: relative;
    font-family: sans-serif;
    text-transform: uppercase;
    font-size: 1.7rem;
    letter-spacing: 4px;
    overflow: hidden;
    background: linear-gradient(90deg, #000, #fff, #000);
    background-repeat: no-repeat;
    background-size: 80%;
    animation: animate 16s linear infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: rgba(255, 255, 255, 0);
  }
  
  @keyframes animate {
    0% {
      background-position: -500%;
    }
    100% {
      background-position: 500%;
    }
  }
  
}
`