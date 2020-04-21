import React, { useState } from "react";
import Search from "../components/Search";
import BookInfo from "../components/BookInfo";

import { Link } from "react-router-dom";

import { BookDiv, CategoryKardWrapper, KardButtonMain } from "../App.styles";

function Books(props) {
  const [state, setState] = useState({
    results: [],
    expandedBook: null,
  });

  const setResults = (results) => {
    setState({ results });
  };

  const collapseBook = () => {
    setState({
      expandedBook: null,
    });
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
            What's your favourite Book?
          </h3>
        </div>
        <div className="jumbotron">
          {state.expandedBook ? (
            <BookInfo
              bookData={state.expandedBook}
              collapseBook={collapseBook}
            />
          ) : (
            <Search
              chgBook={props.chgBook}
              results={state.results}
              setResults={setResults}
              expandBook={expandBook}
            />
          )}
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

export default Books;
