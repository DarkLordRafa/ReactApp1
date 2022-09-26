
import React from "react";
import styles from "../css/wheel.module.css";


function Wheel(){

  function bg(){
    this.style.backgroundColor = "red";
  }

  return(
    
    <section className ={styles.wheel_section}>
      <div onClick={bg} className ={styles.wheel}>
        <span className ={styles.wheel_text}>Props</span>
      </div>
      <div className ={styles.wheel_button}>
        <span>GIRAR</span>
      </div>
    </section>
  )
  
}

export default Wheel
