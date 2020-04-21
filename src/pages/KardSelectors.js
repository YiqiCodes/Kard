import React from "react";
import { Link } from "react-router-dom";

//components
import bookIcon from "../assets/images/book2.png";
import movieIcon from "../assets/images/movie2.png";
import restaurantIcon from "../assets/images/restaurant2.png";
import musicIcon from "../assets/images/album.png";

//styles
import {
  KardSelectorContainer,
  WhichKardWrapper,
  KardCategoryOutterContainer,
  KardCategoryTitle,
  MainKardImage,
  KardCategoryContainer,
  MainKardText,
} from "../App.styles";

const KardSelector = (props) => {
  const { faveAlbum, faveBook, faveResto, faveMovie } = props;

  const linkStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <>
      <>
        <WhichKardWrapper>
          <KardSelectorContainer>
            {/* album begins */}
            <KardCategoryOutterContainer>
              <KardCategoryTitle style={{ background: "#FFD1BD" }}>
                Album
              </KardCategoryTitle>
              <KardCategoryContainer
                style={{
                  boxShadow: "7px 7px 5px 0px #FFD1BD",
                }}
              >
                {faveAlbum === null || faveAlbum === undefined ? (
                  <>
                    <Link to="/albums" style={linkStyles}>
                      <MainKardImage src={musicIcon} alt="" />
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/albums" style={linkStyles}>
                      <MainKardImage
                        style={{
                          minWidth: "100px",
                          minHeight: "100px",
                        }}
                        src={faveAlbum.artworkUrl60.replace(
                          /60x60/g,
                          "500x500"
                        )}
                        alt="Album cover"
                      />
                    </Link>
                    <MainKardText>{faveAlbum.collectionName}</MainKardText>
                  </>
                )}
              </KardCategoryContainer>
            </KardCategoryOutterContainer>

            {/* book begins */}
            <KardCategoryOutterContainer>
              <KardCategoryTitle style={{ background: "#FFB0CD" }}>
                Book
              </KardCategoryTitle>
              <KardCategoryContainer
                style={{ boxShadow: "7px 7px 5px 0px #FFB0CD" }}
              >
                {faveBook === null || faveBook === undefined ? (
                  <>
                    <Link to="/books" style={linkStyles}>
                      <MainKardImage src={bookIcon} alt="" />
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/books" style={linkStyles}>
                      <MainKardImage
                        style={{
                          minWidth: "100%",
                          minHeight: "100%",
                        }}
                        className="Kard-dashboard"
                        src={faveBook.best_book.image_url}
                        alt="Book cover"
                      />
                    </Link>
                    <MainKardText>{faveBook.best_book.title}</MainKardText>
                  </>
                )}
              </KardCategoryContainer>
            </KardCategoryOutterContainer>

            {/* movie begins */}
            <KardCategoryOutterContainer>
              <KardCategoryTitle style={{ background: "#FFFFFF" }}>
                Movie
              </KardCategoryTitle>
              <KardCategoryContainer
                style={{ boxShadow: "7px 7px 5px 0px #FFFFFF" }}
              >
                {faveMovie === null || faveMovie === undefined ? (
                  <>
                    <Link to="/movies" style={linkStyles}>
                      <MainKardImage src={movieIcon} alt="" />
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/movies" style={linkStyles}>
                      <MainKardImage
                        style={{
                          minWidth: "100%",
                          minHeight: "100%",
                        }}
                        className="Kard-dashboard"
                        src={`https://image.tmdb.org/t/p/w500${faveMovie.poster_path}`}
                        alt="Book cover"
                      />
                    </Link>
                    <MainKardText>{faveMovie.title}</MainKardText>
                  </>
                )}
              </KardCategoryContainer>
            </KardCategoryOutterContainer>

            {/* restaurent begins */}
            <KardCategoryOutterContainer>
              <KardCategoryTitle style={{ background: "#C2F0FC" }}>
                Restaurant
              </KardCategoryTitle>
              <KardCategoryContainer
                style={{ boxShadow: "7px 7px 5px 0px #C2F0FC" }}
              >
                {faveResto === null || faveResto === undefined ? (
                  <>
                    <Link to="/restaurants" style={linkStyles}>
                      <MainKardImage src={restaurantIcon} alt="" />
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/restaurants" style={linkStyles}>
                      <MainKardImage
                        style={{
                          minWidth: "100%",
                          minHeight: "100%",
                        }}
                        className="resto_thumbnail"
                        src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=100&photoreference=${faveResto.photos[0].photo_reference}&key=AIzaSyAcLOiaEp4qBb1Wt2V_dyR6Ze1sgIEfUhs`}
                        alt="Restaurant"
                      />
                    </Link>
                    <MainKardText>{faveResto.name}</MainKardText>
                  </>
                )}
              </KardCategoryContainer>
            </KardCategoryOutterContainer>
          </KardSelectorContainer>
        </WhichKardWrapper>
      </>
    </>
  );
};

export default KardSelector;
