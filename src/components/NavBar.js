// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";
import axios from "axios";


const NavBar = (props) => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  const saveData = function() {
    const dataForm = {
      categories: { "album": props.faveAlbum, "book": props.faveBook, "movie": props.faveMovie, "resto": props.faveResto },
      favorites: { "fav":"album book movie resto" },
      name: user.email
    }

    axios
    .put(`http://localhost:8001/api/users`, dataForm)
    .then(res1 => {
      console.log(res1.data)
    })
    .catch(error => {
      console.log(error);
    });
  }

  return (
    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}

      {isAuthenticated && (
      <span>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/profile">Profile</Link>
        <button onClick={() => saveData()}>Save</button>
      </span>
    )}
    
    </div>
  );
};

export default NavBar;
