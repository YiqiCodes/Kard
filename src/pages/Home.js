import React from "react";
import KardSelectors from "./KardSelectors";

const Home = (props) => {
  return (
    <>
      <KardSelectors
        faveAlbum={props.faveAlbum}
        faveBook={props.faveBook}
        faveMovie={props.faveMovie}
        faveResto={props.faveResto}
      ></KardSelectors>
    </>
  );
};

export default Home;
