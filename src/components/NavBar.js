// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";
import axios from "axios";


const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const saveData = function(data) {
    console.log(data);
    // axios
    // .put(`http://localhost:8001/api/budget/${user}`, newBud)
    // .then(res1 => {
    //   axios.get(`http://localhost:8001/api/budget/${user}`).then(res2 => {
    //     dispatch({
    //       ...state,
    //       type: "SET_DATA",
    //       budget: res2.data
    //     });

    //     if (state.budget.length === 0) {
    //       updateLit();
    //     }
    //   });
    // })
    // .catch(error => {
    //   console.log(error);
    // });
  }

  return (
    <div>
      {!isAuthenticated && (
        <>
        <button onClick={() => loginWithRedirect({})}>Log in</button>
        <button onClick={() => SaveData(props.faveAlbum)}>Save</button>
        </>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}

      {isAuthenticated && (
      <span>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/profile">Profile</Link>
      </span>
    )}
    
    </div>
  );
};

export default NavBar;
