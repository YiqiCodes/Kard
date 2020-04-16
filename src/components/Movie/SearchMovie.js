import React, { useState } from "react";
import "./SearchMovie.css";
import PropTypes from "prop-types";
import { SearchDiv } from "../../App.styles";

import AllMovieResults from "./AllMovieResults";

function SearchMovie(props) {
  const [title, setTitle] = useState("");
  // const [movies, setMovies] = useState([]);

  const sendRequest = (title) => {
    setTimeout(() => {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=045667824413bb71ad2a7717041e8757&query=${title}
     `;
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          //limit the number of movies shown
          const shortData = data.results.slice(0, 6);
          // setMovies(shortData)
          props.setResults(shortData);
        })
        .catch((error) => {
          props.setResults([]);
        });
    }, 1300);
  };

  const onTextChange = (e) => {
    setTitle(e.target.value);

    // if (title.length > 1 ){
    sendRequest(e.target.value);
    // }
  };

  return (
    <SearchDiv>
      <div
        style={{ margin: "auto", fontWeight: "200" }}
        className="form-group row"
      >
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
          placeholder="Search by title or author"
          name="searchText"
          onChange={onTextChange}
          value={title}
        />
      </div>

      {/* <input className="button" type="submit" onClick={handleSubmit} value="Search"/> */}

      <div className="movie-div">
        {props.results.length !== 0 ? (
          <AllMovieResults
            // movies={movies}
            movies={props.results}
            chgMovie={props.chgMovie}
            expandBook={props.expandBook}
            mov={props.results}
          />
        ) : null}
      </div>
    </SearchDiv>
  );
}

SearchMovie.propTypes = {
  results: PropTypes.array,
  setResults: PropTypes.func,
  expandBook: PropTypes.func,
};

export default SearchMovie;
