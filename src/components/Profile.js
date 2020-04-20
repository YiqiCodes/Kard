// src/components/Profile.js

import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";
import "./Profile.css";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Link } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexWrap: "wrap",
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: "25ch",
//   },
// }));

const Profile = (props) => {
  const { loading, user } = useAuth0();
  // const classes = useStyles();

  // const [name, setName] = useState(null);
  // const [email, setEmail] = useState(null);
  // const [country, setCountry] = useState(null);
  // const [city, setCity] = useState(null);

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  console.log(props.name, props.email, props.age, props.gender);

  return (
    <Fragment>
      <div className="profileGrid">
        <div className="profileL1">
          <img className="profileImg" src={user.picture} alt="Profile" />
        </div>
        <div className="profileL2">
          <p>Name on Kard:</p>
        </div>
        <div className="profileL3">
          <p>Email on Kard:</p>
        </div>
        <div className="profileL4">
          <p>Age:</p>
        </div>
        <div className="profileL5">
          <p>Gender:</p>
        </div>
        <div className="profileR1">
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
        <div className="profileR2">
          <TextField
            id="outlined-basic"
            margin="dense"
            variant="outlined"
            value={props.name}
            onInput={(e) => {
              props.setName(e.target.value);
            }}
          />
        </div>
        <div className="profileR3">
          <TextField
            id="outlined-basic"
            margin="dense"
            variant="outlined"
            value={props.email}
            onInput={(e) => {
              props.setEmail(e.target.value);
            }}
          />
        </div>
        <div className="profileR4">
          <TextField
            margin="dense"
            variant="outlined"
            type="number"
            inputProps={{
              min: "0",
              max: "125",
              step: "5",
            }}
            style={{ width: 80 }}
            value={props.age}
            onInput={(e) => {
              e.target.value = parseInt(
                Math.max(0, parseInt(e.target.value)).toString().slice(0, 3)
              );
              props.setAge(e.target.value);
            }}
          />
        </div>
        <div className="profileR5">
          <RadioGroup
            className="radioGrp"
            aria-label="gender"
            name="gender"
            value={props.gender}
            onChange={(e) => {
              props.setGender(e.target.value);
            }}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </div>
        <div className="profile06">
          <Link
            style={{
              color: "white",
              font: "400 15px Arial",
              textDecoration: "none",
              paddingLeft: "1rem",
            }}
            to="/"
          >
            <button
              className="profileSaveButton"
              onClick={() => props.saveData()}
            >
              save
            </button>
          </Link>
        </div>
      </div>
      {/* <div className={classes.root} style={{ marginTop:'2em', display:'flex', justifyContent:'center' }}>
        <div>        
          <TextField
            id="standard-full-width"
            label="Name"
            style={{ margin: 8 }}
            placeholder={user.handle || 'Name'}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="standard-full-width"
            label="Email"
            style={{ margin: 8 }}
            placeholder={user.email || 'E-mail'}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <div style={{display:'flex'}}>
          <TextField
            label="Country"
            id="margin-none"
            style={{width: '45%'}}
            defaultValue="Default Value"
            className={classes.textField}
          />
            <TextField
            label="City"
            id="margin-none"
            style={{width: '45%'}}
            defaultValue="Default Value"
            className={classes.textField}
          />
          </div>
        </div>
      </div> */}
    </Fragment>
  );
};

export default Profile;
