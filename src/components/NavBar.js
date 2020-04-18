import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";
import axios from "axios";
import { NavBarButton, NavBarContainer } from "./Components.styles.js";

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
    <NavBarContainer>
      {isAuthenticated && (
        <span>
          <Link
            style={{
              color: "white",
              font: "400 15px Arial",
              textDecoration: "none",
              paddingLeft: "1rem",
            }}
            to="/"
          >
            Home
          </Link>

          <Link
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
          <NavBarButton onClick={() => saveData()}>Save Kard</NavBarButton>

          <Link
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
        <NavBarButton onClick={() => loginWithRedirect({})}>
          Log In
        </NavBarButton>
      )}

      {isAuthenticated && (
        <NavBarButton
          style={{
            paddingRight: "1rem",
          }}
          onClick={() => logout()}
        >
          Log Out
        </NavBarButton>
      )}
    </NavBarContainer>
  );
};

export default NavBar;
