import React from "react";
import SearchResult from "./SearchResult";
import PropTypes from "prop-types";

import { SearchDiv } from "../App.styles";


const AllResults = ({ books, expandBook }) => {
  return (
    <SearchDiv className="row">
      {books.map(book => (
        <SearchResult bookData={book} key={book.id} expandBook={expandBook} />
      ))}
    </SearchDiv>
  );
};

AllResults.propTypes = {
  books: PropTypes.array,
  expandBook: PropTypes.func
};

export default AllResults;
