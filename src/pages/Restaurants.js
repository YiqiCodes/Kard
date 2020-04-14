import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./Albums.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      backgroundColor: "white",
      width: "25ch",
    },
  },
}));

const Restaurants = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [picked, setPicked] = useState(undefined);

  const classes = useStyles();

  useEffect(() => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/autocomplete/xml?input=${term}&types=establishment&location=37.76999,-122.44696&radius=500&key=AIzaSyAcLOiaEp4qBb1Wt2V_dyR6Ze1sgIEfUhs`
            )
      .then((response) => {
        setResults(response.data.results);
        console.log(response.data.results);
      });
  }, [term]);

  return (
    <>
    <Fragment>
      <main>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Restaurant name"
            variant="outlined"
            onChange={(event) => setTerm(event.target.value)}
          />
        </form>
        <div className="picked">
          {picked !== undefined ? (
            <>
              <div className="restaurant_name">found</div>
            </>
          ) : null}
        </div>
        <div className="resultsBox">found</div>
      </main>
    </Fragment>
    </>
  );
};

export default Restaurants;
