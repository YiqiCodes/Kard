import React, { Fragment, useState, useEffect } from "react";
import Axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './Album.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      backgroundColor: 'white',
      width: '25ch',
    },
  },
}));

const Home = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [picked, setPicked] = useState(undefined);

  const classes = useStyles();

  useEffect(() => {
    Axios.get(`https://itunes.apple.com/search?term=${term}&media=music&entity=album&attribute=artistTerm`)
    .then((response) => {
      setResults(response.data.results);
      console.log(response.data.results)
    });
  }, [term]);

  const ShowResults = results.map(result => {
    return (
    <div
      className="result" 
      onClick={event => {
        setPicked(result);
        console.log(result);
      }}
    >{result.collectionName}</div>
    )
  });

  return (
    <Fragment>
      <main>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Artist Name"
            variant="outlined"
            onChange={event => setTerm(event.target.value)}/>
        </form>
        <div className="picked">
          {picked !== undefined ?
            <>
              <img className="album__thumbnail" src={picked.artworkUrl60 } alt="Album" />
              <div>{picked.collectionName}</div>
            </>
          : null}
        </div>
        <div className="resultsBox">{ShowResults}</div>
      </main>
    </Fragment>
  );
};

export default Home;
