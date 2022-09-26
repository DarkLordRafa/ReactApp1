
import React from "react";
import styles from "../css/wheel.module.css";


function Wheel(){

  function t(name){
    this.name = "react";
  }
console.log(t.name);
  return(
  
    
    <section className ={styles.wheel_section}>
      <div className ={styles.wheel}>
        <span className ={styles.wheel_text}>{t.name}</span>
      </div>
      <div className ={styles.wheel_button}>
        <span>GIRAR</span>
      </div>
    </section>
  )
  
}

export default Wheel
