import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Albums.css";

import { CategoryKardWrapper, KardButtonMain } from "../App.styles";

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
      <div className="result" key={keyValue}>
        <img
          className="album_thumbnail"
          src={result.artworkUrl100}
          alt="Album"
        />
        <div className="infoMargin">{result.collectionName}</div>
        <div className="infoMargin">{result.artistName}</div>
        <div className="infoMargin">
          <Link to="/">
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
          </Link>
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
    <CategoryKardWrapper>
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
            <div style={{ fontWeight: "200" }} className="form-group row">
              <input
                style={{
                  marginBottom: "1em",
                  minWidth: "15rem",
                  minHeight: "2rem",
                  borderRadius: "8px",
                  border: "2px solid white",
                  textAlign: "center",
                  fontSize: "large",
                  fontWeight: "200",
                  padding: "0 1rem",
                }}
                className="mr-1 col-sm-9 form-control"
                type="text"
                placeholder="Search by Artist"
                name="searchText"
                onChange={(event) => setTerm(event.target.value)}
              />
            </div>
          </form>
          <div className="resultsBox">{ShowResults}</div>
        </main>
      </Fragment>
      <Link to="/">
        <KardButtonMain
          style={{
            minHeight: "40px",
            marginBottom: "2rem",
          }}
          // onClick={() => setSelectedKard(0)}
        >
          Go Back
        </KardButtonMain>
      </Link>
    </CategoryKardWrapper>
  );
};

export default Albums;
