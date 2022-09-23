import React from "react";
import ReactInfo from "./components/react_info.js";
import dev from"./components/dev.js";
import "./style.css";
import "./css/react_info.css";

export default function App() {
  return (

    <div className="container">
      <h1>React</h1>
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="Ícone do React"/>
      <ReactInfo/>
      <dev name="Rafael" age="22" area="Front End" objective="Fullstack />
    </div>
  )
}
