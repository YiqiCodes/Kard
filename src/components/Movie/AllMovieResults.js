import React from "react";
import SearchResultMovie from "./SearchResultMovie";
import PropTypes from "prop-types";

import { SearchDiv } from "../../App.styles";
import "../../pages/Albums.css";

const AllMovieResults = ({ movies, chgMovie, expandBook }) => {
  // console.log(movies)

  return (
    <div className="resultContainer">
      <SearchDiv className="row">
        {movies.map((movie) => (
          <SearchResultMovie
            movieData={movie}
            key={movie.id}
            expandBook={expandBook}
            chgMovie={chgMovie}
          />
        ))}
      </SearchDiv>
    </div>
  );
};

AllMovieResults.propTypes = {
  books: PropTypes.array,
  expandBook: PropTypes.func,
};

export default AllMovieResults;
