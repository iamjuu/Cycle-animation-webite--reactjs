import React from "react";
import Navbar from "../../components/navbar/Navbar/Navbar";
import Card from "../../components/Card/Card";
import { Container } from "../Home/Homestyle";
import Cycle from '../../components/Cycle/Cycle'
import Section1 from '../../components/Section1/index' 
const Home = () => {
  return (
    <div>
      <Container>
        <Navbar />
      <Card />
<Cycle/>
<Section1/>
      </Container>
    </div>
  );
};

export default Home;
