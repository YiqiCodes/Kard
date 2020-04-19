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

  console.log(faveAlbum)
  
  if (faveAlbum !== null){
    var urlFiveHundredPixels = faveAlbum.artworkUrl60;
    var urlFiveHundredPixelz = urlFiveHundredPixels.replace(/100x100/g, "500x500");
    console.log(urlFiveHundredPixelz)

  }


  return (
    <>
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
                {(faveAlbum === null || faveAlbum === undefined) ? (
                  <>
                    <Link
                      to="/albums"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <MainKardImage src={musicIcon} alt="" />
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/albums"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <MainKardImage
                        style={{
                          minWidth: "100px",
                          minHeight: "100px",
                        }}
                        src={faveAlbum.artworkUrl60}
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
              <KardCategoryTitle style={{ background: "#45806d" }}>
                Book
              </KardCategoryTitle>
              <KardCategoryContainer
                style={{ boxShadow: "7px 7px 5px 0px #45806d" }}
              >
                {(faveBook === null || faveBook === undefined) ? (
                  <>
                    <Link
                      to="/books"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <MainKardImage src={bookIcon} alt="" />
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/books"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
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
              <KardCategoryTitle style={{ background: "#6b8079" }}>
                Movie
              </KardCategoryTitle>
              <KardCategoryContainer
                style={{ boxShadow: "7px 7px 5px 0px #6b8079" }}
              >
                {(faveMovie === null || faveMovie === undefined) ? (
                  <>
                    <Link
                      to="/movies"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <MainKardImage src={movieIcon} alt="" />
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/movies"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
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
              <KardCategoryTitle
                style={{ background: "#d6fff2", color: "black" }}
              >
                Restaurant
              </KardCategoryTitle>
              <KardCategoryContainer
                style={{ boxShadow: "7px 7px 5px 0px #d6fff2" }}
              >
                {(faveResto === null || faveResto === undefined) ? (
                  <>
                    <Link
                      to="/restaurants"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <MainKardImage src={restaurantIcon} alt="" />
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/restaurants"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
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
