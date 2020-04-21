import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchMovie from "../components/Movie/SearchMovie";
import { BookDiv, CategoryKardWrapper, KardButtonMain } from "../App.styles";

function Movies(props) {
  const [state, setState] = useState({
    results: [],
    expandedBook: null,
  });

  const setResults = (results) => {
    setState({ results });
  };

  const expandBook = (expandedBook) => {
    setState({ expandedBook });
  };

  return (
    <CategoryKardWrapper>
      <BookDiv style={{ height: "100%" }} className="container">
        <div className="header clearfix mt-5">
          <h3
            style={{
              display: "flex",
              justifyContent: "center",
              fontWeight: "200",
            }}
          >
            What's your favourite Movie?
          </h3>
        </div>
        <div className="jumbotron">
          <SearchMovie
            chgMovie={props.chgMovie}
            results={state.results}
            setResults={setResults}
            expandBook={expandBook}
          />
        </div>
      </BookDiv>
      <Link to="/">
        <KardButtonMain
          style={{
            minHeight: "60%",
            minWidth: "100%",
            marginBottom: "2rem",
            background: "#fdf79a",
          }}
        >
          Go Back
        </KardButtonMain>
      </Link>
    </CategoryKardWrapper>
  );
}
export default Movies;
