
import React from "react";
import styles from "../css/wheel.module.css";


function Wheel(){

  let wheelProp = {
    name: ""
  };
  
  function randomProps(){
    let wheelPropName = ["Props", "Hooks", "Jsx", "Render"];
    wheelProp.name = wheelPropName[Math.floor((Math.random() * 5) - 1)];
  }
  
  var tt = "tttgg";
  
  return(
  
    
    <section className ={styles.wheel_section}>
      <div className ={styles.wheel}>
        <span className ={styles.wheel_text}>{tt}</span>
      </div>
      <div className ={styles.wheel_button}>
        <span>GIRAR</span>
      </div>
    </section>
  )
  
}

export default Wheel
