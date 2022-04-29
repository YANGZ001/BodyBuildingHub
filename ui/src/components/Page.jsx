import { func } from "prop-types";

import React, { useContext, useState, useMemo } from "react";

import Login from "./Login.jsx";

import Contents from "./Contents.jsx";

import "./Page.css";
import { UserContext } from "./UserContext.jsx";

function NavBar() {
  const url = String(document.location);
  var strs = url.split("/");
  const tag = "/#/" + strs[strs.length - 1];
  //console.log("tag = " +  tag);

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
            id={val.ref == tag ? "active" : ""}
            href={val.ref}
          >
            {" "}
            <div id="navIcon">{val.icon}</div>{" "}
            <div id="navTitle">{val.title}</div>
          </a>
        );
      })}
      <Login />
    </nav>
  );
}

export default function Page() {
  const [user, setUser] = useState(null);
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <div>
      <div className="header container">
        <h1 className="title">Body-Building Hub</h1>

        <NavBar />
      </div>
      <div className="contents container">
        <center>
          <UserContext.Provider value={providerValue}>
            <Contents />
          </UserContext.Provider>
        </center>
      </div>
    </div>
  );
}
