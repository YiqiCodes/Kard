import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import "./Albums.css";

const Albums = (props) => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  let keyValue = 0;

  useEffect(() => {
    const requestURL =
      `https://cors-anywhere.herokuapp.com/` +
      `https://itunes.apple.com/search?term=${term}&media=music&entity=album`;
    axios.get(requestURL).then((response) => {
      setResults(response.data.results);
    });
  }, [term]);

  const ShowResults = results.map((result) => {
    keyValue += 1;

    return (
      <div
        className="result"
        key={keyValue}
      >
        <img
          className="album_thumbnail"
          src={result.artworkUrl100}
          alt="Album"
        />
        <div className="infoMargin">{result.collectionName}</div>
        <div className="infoMargin">{result.artistName}</div>
        <div className="infoMargin">
          <button
            style={{
              borderRadius: "5px",
              marginLeft: "3px",
              background: "white",
            }}
            onClick={() => props.chgAlbum(result)}
          >
            Select
          </button>
          <a
            href={`${result.collectionViewUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              style={{
                borderRadius: "5px",
                marginLeft: "3px",
                background: "white",
              }}
            >
              More Info
            </button>
          </a>

        </div>
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
        <div className="resultsBox">{ShowResults}</div>
      </main>
    </Fragment>
  );
};

export default Albums;
