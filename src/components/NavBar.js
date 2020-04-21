import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";
import { NavBarButton, NavBarContainer } from "./Components.styles.js";

const NavBar = (props) => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const linkStyles = {
    color: "black",
    font: "400 15px Arial",
    textDecoration: "none",
    alignSelf: "center",
  };

  return (
    <NavBarContainer>
      {isAuthenticated && (
        <>
          <Link style={linkStyles} to="/">
            Home
          </Link>
          <Link style={linkStyles} to="/profile">
            Profile
          </Link>
          <Link style={linkStyles} to={`/kard/${user.nickname}`}>
            Public
          </Link>
          <NavBarButton onClick={() => props.saveData()}>Save</NavBarButton>
          <Link style={linkStyles} to="/about">
            About
          </Link>
          <NavBarButton onClick={() => logout()}>Log Out</NavBarButton>
        </>
      )}

      {!isAuthenticated && (
        <>
          <Link style={linkStyles} to="/">
            Home
          </Link>
          <Link style={linkStyles} to="/about">
            About
          </Link>
          <NavBarButton onClick={() => loginWithRedirect({})}>
            Log In
          </NavBarButton>
        </>
      )}
    </NavBarContainer>
  );
};

export default NavBar;
