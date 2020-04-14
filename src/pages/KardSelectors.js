import React, { useState } from "react";
import MUButton from "@material-ui/core/Button";

//components
import Albums from "./Albums";
import Books from "./Books";

//styles
import {
  KardSelectorContainer,
  WhichKardWrapper,
  AlbumsKardWrapper,
  BooksKardWrapper,
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
              ></MUButton>

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
              ></MUButton>
            </KardSelectorContainer>
          </WhichKardWrapper>
        </>
      ) : null}
      {selectedKard === 1 ? (
        <>
          <AlbumsKardWrapper>
            <Albums></Albums>
            <MUButton
              style={{
                ...styledButton,
                background: firstKardColor.color,
                minHeight: "40px",
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
            <Books></Books>
            <MUButton
              style={{
                ...styledButton,
                background: secondKardColor.color,
                minHeight: "40px",
                color: "black",
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
              onClick={() => setSelectedKard(0)}
            >
              Go Back
            </MUButton>
          </BooksKardWrapper>
        </>
      ) : null}
    </>
  );
};

export default KardSelector;
