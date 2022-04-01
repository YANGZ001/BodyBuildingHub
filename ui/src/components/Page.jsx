import { func } from "prop-types";
import React, { useState } from "react";
import ShowTheLocation from "./ShowTheLocation.jsx";
import { withRouter } from "react-router-dom";

import Contents from "./Contents.jsx";

import "./Page.css";

function NavBar() {
  const [activePage, setActivePage] = useState(1);
  const navData = [
    {
      title: "Home",
      icon: <i className="home icon" />,
      link: 1,
      ref: "/#/home",
    },
    {
      title: "Train",
      icon: <i className="heartbeat icon" />,
      link: 2,
      ref: "/#/train",
    },
    {
      title: "Diet",
      icon: <i className="pills icon" />,
      link: 3,
      ref: "/#/diet",
    },
    {
      title: "Motivation",
      icon: <i className="trophy icon" />,
      link: 4,
      ref: "/#/motivation",
    },
    {
      title: "Tracker",
      icon: <i className="clipboard icon" />,
      link: 5,
      ref: "/#/tracker",
    },
    {
      title: "Setting",
      icon: <i className="cog icon" />,
      link: 6,
      ref: "/#/setting",
    },
  ];
  return (
    <nav>
      {navData.map((val, key) => {
        return (
          <a
            className="NavItem"
            id={activePage == val.link ? "active" : ""}
            href={val.ref}
            onClick={() => setActivePage(val.link)}
          >
            {" "}
            <div id="navIcon">{val.icon}</div>{" "}
            <div id="navTitle">{val.title}</div>
          </a>
        );
      })}
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
      <div className="contents container">
        <center>
          <ShowTheLocation />
          <Contents />
        </center>
      </div>
    </div>
  );
}
