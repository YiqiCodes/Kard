import React from "react";
import "./App.css";

// Components
import { PageWrapper } from "./App.styles";

// Pages
import Home from "./pages/Home";
import Books from "./pages/Books";
import Album from "./pages/Album";


function App() {
  return (
    <PageWrapper>
      <Books />
    </PageWrapper>
  );
}

export default App;
