
import React from "react";
import { useState } from "react";
import styles from "../css/wheel.module.css";


function Wheel(){

  let [wheelProp, update] = useState("");
  
  function randomProps(){
    let wheelPropList = ["Props", "Hooks", "Jsx", "Render", "State"];
    update(wheelProp = wheelPropList[Math.floor(Math.random() * 5)]);
    console.log(wheelProp);
  }
  
  function updateProps(){
    setInterval(randomProps, 1000);
    setTimeout(clearInterval(randomProps), 8000);
    
  }
  
  
  return(
  
    
    <section className ={styles.wheel_section}>
      <div className ={styles.wheel}>
        <span className ={styles.wheel_text}>{wheelProp}</span>
      </div>
      <div onClick={updateProps} className ={styles.wheel_button}>
        <span>GIRAR</span>
      </div>
    </section>
  )
  
}

export default Wheel
