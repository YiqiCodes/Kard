import React from "react";
import SearchResult from "../SearchResult";
import PropTypes from "prop-types";

import { SearchDiv } from "../../App.styles";


const AllMovieResults = ({ movies }) => {

  console.log(movies)

  return (
    <SearchDiv className="row">
      {movies.results.map(movie => (
       
       <h1>{movie.title}</h1>

      ))}
    </SearchDiv>
  );
};

AllMovieResults.propTypes = {
  books: PropTypes.array,
  expandBook: PropTypes.func
};

export default AllMovieResults;
