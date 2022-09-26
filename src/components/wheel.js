
import React from "react";
import styles from "../css/wheel.module.css";


function Wheel(){

  var wheelProp = {
    name: ["Props", "Hooks", "Jsx", "Components"]
  };
  
  function randomProps(){
    wheelProp.name = wheelProp.name[]
    return Math.floor((Math.random() * 5) - 1);
  }
  
  return(
  
    
    <section className ={styles.wheel_section}>
      <div className ={styles.wheel}>
        <span className ={styles.wheel_text}>{wheelProps[1]}</span>
      </div>
      <div className ={styles.wheel_button}>
        <span>GIRAR</span>
      </div>
    </section>
  )
  
}

wheelProps();

export default Wheel
