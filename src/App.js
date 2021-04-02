import "./App.css";
import Header from "./components/Header.js";
import ToDo from "./components/ToDo.js";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <ToDo />
    </div>
  );
}

export default App;
