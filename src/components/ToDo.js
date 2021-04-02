import "./ToDo.css";
import { useState } from "react";

function ToDo(props) {
  return (
    <div className="list-container">
      <ul clasName="list">
        <li className="list-items">Five cans of dCon roach spray</li>
        <li className="list-items">Two colors of shoe dye</li>
        <li className="list-items">White gloves</li>
        <li className="list-items">One chocolate YooHoo</li>
        <li className="list-items">Cat food</li>
        <li className="list-items">A can of Ajax</li>
        <li className="list-items">
          Clorox for the bone smells in the living room
        </li>
        <li className="list-items">Cat litter and a bag of onion rings</li>
        <li className="list-items">Two boxes of Apple Jacks</li>
        <li className="list-items">and Flintstone vitamins</li>
      </ul>
    </div>
  );
}

export default ToDo;
