// src/components/Profile.js

import React, { useState } from "react";
import { useAuth0 } from "../react-auth0-spa";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));


const Profile = (props) => {
  const { loading, user } = useAuth0();
  const classes = useStyles();


  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [country, setCountry] = useState(null);
  const [city, setCity] = useState(null);


  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.root} style={{ marginTop:'2em', display:'flex', justifyContent:'center' }}>
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
     
    </div>
  );
};

export default Profile;