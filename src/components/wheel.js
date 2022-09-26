
import React from "react";
import styles from "../css/wheel.module.css";


function Wheel(){

  let wheelProp = {
    name: ""
  };
  
  function randomProps(){
    var wheelPropList = ["Props", "Hooks", "Jsx", "Render"];
    wheelProp.name = wheelPropList[Math.floor(Math.random() * 4)];
    console.log(wheelProp.name);
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
