import styled, { keyframes } from "styled-components";

export const PageWrapper = styled.div``;

// Which Phone Styles
const animationName = keyframes`{
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
}`;

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
  background: #104634;
  color: black;
  background-size: 400% 400%;
`;

export const AlbumsKardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  z-index: -1;
  min-width: 100vw;
  min-height: 100vh;
  background: linear-gradient(270deg, #000000, #a3a3a3);
  color: white;
  background-size: 400% 400%;
  animation: ${animationName} 10s ease infinite;
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
  background: linear-gradient(270deg, #000000, #a3a3a3);
  color: white;
  background-size: 400% 400%;
  animation: ${animationName} 10s ease infinite;
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
  background: linear-gradient(270deg, #000000, #a3a3a3);
  color: white;
  background-size: 400% 400%;
  animation: ${animationName} 10s ease infinite;
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
  background: linear-gradient(270deg, #000000, #a3a3a3);
  color: white;
  background-size: 400% 400%;
  animation: ${animationName} 10s ease infinite;
`;

export const KardSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  border: 0;
  background: linear-gradient(135deg, #522927 45%, #781031 90%);
  height: 40px;
  width: 163px;

  box-shadow: 0 3px 5px 2px white;
  min-height: 20vh;
  margin-right: 1em;
  margin-left: 1em;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const KardButtonTwo = styled.button`
  border-radius: 12px;
  border: 0;
  background: linear-gradient(135deg, #106178 45%, #6c9dab 90%);
  height: 40px;
  width: 163px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px white;
  min-height: 20vh;
  margin-right: 1em;
  margin-left: 1em;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const KardButtonThree = styled.button`
  border-radius: 12px;
  border: 0;
  background: linear-gradient(135deg, #453409 45%, #91701a 90%);
  height: 40px;
  width: 163px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px white;
  min-height: 20vh;
  margin-right: 1em;
  margin-left: 1em;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const KardButtonFour = styled.button`
  border-radius: 12px;
  border: 0;
  background: linear-gradient(135deg, #21916c 45%, #30d19b 90%);
  height: 40px;
  width: 163px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px white;
  min-height: 20vh;
  margin-right: 1em;
  margin-left: 1em;
  margin-top: 10px;
  margin-bottom: 10px;
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
  min-width: 100%;
  min-height: 100%;
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
