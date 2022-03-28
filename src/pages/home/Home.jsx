import React from "react";
import Cards from "../../componentes/Cards/Cards";
import Points from "../../componentes/points/Points";
import "./Home.css";

const Home = () => {
  return (
    <>
      <h1>JUEGO</h1>
      <div className="container">
        <Cards />
        <Points />
      </div>
    </>
  );
};

export default Home;
