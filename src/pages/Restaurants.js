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
          setPicked(result.name);
          props.chgResto(result.name);
        }}
      >
        {result.name}
      </div>
    );
  });

  return (
    <>
      <Fragment>
        <main>
          <form className="formDefault" noValidate autoComplete="off">
            <TextField
              className="textFieldDefault"
              id="outlined-basic"
              label="Restaurant name"
              variant="outlined"
              onChange={(event) => setTerm(event.target.value)}
            />
          </form>
          <div className="picked">
            {picked !== undefined ? (
              <>
                <div className="restaurant_name">{picked}</div>
              </>
            ) : null}
          </div>
          <div className="resultsBox">{ShowResults}</div>
        </main>
      </Fragment>
    </>
  );
};

export default Restaurants;
