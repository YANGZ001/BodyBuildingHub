import { func } from "prop-types";

import React, { useContext, useState, useMemo } from "react";

import Login from "./Login.jsx";

import Contents from "./Contents.jsx";

import "./Page.css";
import { UserContext } from "./UserContext.jsx";
import { loginBBH } from "../utils/loginBBH.jsx";

function NavBar() {
  const url = String(document.location);
  var strs = url.split("/");
  const tag = "/#/" + strs[strs.length - 1];

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
    </nav>
  );
}

export default function Page() {
  const [user, setUser] = useState(null);
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <div>
      <UserContext.Provider value={providerValue}>
        <div className="header container">
          <h1 className="title">Body-Building Hub</h1>
          <NavBar />
          <Login />
          <pre>{JSON.stringify(user, null, 2)}</pre>
          {user ? (
            <button
              class="ui button"
              onClick={() => {
                // call logout to server OR cheat:
                setUser(null);
              }}
            >
              Logout
            </button>
          ) : (
            <button
              onClick={async () => {
                const user = await loginBBH();
                setUser(user);
              }}
            >
              Login
            </button>
          )}
        </div>
        <div className="contents container">
          <center>{user ? <Contents /> : <h3>Please Log In</h3>}</center>
        </div>
      </UserContext.Provider>
    </div>
  );
}
