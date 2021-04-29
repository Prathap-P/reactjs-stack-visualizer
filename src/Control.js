import React from 'react';
import "./Control.css";

function Control(props){
    return(
        <div className= "Control">
            <div className= "Push">
                <button onClick= {push} >Push</button>
                <input placeholder= "Push a value..." maxLength= "5"/>
            
            </div>
            <div className= "Pop">
                <button onClick= {pop}>Pop</button>
            </div>
        </div>
    )

    function push(){
        props.push(); 
        document.querySelector(".Push input").value= "";
    }

    function pop(){
        props.pop(); 
    }  
}

export default Control;