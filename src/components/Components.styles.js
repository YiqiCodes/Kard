import styled from "styled-components";

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: black;
  border-bottom: 1px solid white;
  padding: 2px 0px;
`;

export const NavBarButton = styled.button`
  margin-left: 1rem;
  border: none;
  background: transparent;
  color: white;
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
