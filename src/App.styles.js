import styled from "styled-components";

export const PageWrapper = styled.div`
  max-height: 100vh;
`;

export const WhichKardWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: absolute;
  min-width: 100vw;
  height: 95vh;
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
  height: 95vh;
  background: #111111;
  color: white;
`;

export const KardSelectorContainer = styled.div`
  min-height: 100%;
  min-width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: initial;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const KardCategoryContainer = styled.div`
  width: 40vw;
  min-height: 40vw;
  height: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: gray;
  border-radius: 0px 0px 5px 5px;
  box-shadow: 7px 7px 5px 0px #eeeeee;
  @media (min-width: 1025px) {
    min-height: 380px;
    max-height: 380px;
    min-width: 310px;
    max-width: 310px;
  }
`;

export const KardCategoryOutterContainer = styled.div`
  margin: 5% 0 5% 0;
  flex-direction: column;
  height: 40vw;
  width: 40vw;

  @media (min-width: 1025px) {
    min-height: 380px;
    max-height: 380px;
    min-width: 310px;
    max-width: 310px;
  }
`;

export const KardCategoryTitle = styled.div`
  display: flex;
  justify-content: center;
  opacity: 1;
  border-radius: 10px 10px 0px 0px;
  color: black;
  padding: 2px 0px;
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
export const KardButtonMain = styled.button`
  border-radius: 12px;
  max-width: 40%;
  border: 0;
  background: #fdf79a;
  height: 40px;
  width: 163px;
  box-shadow: 0px 3px 5px 2px #eeeeee;
  min-height: 35vh;
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
  max-width: 70%;
  max-height: 70%;
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
