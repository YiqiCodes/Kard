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
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${term}&types=establishment&location=37.76999,-122.44696&radius=500&key=AIzaSyAcLOiaEp4qBb1Wt2V_dyR6Ze1sgIEfUhs`;

    axios.get(requestURL).then((response) => {
      setResults(response.data.predictions);
      console.log(response);
    });
  }, [term]);

  const ShowResults = results.map((result) => {
    keyValue += 1;

    console.log(result.terms[0].value);

    return (
      <div
        className="result"
        key={keyValue}
        onClick={(event) => {
          setPicked(result.terms[0].value);
          props.chgResto(result.terms[0].value);
        }}
      >
        {result.terms[0].value}
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
