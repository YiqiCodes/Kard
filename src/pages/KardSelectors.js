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
  CategoryKardWrapper,
  KardCategoryOutterContainer,
  KardCategoryTitle,
  KardButtonMain,
  MainKardImage,
  KardCategoryContainer,
  MainKardText,
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
              {/* album begins */}
              <KardCategoryOutterContainer>
                <KardCategoryTitle
                  style={{ background: "#e6fff7", color: "black" }}
                >
                  Album
                </KardCategoryTitle>
                <KardCategoryContainer
                  style={{
                    boxShadow: "7px 7px 5px 0px #e6fff7",
                  }}
                >
                  {faveAlbum === null ? (
                    <MainKardImage
                      src={musicIcon}
                      alt=""
                      style={{ maxHeight: "75%" }}
                      onClick={() => setSelectedKard(1)}
                    />
                  ) : (
                    <>
                      <MainKardImage
                        style={{
                          minWidth: "100px",
                          minHeight: "100px",
                          maxHeight: "100px",
                          maxWidth: "100px",
                        }}
                        src={faveAlbum.artworkUrl60}
                        alt="Album cover"
                        onClick={() => setSelectedKard(1)}
                      />
                      <MainKardText>{faveAlbum.collectionName}</MainKardText>
                    </>
                  )}
                </KardCategoryContainer>
              </KardCategoryOutterContainer>
              {/* book begins */}
              <KardCategoryOutterContainer>
                <KardCategoryTitle style={{ background: "#45806d" }}>
                  Book
                </KardCategoryTitle>
                <KardCategoryContainer
                  style={{ boxShadow: "7px 7px 5px 0px #45806d" }}
                >
                  {faveBook === null ? (
                    <MainKardImage
                      src={bookIcon}
                      alt=""
                      onClick={() => setSelectedKard(2)}
                    />
                  ) : (
                    <>
                      <MainKardImage
                        className="Kard-dashboard"
                        src={faveBook.best_book.image_url}
                        alt="Book cover"
                        onClick={() => setSelectedKard(2)}
                      />
                      <MainKardText>{faveBook.best_book.title}</MainKardText>
                    </>
                  )}
                </KardCategoryContainer>
              </KardCategoryOutterContainer>

              {/* movie begins */}
              <KardCategoryOutterContainer>
                <KardCategoryTitle style={{ background: "#6b8079" }}>
                  Movie
                </KardCategoryTitle>
                <KardCategoryContainer
                  style={{ boxShadow: "7px 7px 5px 0px #6b8079" }}
                >
                  {faveMovie === null ? (
                    <MainKardImage
                      src={movieIcon}
                      alt=""
                      onClick={() => setSelectedKard(3)}
                    />
                  ) : (
                    <>
                      <MainKardImage
                        className="Kard-dashboard"
                        src={`https://image.tmdb.org/t/p/w500${faveMovie.poster_path}`}
                        alt="Book cover"
                        onClick={() => setSelectedKard(3)}
                      />
                      <MainKardText>{faveMovie.title}</MainKardText>
                    </>
                  )}
                </KardCategoryContainer>
              </KardCategoryOutterContainer>

              {/* restaurent begins */}
              <KardCategoryOutterContainer>
                <KardCategoryTitle
                  style={{ background: "#d6fff2", color: "black" }}
                >
                  Restaurant
                </KardCategoryTitle>
                <KardCategoryContainer
                  style={{ boxShadow: "7px 7px 5px 0px #d6fff2" }}
                >
                  {faveResto === null ? (
                    <MainKardImage
                      src={restaurantIcon}
                      alt=""
                      onClick={() => setSelectedKard(4)}
                    />
                  ) : (
                    <>
                      <MainKardImage
                        className="resto_thumbnail"
                        src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=100&photoreference=${faveResto.photos[0].photo_reference}&key=AIzaSyAcLOiaEp4qBb1Wt2V_dyR6Ze1sgIEfUhs`}
                        alt="Restaurant"
                        onClick={() => setSelectedKard(4)}
                      />
                      <MainKardText>{faveResto.name}</MainKardText>
                    </>
                  )}
                </KardCategoryContainer>
              </KardCategoryOutterContainer>
            </KardSelectorContainer>
          </WhichKardWrapper>
        </>
      ) : null}
      {selectedKard === 1 ? (
        <>
          <CategoryKardWrapper>
            <Albums chgAlbum={chgAlbum}></Albums>
            <KardButtonMain
              style={{
                minHeight: "40px",
                marginBottom: "2rem",
              }}
              onClick={() => setSelectedKard(0)}
            >
              Go Back
            </KardButtonMain>
          </CategoryKardWrapper>
        </>
      ) : null}
      {selectedKard === 2 ? (
        <>
          <CategoryKardWrapper>
            <Books chgBook={chgBook}></Books>
            <KardButtonMain
              style={{
                minHeight: "40px",
                marginBottom: "2rem",
                background: "#45806d",
              }}
              onClick={() => setSelectedKard(0)}
            >
              Go Back
            </KardButtonMain>
          </CategoryKardWrapper>
        </>
      ) : null}
      {selectedKard === 3 ? (
        <>
          <CategoryKardWrapper>
            <Movies chgMovie={chgMovie}></Movies>
            <KardButtonMain
              style={{
                minHeight: "40px",
                marginBottom: "2rem",
                background: "d6fff2",
              }}
              onClick={() => setSelectedKard(0)}
            >
              Go Back
            </KardButtonMain>
          </CategoryKardWrapper>
        </>
      ) : null}
      {selectedKard === 4 ? (
        <>
          <CategoryKardWrapper>
            <Restaurants chgResto={chgResto}></Restaurants>
            <KardButtonMain
              style={{
                minHeight: "40px",
                marginBottom: "2rem",
                background: "#6b8079",
              }}
              onClick={() => setSelectedKard(0)}
            >
              Go Back
            </KardButtonMain>
          </CategoryKardWrapper>
        </>
      ) : null}
    </>
  );
};

export default KardSelector;
