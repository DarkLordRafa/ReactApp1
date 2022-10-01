
import React from "react";
//Importando o useState do React
import { useState } from "react";
import styles from "../css/wheel.module.css";
import "../css/wheel.module.css";


function Wheel(){
  //Armazenando o estado do componente
  let [wheelProp, setWheelProp] = useState("ttt");
  const [wheelText, setWheelText] = useState(`${styles.wheel_text}`);
  
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
    setWheelText(`${styles.wheel_text}  ${styles.wheel_text_enabled}`);
    //randomPropsInterval = setInterval(randomProps, 200);
    
    //setTimeout(stopRandomProps, 4000); 
  }
  
  function stop(){
    setTimeout(setWheelText(`styles.wheel_text`), 3000);
  }
  
  
  return(
  
    
    <section className ={styles.wheel_section}>
      <div className ={styles.wheel}>
        <span onAnimationEnd={randomProps} className ={wheelText}>{wheelProp}</span>
      </div>
      <div onClick=`${updateProps} ${stop}` className ={styles.wheel_button}>
        <span>GIRAR</span>
      </div>
    </section>
  )
  
}

export default Wheel
