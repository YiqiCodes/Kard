import React from "react";
import PropTypes from "prop-types";

const SearchResult = ({ bookData, expandBook, chgBook }) => {
  /**
   * truncate book title to first 4 words and append it with '...'
   * indicating it is truncated.
   * Full title will be shown in a tooltip
   */
  const bookTitle = bookData.best_book.title;
  let displayTitle = bookTitle.split(" ").slice(0, 6).join(" ");
  if (bookTitle.length > displayTitle.length) {
    displayTitle += "...";
  }

  return (
    <div className="col-lg-2 col-sm-4 col-md-3">
      <div className="card">
        <img
          style={{ display: "flex ", margin: "auto" }}
          className="card-img-top pl-2 pr-2 pt-2"
          src={bookData.best_book.image_url}
          alt="Book cover"
          height="200px"
        />
        <div
          className="card-body"
          style={{ display: "flex ", flexDirection: "column", margin: "auto" }}
        >
          <p
            className="text-sm-left card-title font-weight-bold"
            data-toggle="tooltip"
            data-placement="bottom"
            title={displayTitle.includes("...") ? bookTitle : ""}
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "8px",
              marginBottom: "8px",
            }}
          >
            {displayTitle}
          </p>
          <p
            className="text-sm-left card-text"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "0px",
              marginBottom: "8px",
            }}
          >
            {bookData.best_book.author.name}
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1em",
            }}
          >
            <button
              className="btn btn-primary"
              onClick={() => chgBook(bookData)}
            >
              Select
            </button>

            <button
              className="btn btn-primary"
              onClick={() => expandBook(bookData)}
            >
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

SearchResult.propTypes = {
  bookData: PropTypes.object,
  expandBook: PropTypes.func,
};

export default SearchResult;
