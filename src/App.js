import React, { useState } from "react";

import "./App.css";

// Components
import { PageWrapper } from "./App.styles";
import Home from "./pages/Home";

import Books from "../src/pages/Books";
import Albums from "../src/pages/Albums";
import Movies from "../src/pages/Movies";
import Restaurants from "../src/pages/Restaurants";

import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-spa";
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";

function App() {
  const [faveAlbum, setFaveAlbum] = useState(null);
  const [faveBook, setFaveBook] = useState(null);
  const [faveResto, setFaveResto] = useState(null);
  const [faveMovie, setFaveMovie] = useState(null);

  const chgAlbum = function (info) {
    setFaveAlbum(info);
  };

  const chgBook = function (info) {
    setFaveBook(info);
  };

  const chgResto = function (info) {
    setFaveResto(info);
  };

  const chgMovie = function (info) {
    setFaveMovie(info);
  };

  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <PageWrapper>
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Route
          exact
          path="/"
          render={(props) => (
            <Home
              faveAlbum={faveAlbum}
              faveBook={faveBook}
              faveResto={faveResto}
              faveMovie={faveMovie}
            ></Home>
          )}
        ></Route>
        <Switch>
          <Route
            exact
            path="/albums"
            render={() => <Albums chgAlbum={chgAlbum}></Albums>}
          ></Route>
          <Route
            exact
            path="/books"
            render={() => <Books chgBook={chgBook}></Books>}
          ></Route>
          <Route
            exact
            path="/movies"
            render={() => <Movies chgMovie={chgMovie}></Movies>}
          ></Route>
          <Route
            exact
            path="/Restaurants"
            render={() => <Restaurants chgResto={chgResto}></Restaurants>}
          ></Route>
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    </PageWrapper>
  );
}
export default App;
