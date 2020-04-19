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
import { useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import axios from "axios";


function App() {
  const [faveAlbum, setFaveAlbum] = useState(null);
  const [faveBook, setFaveBook] = useState(null);
  const [faveResto, setFaveResto] = useState(null);
  const [faveMovie, setFaveMovie] = useState(null);
  const [AppUser, setAppUser] = useState(null);

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

  const { loading, isAuthenticated, user } = useAuth0();

  console.log(user, 'in apphome')

  if (isAuthenticated && AppUser === null && user !== undefined) {
    console.log(isAuthenticated, user)
    setAppUser(user);
    Promise.all([
      axios.get(`http://localhost:8001/api/users/${user.email}`),
    ])
      .then(response => {
        const {album, book, movie, resto} = response[0].data[0].categories;
        setFaveAlbum(album);
        setFaveBook(book);
        setFaveMovie(movie);
        setFaveResto(resto);
      })
      .catch(error => {
        console.log(error);
      });
  } else if (!isAuthenticated && AppUser !== null && user === undefined) {
    setAppUser(null);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <PageWrapper>
      <Router history={history}>
        <header>
          <NavBar
            faveAlbum={faveAlbum}
            faveBook={faveBook}
            faveResto={faveResto}
            faveMovie={faveMovie}
          />
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
          
          <PrivateRoute 
          path="/profile" 
          render={() => <Profile yolo='yesyesyyes'> </Profile>}
          />          
        </Switch>
      </Router>
    </PageWrapper>
  );
}
export default App;
