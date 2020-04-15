import React, { useState } from "react";

//components
import Albums from "./Albums";
import Books from "./Books";
import Movies from "./Movies";
import Restaurants from "./Restaurants";

//styles
import {
  KardSelectorContainer,
  WhichKardWrapper,
  AlbumsKardWrapper,
  BooksKardWrapper,
  MoviesKardWrapper,
  RestaurantKardWrapper,
  KardButtonOne,
  KardButtonTwo,
} from "../App.styles";

const KardSelector = () => {
  const [selectedKard, setSelectedKard] = useState(0);

  const [faveAlbum, setFaveAlbum] = useState(null);
  const [faveBook, setFaveBook] = useState(null);
  const [faveResto, setFaveResto] = useState(null);

  const changeAlbum = function (info) {
    setFaveAlbum(info);
  };

  const changeBook = function (info) {
    setFaveBook(info);
    setSelectedKard(0);
  };

  const changeResto = function (info) {
    setFaveResto(info);
  };

  return (
    <>
      {selectedKard === 0 ? (
        <>
          <WhichKardWrapper>
            <KardSelectorContainer>
              {faveAlbum === null ? (
                <KardButtonOne onClick={() => setSelectedKard(1)}>
                  <p>Album</p>
                </KardButtonOne>
              ) : (
                <>
                  <img
                    style={{
                      margin: "auto",
                    }}
                    className="card-img-top pl-2 pr-2 pt-2"
                    src={faveAlbum.artworkUrl60}
                    alt="Album cover"
                    height="100px"
                    onClick={() => setSelectedKard(1)}
                  />
                  <div>{faveAlbum.artistName}</div>
                  <div>{faveAlbum.collectionName}</div>
                </>
              )}
              {faveBook === null ? (
                <KardButtonTwo onClick={() => setSelectedKard(2)}>
                  <p>Books</p>
                </KardButtonTwo>
              ) : (
                <>
                  <img
                    className="Kard-dashboard"
                    src={faveBook.best_book.image_url}
                    alt="Book cover"
                    onClick={() => setSelectedKard(2)}
                  />
                  <div>{faveBook.best_book.author.name}</div>
                  <div>{faveBook.best_book.title}</div>
                </>
              )}
              <KardButtonOne onClick={() => setSelectedKard(3)}>
                Movies
              </KardButtonOne>
              <KardButtonTwo onClick={() => setSelectedKard(4)}>
                {faveResto !== null ? (
                  <>
                    <div>{faveResto}</div>
                  </>
                ) : (
                  <p>Restaurant</p>
                )}
              </KardButtonTwo>
            </KardSelectorContainer>
          </WhichKardWrapper>
        </>
      ) : null}
      {selectedKard === 1 ? (
        <>
          <AlbumsKardWrapper>
            <Albums changeAlbum={changeAlbum}></Albums>
            <KardButtonOne
              style={{
                minHeight: "40px",
              }}
              onClick={() => setSelectedKard(0)}
            >
              Go Back
            </KardButtonOne>
          </AlbumsKardWrapper>
        </>
      ) : null}
      {selectedKard === 2 ? (
        <>
          <BooksKardWrapper>
            <Books changeBook={changeBook}></Books>
            <KardButtonTwo
              style={{
                minHeight: "40px",
              }}
              onClick={() => setSelectedKard(0)}
            >
              Go Back
            </KardButtonTwo>
          </BooksKardWrapper>
        </>
      ) : null}
      {selectedKard === 3 ? (
        <>
          <MoviesKardWrapper>
            <Movies></Movies>
            <KardButtonOne
              style={{
                minHeight: "40px",
              }}
              onClick={() => setSelectedKard(0)}
            >
              Go Back
            </KardButtonOne>
          </MoviesKardWrapper>
        </>
      ) : null}
      {selectedKard === 4 ? (
        <>
          <RestaurantKardWrapper>
            <Restaurants changeResto={changeResto}></Restaurants>
            <KardButtonTwo
              style={{
                minHeight: "40px",
              }}
              onClick={() => setSelectedKard(0)}
            >
              Go Back
            </KardButtonTwo>
          </RestaurantKardWrapper>
        </>
      ) : null}
    </>
  );
};

export default KardSelector;
