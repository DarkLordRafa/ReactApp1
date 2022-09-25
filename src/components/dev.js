
import React from "react";
import styles from "../css/dev.css";
import "../css/dev.css";


function Dev({name, age, area, objective}){

  return(
    <section className="dev">
      <h2>Desenvolvedor</h2>
      <ul>
        <li>Nome: <span>{name}</span></li>
        <li>Idade: <span>{age}</span></li>
        <li>Área: <span>{area}</span></li>
        <li>Objetivo: <span>{objective}</span></li>
      </ul>
    </section>
    <div className="dev__line">
    </div>
  )
}

export default Dev
