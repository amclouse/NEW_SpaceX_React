import React, { useState } from "react";
import SpaceXDisplay from "./components/SpaceXDisplay";
import TemporaryDrawer from "./components/Navigation/Navbar.jsx"
import { Modal } from "@material-ui/core";

const SpaceX = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const fetchResults = () => {
    let url = `https://api.spacexdata.com/v3/capsules/${search}`;
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
      
      <TemporaryDrawer />
      <SpaceXDisplay fetchResults={() => fetchResults()} results={results} />
      <h1>It's SpaceX alright</h1>
      <h1>this will be the initial landing page</h1>
    </div>
  );
};

export default SpaceX;

// <input onChange={e => {
//   fetchResults()
// }}>
// </input>
