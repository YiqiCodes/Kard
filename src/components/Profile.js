// src/components/Profile.js

import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";
import "./Profile.css";

const Profile = () => {
  const { loading, user } = useAuth0();

  // console.log(user, 'by tom')

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <div className="profileGrid">
        <div className="profile01">
          <img 
            className="profileImg"
            src={user.picture}
            alt="Profile"
          />
        </div>
        <div className="profile02">
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
        <code>{JSON.stringify(user, null, 2)}</code>
      </div>
    </Fragment>
  );
};

export default Profile;
