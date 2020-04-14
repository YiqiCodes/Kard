import styled from "styled-components";

export const PageWrapper = styled.div`
background: #360101;
min-height: 100vh;

`;

// display: flex;
// flex-direction: column;
// justify-content: space-evenly;
// align-items: center;


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
  background: red;`

export const BookDiv = styled.div`
  color: white !important;
  display:flex;
  justify-content: center;
  flex-direction: column;
`;


export const SearchDiv = styled.div`
  display:grid;
  justify-content: center;
  flex-direction: column;
`;