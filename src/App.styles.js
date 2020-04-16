import styled from "styled-components";

export const PageWrapper = styled.div``;

// Which Phone Styles

export const WhichKardWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: -1;
  min-width: 100vw;
  min-height: 100vh;
  max-height: 100vh;
  background: #111111;
  color: black;
`;

export const CategoryKardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  z-index: -1;
  min-width: 100vw;
  min-height: 100vh;
  background: #111111;
  color: white;
`;

export const BooksKardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  z-index: -1;
  min-width: 100vw;
  min-height: 100vh;
  background: #111111;
  color: white;
`;

export const MoviesKardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  z-index: -1;
  min-width: 100vw;
  min-height: 100vh;
  background: #111111;
  color: white;
`;

export const RestaurantKardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  z-index: -1;
  min-width: 100vw;
  min-height: 100vh;
  background: #111111;
  color: white;
`;

export const KardSelectorContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const KardCategoryContainer = styled.div`
  max-width: 40%;
  min-width: 40%;
  min-height: 35vh;
  max-height: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: gray;
  border-radius: 5px;
  box-shadow: 0px 3px 5px 2px #eeeeee;
`;

export const KardContainer = styled.div`
  display: flex;
  width: 14rem;
  height: 8rem;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  border-radius: 10px;
  color: white;
`;

// buttons
export const KardButtonOne = styled.button`
  border-radius: 12px;
  max-width: 40%;
  border: 0;
  background: #e6fff7;
  height: 40px;
  width: 163px;
  box-shadow: 0px 3px 5px 2px #eeeeee;
  min-height: 30vh;
`;

export const KardButtonTwo = styled.button`
  border-radius: 12px;
  max-width: 40%;
  border: 0;
  background: #45806d;
  height: 40px;
  width: 163px;

  box-shadow: 0 3px 5px 2px #eeeeee;
  min-height: 30vh;
`;

export const KardButtonThree = styled.button`
  border-radius: 12px;
  max-width: 40%;
  border: 0;
  background: #d6fff2;
  height: 40px;
  width: 163px;

  box-shadow: 0 3px 5px 2px #eeeeee;
  min-height: 30vh;
`;

export const KardButtonFour = styled.button`
  border-radius: 12px;
  max-width: 40%;
  border: 0;
  background: #6b8079;
  height: 40px;
  width: 163px;

  box-shadow: 0 3px 5px 2px #eeeeee;
  min-height: 30vh;
`;

export const KardButton = styled.button`
  display: flex;
  width: 14rem;
  height: 8rem;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  border-radius: 10px;
  color: white;
  background: red;
`;

export const MainKardImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  min-width: 8rem;
  min-height: 8rem;
`;

export const MainKardText = styled.text`
  min-width: 100%;
  text-align: center;
  margin: 5px 0px;
  color: white;
`;

export const BookDiv = styled.div`
  color: white !important;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const SearchDiv = styled.div`
  display: grid;
  justify-content: center;
  flex-direction: column;
`;
