import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./Album.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      backgroundColor: "white",
      width: "25ch",
    },
  },
}));

const Albums = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [picked, setPicked] = useState(undefined);

  const classes = useStyles();
  let keyValue = 0;

  useEffect(() => {
    axios
      .get(
        `https://itunes.apple.com/search?term=${term}&media=music&entity=album`
      )
      .then((response) => {
        setResults(response.data.results);
        console.log(response.data.results);
      });
  }, [term]);

  const ShowResults = results.map((result) => {
    keyValue += 1;

    return (
      <div
        className="result"
        key={keyValue}
        onClick={(event) => {
          setPicked(result);
          console.log(result);
        }}
      >
        {result.collectionName}
      </div>
    );
  });

  return (
    <Fragment>
      <main>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Artist Name"
            variant="outlined"
            onChange={(event) => setTerm(event.target.value)}
          />
        </form>
        <div className="picked">
          {picked !== undefined ? (
            <>
              <img
                className="album__thumbnail"
                src={picked.artworkUrl60}
                alt="Album"
              />
              <div>{picked.collectionName}</div>
            </>
          ) : null}
        </div>
        <div className="resultsBox">{ShowResults}</div>
      </main>
    </Fragment>
  );
};

export default Albums;
