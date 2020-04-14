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
  background: linear-gradient(270deg, #000000, #a3a3a3);
  color: white;
  background-size: 400% 400%;
  animation: ${animationName} 10s ease infinite;
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

export const BookDiv = styled.div`
  color: white;
`;
