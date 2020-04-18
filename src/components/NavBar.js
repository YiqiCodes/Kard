// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";
import axios from "axios";

import "./NavBar.css";

const NavBar = (props) => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  const saveData = function () {
    const dataForm = {
      categories: {
        album: props.faveAlbum,
        book: props.faveBook,
        movie: props.faveMovie,
        resto: props.faveResto,
      },
      favorites: { fav: "album book movie resto" },
      name: user.email,
    };

    axios
      .put(`http://localhost:8001/api/users`, dataForm)
      .then((res1) => {
        console.log(res1.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        border: "1px solid black",
        background: "black",
        padding: "5px",
      }}
    >
      {isAuthenticated && (
        <span>
          <Link
            className="NavBar-Button"
            style={{
              color: "white",
              font: "400 15px Arial",
              textDecoration: "none",
            }}
            to="/"
          >
            Home
          </Link>

          <Link
            className="NavBar-Button"
            style={{
              marginLeft: "1rem",
              color: "white",
              font: "400 15px Arial",
              textDecoration: "none",
            }}
            to="/profile"
          >
            Profile
          </Link>
          <button
            className="NavBar-Button"
            style={{
              marginLeft: "1rem",
              color: "white",
              font: "400 15px Arial",
              textDecoration: "none",
            }}
            onClick={() => saveData()}
          >
            Save Kard
          </button>

          <Link
            className="NavBar-Button"
            style={{
              marginLeft: "1rem",
              color: "white",
              font: "400 15px Arial",
              textDecoration: "none",
            }}
            to="/about"
          >
            About
          </Link>
        </span>
      )}
      {!isAuthenticated && (
        <button
          className="NavBar-Button"
          style={{ color: "white" }}
          onClick={() => loginWithRedirect({})}
        >
          Log In
        </button>
      )}

      {isAuthenticated && (
        <button
          className="NavBar-Button"
          style={{ color: "white" }}
          onClick={() => logout()}
        >
          Log Out
        </button>
      )}
    </div>
  );
};

export default NavBar;
