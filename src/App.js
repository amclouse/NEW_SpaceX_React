import React, { useState } from "react";
import SimpleTabs from "./components/Navigation/Navbar.jsx";

const SpaceX = () => {
  // const [search, setSearch] = useState("");
  // const [results, setResults] = useState([]);
  

  let url = `https://api.spacexdata.com/v3`

  return (
    <div>
      {/* <SimpleTabs url={url} handleSubmit={(e) => handleSubmit(e)} results={results}/> */}
      <SimpleTabs url={url} />
    </div>
  );
};

export default SpaceX;

// <input onChange={e => {
//   fetchResults()
// }}>
// </input>
