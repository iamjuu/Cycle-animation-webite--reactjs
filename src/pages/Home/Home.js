import React from "react";
import Navbar from "../../components/navbar/Navbar/Navbar";
import Card from "../../components/Card/Card";
import { Container } from "../Home/Homestyle";
import Cycle from '../../components/Cycle/Cycle'
const Home = () => {
  return (
    <div>
      <Container>
        <Navbar />
      <Card />
<Cycle/>
      </Container>
    </div>
  );
};

export default Home;
