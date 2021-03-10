import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-div">
      <h1 className="home-header">Space X</h1>
      <p>In this application you will find currently information about SpaceX's most critical missions, and information on the Dragon space crafts.</p>
      <p>(Under further development at this current time...)</p>
      <p>Powered by <a href="https://docs.spacexdata.com/">SpaceX API</a></p>
    </div>
  );
};

export default Home;