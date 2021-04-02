import "./Header.css";
import { useState } from "react";

function Header(props) {
  return (
    <div class="mainFrame">
      <header className="header">
        <h1 className="headline">The Doctor Doom Shopping List </h1>
        <div className="inputField">
          <form className="form">
            <input
              type="text"
              name="ToDo-Input"
              id="ToDo-Id"
              placeholder="Add ToDo"
              className="input"
            />
          </form>
          <button className="AddButton">ADD</button>
        </div>
      </header>
    </div>
  );
}

export default Header;
