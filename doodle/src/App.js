import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Game } from "./components/Game";
import { Topbar } from "./components/Topbar";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Game></Game>
    </div>
  );
}

export default App;
