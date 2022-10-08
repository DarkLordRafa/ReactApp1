
import React from "react";
//Importando o useState do React
import { useState } from "react";
import styles from "./wheel.module.css";


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
  
  let iterations = function(){setInterval(function(){
    setWheelText(`${styles.wheel_text} ${styles.wheel_text_enabled}`);
    setTimeout(function(){setWheelText(`${styles.wheel_text}`)}, 1500);
  }, 2000);
  }
  
  function updateProps(){
    setWheelText(`${styles.wheel_text} ${styles.wheel_text_enabled}`);
    iterations();
    setTimeout(function(){
    setWheelText(`${styles.wheel_text}`);
    clearInterval(iterations);
    }, 5000);
  }
  
  
  return(
  
    
    <section className ={styles.wheel_section}>
      <div className ={styles.wheel}>
        <span onAnimationEnd={randomProps} className ={wheelText}>{wheelProp}</span>
      </div>
      <div onClick={updateProps} className ={styles.wheel_button}>
        <span>GIRAR</span>
      </div>
    </section>
  )
  
}

export default Wheel
