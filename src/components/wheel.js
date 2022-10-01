
import React from "react";
//Importando o useState do React
import { useState } from "react";
import styles from "../css/wheel.module.css";


function Wheel(){
  //Armazenando o estado do componente
  let [wheelProp, setWheelProp] = useState("");
  const [wheelText, setWheelText] = useState("styles.wheel_text");
  
  function randomProps(){
    let wheelPropList = ["Props", "Hooks", "Jsx", "Render", "State"];
    //Atualizando o estado do componente no virtual DOM para re-renderizar
    setWheelProp(wheelProp = wheelPropList[Math.floor(Math.random() * 5)]);
    console.log(wheelProp);
  }
  
  //Variável que armazena o intervalo da função
  var randomPropsInterval;

  //Função para resetar o intervalo
  function stopRandomProps(){
    clearInterval(randomPropsInterval);
  }
  
  function updateProps(){
    randomPropsInterval = setInterval(randomProps, 200);
    setWheelText("styles.wheel_text styles.wheel-text-enabled");
    setTimeout(stopRandomProps, 4000);
    setTimeout(setWheelText("styles.wheel_text"), 4000);
  }
  
  
  return(
  
    
    <section className ={styles.wheel_section}>
      <div className ={styles.wheel}>
        <span className ={wheelText}>{wheelProp}</span>
      </div>
      <div onClick={updateProps} className ={styles.wheel_button}>
        <span>GIRAR</span>
      </div>
    </section>
  )
  
}

export default Wheel
