import React from "react";
import KardSelectors from "./KardSelectors";

const Home = (props) => {
  return (
    <>
      <KardSelectors faveAlbum={props.faveAlbum}></KardSelectors>
    </>
  );
};

export default Home;
