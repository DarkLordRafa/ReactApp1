
import React from "react";
import styles from "../css/wheel.module.css";


function Wheel(){

  let wheelProp = {
    name: ""
  };
  
  function randomProps(){
    let wheelPropList = ["Props", "Hooks", "Jsx", "Render"];
    wheelProp.name = wheelPropList[Math.floor((Math.random() * 5) - 1)];
  }
  
  
  return(
  
    
    <section className ={styles.wheel_section}>
      <div className ={styles.wheel}>
        <span className ={styles.wheel_text}>{wheelProp.name}</span>
      </div>
      <div onClick={randomProps} className ={styles.wheel_button}>
        <span>GIRAR</span>
      </div>
    </section>
  )
  
}

export default Wheel
