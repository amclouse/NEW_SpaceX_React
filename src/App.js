import React, { useState } from "react";
import SimpleTabs from "./components/Navigation/Navbar.jsx";

const SpaceX = () => {
  // const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const fetchResults = () => {
    let url = `https://api.spacexdata.com/v3/rockets/`
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setResults(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchResults();
  };

  return (
    <div>
      <SimpleTabs handleSubmit={(e) => handleSubmit(e)} results={results}/>
    </div>
  );
};

export default SpaceX;

// <input onChange={e => {
//   fetchResults()
// }}>
// </input>
