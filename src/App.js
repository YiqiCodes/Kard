import React, { useState } from "react";

import "./App.css";

// Components
import { PageWrapper } from "./App.styles";
import Home from "./pages/Home";

import Books from "../src/pages/Books";
import AlbumsContainer from "../src/pages/AlbumsContainer";
import Albums from "../src/pages/Albums";
import Movies from "../src/pages/Movies";
import Restaurants from "../src/pages/Restaurants";

import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-spa";
import { Router, Route, Switch, withRouter } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";
import KardSelector from "./pages/KardSelectors";

function App() {
  const [faveAlbum, setFaveAlbum] = useState(null);
  const chgAlbum = function (info) {
    setFaveAlbum(info);
    // setSelectedKard(0);
  };

  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <PageWrapper>
      {/* Don't forget to include the history module */}
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Route exact path="/" component={withRouter(Home)}></Route>
        <Switch>
          <Route
            exact
            path="/albums"
            render={(props) => <Albums chgAlbum={chgAlbum}></Albums>}
          ></Route>
          <Route exact path="/books" component={withRouter(Books)}></Route>
          <Route exact path="/movies" component={withRouter(Movies)}></Route>
          <Route
            exact
            path="/Restaurants"
            component={withRouter(Restaurants)}
          ></Route>
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    </PageWrapper>
  );
}
export default App;
