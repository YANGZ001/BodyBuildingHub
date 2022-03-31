import React from "react";

import Contents from "./Contents.jsx";
import SearchBar from "./SearchBar.jsx";

import "./Page.css";

function NavBar() {
  return (
    <nav>
      <a href="/#/home">Home</a>
      {" | "}
      <a href="/#/train">Train</a>
      {" | "}
      <a href="/#/diet">Diet</a>
      {" | "}
      <a href="/#/motivation">Motivation</a>
      {" | "}
      <a href="/#/tracker">Tracker</a>
    </nav>
  );
}

export default function Page() {
  return (
    <div>
      <div className="header container">
        <h1 className="title">Body-Building Hub</h1>
        <NavBar />
      </div>
      <SearchBar />
      <Contents />
    </div>
  );
}
