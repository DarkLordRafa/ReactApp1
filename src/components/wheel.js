
import React from "react";
import {useState} from "react";
import styles from "../css/wheel.module.css";


function Wheel(){

  let wheelProp [name, update] = useState("");
  
  function randomProps(){
    var wheelPropList = ["Props", "Hooks", "Jsx", "Render"];
    update(name = wheelPropList[Math.floor(Math.random() * 4)]);
    console.log(wheelProp);
  }
  
  
  return(
  
    
    <section className ={styles.wheel_section}>
      <div className ={styles.wheel}>
        <span className ={styles.wheel_text}>{wheelProp}</span>
      </div>
      <div onClick={randomProps} className ={styles.wheel_button}>
        <span>GIRAR</span>
      </div>
    </section>
  )
  
}

export default Wheel
