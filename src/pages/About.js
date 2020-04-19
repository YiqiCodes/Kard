import React from "react";

import Yiqi from "../../src/assets/images/Yiqi.jpg";

const About = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <br></br>
        <div
          style={{
            minWidth: "100%",
            textAlign: "center",
            marginBottom: "1rem",
          }}
        >
          Kard is where the business card become sociable.
        </div>
        <div style={{ minWidth: "100%", textAlign: "center" }}>
          Pick your favourite album, book, movie and restaurant and let the
          world know.
          <br></br>
          <br></br>
          Register now to save your choices and have the ability to share your
          Kard with your friends!
        </div>
        <br></br>
        <div style={{ minWidth: "100%", textAlign: "center" }}>
          <div style={{ fontWeight: "500" }}>Built By: </div>
          <br></br>
          <br></br>
          <div style={{ fontWeight: "800" }}> Tom Lim </div>
          <br></br>
          <br></br>
          <div style={{ fontWeight: "800" }}> James Ra </div>
          <br></br>
          <br></br>
          <div style={{ fontWeight: "800" }}>Tyler Zhang</div>
          <br></br>
          <img
            style={{ borderRadius: "20px", width: "100px" }}
            src={Yiqi}
            alt=""
          ></img>
          <br></br>
          <a
            href="https://www.linkedin.com/in/yiqi-tyler-zhang/"
            style={{
              color: "blue",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <br></br>
          <a
            href="https://github.com/TylerZhang00"
            style={{
              color: "blue",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <br></br>
        <div style={{ minWidth: "100%", textAlign: "center" }}>
          <div style={{ fontWeight: "500" }}>Built With: </div>
          React
          <br></br> PSQL
          <br></br> Auth0
          <br></br> iTunes API
          <br></br> GoodReads API
          <br></br> TheMovieDB API
          <br></br> Google Places API
        </div>
      </div>
      {/* can add donate here? */}
      <div></div>
    </>
  );
};

export default About;
