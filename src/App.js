import React, { useState } from "react";
import SimpleTabs from "./components/Navigation/Navbar.jsx";
import "./App.css"

const SpaceX = () => {

  let url = `https://api.spacexdata.com/v3`

  return (
    <div className="yes">
      <SimpleTabs url={url} />
    </div>
  );
};

export default SpaceX;

// <input onChange={e => {
//   fetchResults()
// }}>
// </input>
