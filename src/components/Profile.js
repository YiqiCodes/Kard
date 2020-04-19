// src/components/Profile.js

import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";
import "./Profile.css";
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import axios from "axios";
import { Link } from "react-router-dom";

const Profile = (props) => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  console.log(props.name, props.age, props.gender)

  return (
    <Fragment>
        <div className="profileGrid">
          <div className="profileL1">
            <img 
              className="profileImg"
              src={user.picture}
              alt="Profile"
            />
          </div>
          <div className="profileL2">
            <p>Name on Kard:</p>
          </div>
          <div className="profileL3">
            <p>Age:</p>
          </div>
          <div className="profileL4">
            <p>Gender:</p>
          </div>
          <div className="profileR1">
            <p>{user.name}</p> 
            <p>{user.email}</p>
          </div>
          <div className="profileR2">
            <TextField 
              id="outlined-basic"
              label="Name"
              margin="dense"
              variant="outlined"
              value={props.name}
              onInput={e => {
                props.setName(e.target.value);
              }}
            />
          </div>
          <div className="profileR3">
            <TextField
              label="Age"
              margin="dense"
              variant="outlined"
              type="number"
              inputProps={{
                min: "0",
                max: "125",
                step: "5"
              }}
              style={{ width: 80 }}
              value={props.age}
              onInput={e => {
                e.target.value =
                  parseInt(
                    Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 3)
                  );
                  props.setAge(e.target.value);
              }}
            />
          </div>
          <div className="profileR4">
            <RadioGroup
              className="radioGrp"
              aria-label="gender"
              name="gender"
              value={props.gender}
              onChange={(e) => {
                props.setGender(e.target.value);
              }}>
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </div>
          <div className="profile05">
            <Link
              style={{
                color: "white",
                font: "400 15px Arial",
                textDecoration: "none",
                paddingLeft: "1rem",
              }}
              to="/"
            >
              <button className="profileSaveButton"
                onClick={() => props.saveData()}
              >
                save
              </button>
            </Link>
          </div>
        </div>
    </Fragment>
  );
};

export default Profile;
