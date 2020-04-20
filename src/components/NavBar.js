import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";
import { NavBarButton, NavBarContainer } from "./Components.styles.js";

const NavBar = (props) => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <NavBarContainer>
      {isAuthenticated && (
        <div style={{ display: "flex", alignItems: "center" }}>
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

          <Link
            style={{
              marginLeft: "1rem",
              color: "white",
              font: "400 15px Arial",
              textDecoration: "none",
            }}
            to={`/kard/${user.nickname}`}
          >
            Public
          </Link>

          <NavBarButton onClick={() => props.saveData()}>Save</NavBarButton>

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
        </div>
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
            alignSelf: "center",
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
