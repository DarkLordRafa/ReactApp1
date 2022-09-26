
import React from "react";
import styles from "../css/wheel.module.css";


function Wheel(){

  var wheelProp = {
    name: ["Props", "Hooks", "Jsx", "Render"]
  };
  
  function randomProps(){
    wheelProp.name = wheelProp.name[Math.floor((Math.random() * 5) - 1)];
  }
  
  return(
  
    
    <section className ={styles.wheel_section}>
      <div className ={styles.wheel}>
        <span className ={styles.wheel_text}>{wheelProp.name}</span>
      </div>
      <div className ={styles.wheel_button}>
        <span>GIRAR</span>
      </div>
    </section>
  )
  
}

export default Wheel
