import styled from "styled-components";  

export const Nav = styled.div`  
  margin-top: 10px;
  border-radius: 10px;  
  width: 700px;  
  background: rgba(255, 255, 255, 0.1); /* Slightly transparent background for glass effect */  
  backdrop-filter: blur(10px); /* Apply the blur effect */  
  font-size: large;  
  font-weight: 400;  
  height: 50px;  
  display: flex;  
  justify-content: center;  
  align-items: center;  
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); /* Optional shadow for depth */  

  ul {  
    display: flex;  
    list-style-type: none;  
    padding: 0;  
    margin: 0;  
  }  

  ul li {  
    margin: 0 10px;  
    transition: transform 0.3s ease;  

    &:hover {  
      transform: scale(1.1);  
    }  
  }  

  ul li a {  
    text-decoration: none;  
    color: white;  
    transition: color 0.3s ease;  

    &:hover {  
      color: skyblue; /* Change text color to red on hover */  
    }  
  }  
`;
