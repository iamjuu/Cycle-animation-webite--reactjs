import React from "react";
import Navbar from "../../components/navbar/Navbar/Navbar";
import Card from "../../components/Card/Card";
import { Container } from "../Home/Homestyle";
import Cycle from '../../components/Cycle/Cycle'
import Caroseal from '../../components/Caroseal/Carosesal'
const Home = () => {
  return (
    <div>
      <Container>
        <Navbar />
        {/* <Caroseal/> */}
      <Card />
<Cycle/>
      </Container>
    </div>
  );
};

export default Home;
