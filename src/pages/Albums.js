import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import "./Albums.css";

const Albums = (props) => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [picked, setPicked] = useState(undefined);

  let keyValue = 0;

  useEffect(() => {
    const requestURL =
      `https://cors-anywhere.herokuapp.com/` +
      `https://itunes.apple.com/search?term=${term}&media=music&entity=album`;
    axios.get(requestURL).then((response) => {
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
          props.chgAlbum(result);
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
        <h3
          style={{
            display: "flex",
            justifyContent: "center",
            fontWeight: "200",
          }}
          className="text-muted"
        >
          What's your favourite Album?
        </h3>
        <form className="formDefault" noValidate autoComplete="off">
          <TextField
            className="textFieldDefault"
            id="outlined-basic"
            label="Search by Artist"
            variant="outlined"
            onChange={(event) => setTerm(event.target.value)}
          />
        </form>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "5px 0",
          }}
        >
          {picked !== undefined ? (
            <>
              <img
                className="album_thumbnail"
                src={picked.artworkUrl60}
                alt="Album"
              />
              <div style={{ margin: 0 }} className="album_name">
                {picked.collectionName}
              </div>
            </>
          ) : null}
        </div>
        <div className="resultsBox">{ShowResults}</div>
      </main>
    </Fragment>
  );
};

export default Albums;
