import React, { useState } from "react";

//components
import Albums from "./Albums";
import Books from "./Books";
import Movies from "./Movies";
import Restaurants from "./Restaurants";
import musicIcon from "../assets/images/album.png";
import bookIcon from "../assets/images/book2.png";
import movieIcon from "../assets/images/movie2.png";
import restaurantIcon from "../assets/images/restaurant2.png";

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
  KardButtonThree,
  KardButtonFour,
  MainKardImage,
  KardCategoryContainer,
} from "../App.styles";

const KardSelector = () => {
  const [selectedKard, setSelectedKard] = useState(0);

  const [faveAlbum, setFaveAlbum] = useState(null);
  const [faveBook, setFaveBook] = useState(null);
  const [faveResto, setFaveResto] = useState(null);
  const [faveMovie, setFaveMovie] = useState(null);

  const chgAlbum = function (info) {
    setFaveAlbum(info);
    setSelectedKard(0);
  };

  const chgBook = function (info) {
    setFaveBook(info);
    setSelectedKard(0);
  };

  const chgResto = function (info) {
    setFaveResto(info);
    setSelectedKard(0);
  };

  const chgMovie = function (info) {
    setFaveMovie(info);
    setSelectedKard(0);
  };

  return (
    <>
      {selectedKard === 0 ? (
        <>
          <WhichKardWrapper>
            <KardSelectorContainer>
              {faveAlbum === null ? (
                <KardButtonOne onClick={() => setSelectedKard(1)}>
                  <MainKardImage
                    src={musicIcon}
                    alt=""
                    style={{ maxHeight: "75%" }}
                  ></MainKardImage>
                </KardButtonOne>
              ) : (
                <KardCategoryContainer>
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
                  <div style={{ color: "white" }}>{faveAlbum.artistName}</div>
                  <div style={{ color: "white" }}>
                    {faveAlbum.collectionName}
                  </div>
                </KardCategoryContainer>
              )}
              {faveBook === null ? (
                <KardButtonTwo onClick={() => setSelectedKard(2)}>
                  <MainKardImage src={bookIcon} alt=""></MainKardImage>
                </KardButtonTwo>
              ) : (
                <KardCategoryContainer>
                  <img
                    className="Kard-dashboard"
                    src={faveBook.best_book.image_url}
                    alt="Book cover"
                    onClick={() => setSelectedKard(2)}
                  />
                  <div style={{ color: "white" }}>
                    {faveBook.best_book.author.name}
                  </div>
                  <div style={{ color: "white" }}>
                    {faveBook.best_book.title}
                  </div>
                </KardCategoryContainer>
              )}
              {/* movies begin */}

              {faveMovie === null ? (
                <KardButtonThree onClick={() => setSelectedKard(3)}>
                  <MainKardImage src={movieIcon} alt=""></MainKardImage>
                </KardButtonThree>
              ) : (
                <KardCategoryContainer>
                  <img
                    className="Kard-dashboard"
                    src={`https://image.tmdb.org/t/p/w500${faveMovie.poster_path}`}
                    alt="Book cover"
                    onClick={() => setSelectedKard(3)}
                  />
                  <div style={{ color: "white" }}>{faveMovie.title}</div>
                </KardCategoryContainer>
              )}

              {/* restaurent begins */}

              {faveResto === null ? (
                <KardButtonFour onClick={() => setSelectedKard(4)}>
                  <MainKardImage src={restaurantIcon} alt=""></MainKardImage>
                </KardButtonFour>
              ) : (
                <KardCategoryContainer>
                  <img
                    className="resto_thumbnail"
                    src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=100&photoreference=${faveResto.photos[0].photo_reference}&key=AIzaSyAcLOiaEp4qBb1Wt2V_dyR6Ze1sgIEfUhs`}
                    alt="Restaurant"
                    onClick={() => setSelectedKard(4)}
                  />
                  <div style={{ color: "white" }}>{faveResto.name}</div>
                </KardCategoryContainer>
              )}
            </KardSelectorContainer>
          </WhichKardWrapper>
        </>
      ) : null}
      {selectedKard === 1 ? (
        <>
          <AlbumsKardWrapper>
            <Albums chgAlbum={chgAlbum}></Albums>
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
            <Books chgBook={chgBook}></Books>
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
            <Movies chgMovie={chgMovie}></Movies>
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
            <Restaurants chgResto={chgResto}></Restaurants>
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
