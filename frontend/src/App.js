import React from "react";
import TinderCards from "./TinderCards";
import "./App.css";
import Header from "./Header";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    // BEM class naming convention
    <div className="App">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
