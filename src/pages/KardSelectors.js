import React, { useState } from "react";
import MUButton from "@material-ui/core/Button";

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
} from "../App.styles";

const KardSelector = () => {
  const [selectedKard, setSelectedKard] = useState(0);
  const [firstKardColor, setFirstKardColor] = useState({
    color: "linear-gradient(45deg, #0d7400 30%, #9dff90 90%)",
  });

  const [secondKardColor, setSecondKardColor] = useState({
    color: "linear-gradient(45deg, #ffdc18 30%, #f6f1c1 90%)",
  });

  const styledButton = {
    borderRadius: 12,
    border: 0,
    color: "white",
    height: 40,
    width: 163,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px #4a148c 30%",
    minHeight: "20vh",
    marginRight: "1em",
    marginLeft: "1em",
    marginTop: "10px",
    marginBottom: "10px",
  };

  const [favAlbum, setFavAlbum] = useState(null);
  const [favBook, setFavBook] = useState(null);

  const chgAlbum = function (info) {
    console.log("album", info);
    setFavAlbum(info);
  };

  const chgBook = function (info) {
    console.log(info);
    setFavBook(info);
    setSelectedKard(0);
  };

  return (
    <>
      {selectedKard === 0 ? (
        <>
          <WhichKardWrapper>
            <KardSelectorContainer>
              <MUButton
                style={{
                  ...styledButton,
                  background: firstKardColor.color,
                }}
                onMouseLeave={() =>
                  setFirstKardColor({
                    ...firstKardColor,
                    color: "linear-gradient(45deg, #0d7400 30%, #9dff90 90%)",
                  })
                }
                onMouseOver={() =>
                  setFirstKardColor({
                    ...firstKardColor,
                    color: "linear-gradient(45deg, #139b01 30%, #bbffb3 90%)",
                  })
                }
                onMouseUp={() =>
                  setFirstKardColor({
                    ...firstKardColor,
                  })
                }
                onMouseDown={() =>
                  setFirstKardColor({
                    ...firstKardColor,
                  })
                }
                onClick={() => setSelectedKard(1)}
              >
                {favAlbum !== null ? (
                  <>
                    <img
                      style={{
                        margin: "auto",
                      }}
                      className="card-img-top pl-2 pr-2 pt-2"
                      src={favAlbum.artworkUrl60}
                      alt="Album cover"
                      height="100px"
                    />
                    <div>{favAlbum.collectionName}</div>
                  </>
                ) : (
                  <p>Album</p>
                )}
              </MUButton>

              <MUButton
                style={{
                  ...styledButton,
                  background: secondKardColor.color,
                }}
                onMouseLeave={() =>
                  setSecondKardColor({
                    ...secondKardColor,
                    color: "linear-gradient(45deg, #ffdc18 30%, #f6f1c1 90%)",
                  })
                }
                onMouseOver={() =>
                  setSecondKardColor({
                    ...secondKardColor,
                    color: "linear-gradient(45deg, #e6c404 30%, #f8f0aa 90%)",
                  })
                }
                onMouseUp={() =>
                  setSecondKardColor({
                    ...secondKardColor,
                  })
                }
                onMouseDown={() =>
                  setSecondKardColor({
                    ...secondKardColor,
                  })
                }
                onClick={() => setSelectedKard(2)}
              >
                {favBook !== null ? (
                  <img
                    className="Kard-dashboard"
                    src={favBook.best_book.image_url}
                    alt="Book cover"
                  />
                ) : (
                  <p>Books</p>
                )}
              </MUButton>

              <MUButton
                style={{
                  ...styledButton,
                  background: firstKardColor.color,
                }}
                onMouseLeave={() =>
                  setFirstKardColor({
                    ...firstKardColor,
                    color: "linear-gradient(45deg, #0d7400 30%, #9dff90 90%)",
                  })
                }
                onMouseOver={() =>
                  setFirstKardColor({
                    ...firstKardColor,
                    color: "linear-gradient(45deg, #139b01 30%, #bbffb3 90%)",
                  })
                }
                onMouseUp={() =>
                  setFirstKardColor({
                    ...firstKardColor,
                  })
                }
                onMouseDown={() =>
                  setFirstKardColor({
                    ...firstKardColor,
                  })
                }
                onClick={() => setSelectedKard(3)}
              >
                Movies
              </MUButton>

              <MUButton
                style={{
                  ...styledButton,
                  background: secondKardColor.color,
                }}
                onMouseLeave={() =>
                  setSecondKardColor({
                    ...secondKardColor,
                    color: "linear-gradient(45deg, #ffdc18 30%, #f6f1c1 90%)",
                  })
                }
                onMouseOver={() =>
                  setSecondKardColor({
                    ...secondKardColor,
                    color: "linear-gradient(45deg, #e6c404 30%, #f8f0aa 90%)",
                  })
                }
                onMouseUp={() =>
                  setSecondKardColor({
                    ...secondKardColor,
                  })
                }
                onMouseDown={() =>
                  setSecondKardColor({
                    ...secondKardColor,
                  })
                }
                onClick={() => setSelectedKard(4)}
              >
                Restaurants
              </MUButton>
            </KardSelectorContainer>
          </WhichKardWrapper>
        </>
      ) : null}
      {selectedKard === 1 ? (
        <>
          <AlbumsKardWrapper>
            <Albums chgAlbum={chgAlbum}></Albums>
            <MUButton
              style={{
                ...styledButton,
                background: firstKardColor.color,
                minHeight: "40px",
              }}
              onClick={() => setSelectedKard(0)}
            >
              Go Back
            </MUButton>
          </AlbumsKardWrapper>
        </>
      ) : null}
      {selectedKard === 2 ? (
        <>
          <BooksKardWrapper>
            <Books chgBook={chgBook}></Books>
            <MUButton
              style={{
                ...styledButton,
                background: secondKardColor.color,
                minHeight: "40px",
                color: "black",
              }}
              onClick={() => setSelectedKard(0)}
            >
              Go Back
            </MUButton>
          </BooksKardWrapper>
        </>
      ) : null}
      {selectedKard === 3 ? (
        <>
          <MoviesKardWrapper>
            <Movies></Movies>
            <MUButton
              style={{
                ...styledButton,
                background: firstKardColor.color,
                minHeight: "40px",
              }}
              onClick={() => setSelectedKard(0)}
            >
              Go Back
            </MUButton>
          </MoviesKardWrapper>
        </>
      ) : null}
      {selectedKard === 4 ? (
        <>
          <RestaurantKardWrapper>
            {/* <Restaurants></Restaurants> */}
            <MUButton
              style={{
                ...styledButton,
                background: firstKardColor.color,
                minHeight: "40px",
              }}
              onClick={() => setSelectedKard(0)}
            >
              Go Back
            </MUButton>
          </RestaurantKardWrapper>
        </>
      ) : null}
    </>
  );
};

export default KardSelector;
