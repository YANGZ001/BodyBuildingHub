import React, { useContext, useState, useMemo } from "react";

import Login from "./Login.jsx";

import Contents from "./Contents.jsx";

import "./Page.css";
import { UserContext } from "./UserContext.jsx";

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
            key={val.link}
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
	/* Session Control */
  const [user, setUser] = useState(() => {
			let data = sessionStorage.getItem('trace');
			if (data) {
				console.log("get user = " + data);
				return JSON.parse(data);
			}
			else return null;
		});
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <div>
      <UserContext.Provider value={providerValue}>
        <div className="header container">
          <h1 className="title">Body-Building Hub</h1>
          <NavBar />
          {user ? (
            <button
              className="ui button"
              onClick={() => {
                setUser(null);
								sessionStorage.removeItem('trace');
								console.log("remove session");
              }}
            >
              Logout
            </button>
          ) : (
            <Login />
          )}
        </div>
        <div className="contents container">
          <center>
            {user ? <Contents /> : <h3>Please Log In to view Contents</h3>}
          </center>
        </div>
      </UserContext.Provider>
    </div>
  );
}
