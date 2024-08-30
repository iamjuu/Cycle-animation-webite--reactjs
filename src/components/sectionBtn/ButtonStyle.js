import React from 'react';
import styled from 'styled-components';

// Define the styled Button component

export const Button = styled.button`
  background-color: transparent; 
  color: white; /* White text */
  border: 1px solid white; /* No border */
  border-radius: 5px; /* Rounded corners */
  padding: 10px 20px; /* Vertical and horizontal padding */
  font-size: 16px; /* Font size */
  cursor: pointer; /* Pointer cursor on hover */
  transition: background-color 0.3s ease; /* Smooth background color transition */

  &:hover {
    background-color:gray; /* Darker blue background on hover */
  }
  &:active {
    background-color: gray; /* Even darker blue background on click */
  }
`;
