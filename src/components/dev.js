
import React from "react";

function Dev({name, age, area, objective}){

  return(
    <section>
      <h2>Desenvolvedor</h2>
      <ul>
        <li>Nome: <span>{name}</span></li>
        <li>Idade: <span>{age}</span></li>
        <li>Área: <span>{area}</span></li>
        <li>Objetivo: <span>{objective}</span></li>
      </ul>
    </section>
  )
}

export default Dev
