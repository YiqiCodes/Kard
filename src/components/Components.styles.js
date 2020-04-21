import styled from "styled-components";

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 5vh;
  border-bottom: 1px solid white;
  padding: 2px 0px;
  background: #fdf79a;
`;

export const NavBarButton = styled.button`
  border: none;
  background: transparent;
  color: black;
  font: 400 15px Arial;
  text-decoration: none;
  padding: 0px;
  :hover {
    opacity: 0.8;
  }
`;

export const BookSubmitButton = styled.button`
  max-width: 50%;
  margin: 0;
  justify-self: center;
  min-height: 2rem;
  font-size: large;
  border: 2px solid white;
  padding: 0px 10px;
  border-radius: 5px;
  background: indianred;
  font: 400 15px Arial;
  text-decoration: none;
`;
