
import React from "react";
//Importando o useState do React
import { useState } from "react";
import "../css/wheel.css";


function Wheel(){
  //Armazenando o estado do componente
  let [wheelProp, setWheelProp] = useState();
  const [wheelText, setWheelText] = useState(`wheel_text`);
  var finishedRotate;
  
  function randomProps(){
    let wheelPropList = ["Props", "Hooks", "Jsx", "Render", "State"];
    //Atualizando o estado do componente no virtual DOM para re-renderizar
    if (finishedRotate !== true && wheelText !== "wheel_text_center"){
    setWheelProp(wheelProp = wheelPropList[Math.floor(Math.random() * 5)]);
    console.log(wheelProp);
    }
  }
  
  
 function wheelTextClass(){
    setWheelText(`wheel_text wheel_text_enabled`);
    setTimeout(function(){
    	if (finishedRotate !== true){
    	setWheelText(`wheel_text`);
    	}
    	else{
    		setWheelText(`wheel_text_center`);
    	}
    }, 300);
}
  
  function updateProps(){
  	finishedRotate = false;
    const iterations = setInterval(wheelTextClass, 500);
    setTimeout(function(){
    clearInterval(iterations);
    finishedRotate = true;
    }, 5000);
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
