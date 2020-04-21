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
          world know!
          <br></br>
          <br></br>
          "Home" : Edit your kard.
          <br></br>
          "Login" : Create an account or login via email, Google or Facebook.
          <br></br>
          "Profile" : Edit your profile.
          <br></br>
          "Public" : Get your own shareable Kard link.
          <br></br>
          "Save" : Save your changes.
        </div>
        <br></br>
        <div style={{ minWidth: "100%", textAlign: "center" }}>
          <div style={{ fontWeight: "500" }}>Built By: </div>
          <div style={{ fontWeight: "800" }}> Tom Lim </div>
          <a
            href="https://www.linkedin.com/in/tom-lim-9114061a2/"
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
            href="https://github.com/lim1017"
            style={{
              color: "blue",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <br></br>

          <a
            href="https://mykard.netlify.app/#/kard/lim1017"
            style={{
              color: "blue",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            My Kard
          </a>
          <br></br>
          <br></br>
          <div style={{ fontWeight: "800" }}> James Ra </div>
          <a
            href="https://www.linkedin.com/in/jehyun-ra-07a9bb1a3/"
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
            href="https://github.com/JehyunRa"
            style={{
              color: "blue",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <br></br>
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
          React, NodeJS, Express, PSQL, Auth0, iTunes API, GoodReads API, TheMovieDB API, Google
          Places API
        </div>
      </div>
      {/* can add donate here? */}
      <div></div>
    </>
  );
};

export default About;
