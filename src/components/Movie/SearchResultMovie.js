import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SearchResultMovie = ({ movieData, expandBook, chgMovie }) => {
  /**
   * truncate book title to first 4 words and append it with '...'
   * indicating it is truncated.
   * Full title will be shown in a tooltip
   */

  // const { movieData } = props

  const movieTitle = movieData.original_title;
  let displayTitle = movieTitle.split(" ").slice(0, 6).join(" ");
  if (movieTitle.length > displayTitle.length) {
    displayTitle += "...";
  }

  return (
    <div className="col-lg-2 col-sm-4 col-md-3">
      <div className="card">
        <img
          style={{ display: "flex ", margin: "auto" }}
          className="card-img-top pl-2 pr-2 pt-2"
          src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
          alt="Smiley face"
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
            title={displayTitle.includes("...") ? movieTitle : ""}
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "8px",
              marginBottom: "8px",
            }}
          >
            {displayTitle}
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1em",
            }}
          >
            <Link to="/">
              <button
                style={{
                  borderRadius: "5px",
                  marginLeft: "3px",
                  background: "white",
                }}
                onClick={() => chgMovie(movieData)}
              >
                Select
              </button>
            </Link>
            <a
              href={`https://www.themoviedb.org/movie/${movieData.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                style={{
                  borderRadius: "5px",
                  marginLeft: "3px",
                  background: "white",
                }}
                // onClick={() => expandBook(movieData)}
              >
                More Info
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

SearchResultMovie.propTypes = {
  MovieData: PropTypes.object,
  expandBook: PropTypes.func,
};

export default SearchResultMovie;
