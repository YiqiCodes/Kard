import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import "./Albums.css";

const Restaurants = (props) => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [picked, setPicked] = useState(undefined);

  let keyValue = 0;

  useEffect(() => {
    const requestURL =
      `https://cors-anywhere.herokuapp.com/` +
      `https://maps.googleapis.com/maps/api/place/textsearch/json?input=${term}&types=food|restaurant&location=43.65290,-79.38490&key=AIzaSyAcLOiaEp4qBb1Wt2V_dyR6Ze1sgIEfUhs`;

    axios.get(requestURL).then((response) => {
      setResults(response.data.results);
      console.log(response.data.results);
    });
  }, [term]);

  const ShowResults = results.map((result) => {
    keyValue += 1;

    console.log(result.name);

    return (
      <div
        className="result"
        key={keyValue}
        onClick={(event) => {
          setPicked(result);
        }}
      >
        <img
          className="album_thumbnail"
          src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=100&photoreference=${result.photos[0].photo_reference}&key=AIzaSyAcLOiaEp4qBb1Wt2V_dyR6Ze1sgIEfUhs`}
          alt="Restaurant"
        />
        <div className="infoMargin">{result.name}</div>
        <div className="infoMargin">
          <button
            style={{
              borderRadius: "5px",
              marginLeft: "3px",
              background: "white",
            }}
            onClick={() => props.chgResto(result)}
          >
            Select
          </button>
          <button
            style={{
              borderRadius: "5px",
              marginLeft: "3px",
              background: "white",
            }}
            // onClick={() => expandBook(bookData)}
          >
            More Info
          </button>
        </div>
      </div>
    );
  });

  return (
    <>
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
            What's your favourite Restaurant?
          </h3>
          <form className="formDefault" noValidate autoComplete="off">
            <TextField
              className="textFieldDefault"
              id="outlined-basic"
              label="Restaurant name"
              variant="outlined"
              onChange={(event) => setTerm(event.target.value)}
            />
          </form>
          {/* <div className="picked">
            {picked !== undefined ? (
              <>
                <img
                  className="resto_thumbnail"
                  src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=100&photoreference=${picked.photos[0].photo_reference}&key=AIzaSyAcLOiaEp4qBb1Wt2V_dyR6Ze1sgIEfUhs`}
                  alt="Restaurant"
                />
                <div className="restaurant_name">{picked.name}</div>
              </>
            ) : null}
          </div> */}
          <div className="resultsBox">{ShowResults}</div>
        </main>
      </Fragment>
    </>
  );
};

export default Restaurants;
