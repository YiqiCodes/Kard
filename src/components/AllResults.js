import React from "react";
import SearchResult from "./SearchResult";
import PropTypes from "prop-types";

import { SearchDiv } from "../App.styles";
import "../pages/Albums.css";


const AllResults = ({ books, expandBook, chgBook }) => {
  return (
    <div className="resultContainer">
      <SearchDiv className="row">
        {books.map(book => (
          <SearchResult bookData={book} key={book.id} expandBook={expandBook}
          chgBook={chgBook} 
          />
        ))}
      </SearchDiv>
    </div>
  );
};

AllResults.propTypes = {
  books: PropTypes.array,
  expandBook: PropTypes.func
};

export default AllResults;
