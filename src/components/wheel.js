
import React from "react";
//Importando o useState do React
import { useState } from "react";
import "../css/wheel.css";


function Wheel(){
  //Armazenando o estado do componente
  let [wheelProp, setWheelProp] = useState();
  const [wheelText, setWheelText] = useState(`wheel_text`);
  
  function randomProps(){
    let wheelPropList = ["Props", "Hooks", "Jsx", "Render", "State"];
    //Atualizando o estado do componente no virtual DOM para re-renderizar
    setWheelProp(wheelProp = wheelPropList[Math.floor(Math.random() * 5)]);
    console.log(wheelProp);
  }
  
function tt(){
    setWheelText(`wheel_text wheel_text_enabled`);
    setTimeout(function(){setWheelText(`wheel_text`)}, 1500);
}
  
  let iterations = function(){setInterval(tt, 3000)};
  
  function updateProps(){
    setWheelText(`wheel_text wheel_text_enabled`);
    iterations();
    setTimeout(function(){
    //setWheelText(`wheel_text`);
    clearInterval(tt);
    }, 2000);
  }
  
  
  return(
  
    
    <section className ="wheel_section">
      <div className ="wheel">
        <span onAnimationEnd={randomProps} className ={wheelText}>{wheelProp}</span>
      </div>
      <div onClick={updateProps} className ="wheel_button">
        <span>GIRAR</span>
      </div>
    </section>
  )
  
}

export default Wheel
