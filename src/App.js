import React from "react";

import "./App.css";

// Components
import { PageWrapper } from "./App.styles";
import Home from "./pages/Home";


import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-spa";
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";



function App() {

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
      <Home />

      <Switch>
          <Route path="/" exact />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    </PageWrapper>
  );
}
export default App;
