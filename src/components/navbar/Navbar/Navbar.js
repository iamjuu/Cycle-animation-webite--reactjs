
import React from 'react';
import {  Nav } from './Navbarstyle';

const Navbar = () => {
  const list = ['Home', 'About', 'Service', 'Contact', 'Help'];

  return (
      <Nav>
        <ul>
          {list.map((item, index) => (
            <li key={index}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
      </Nav>
  );
}

export default Navbar;