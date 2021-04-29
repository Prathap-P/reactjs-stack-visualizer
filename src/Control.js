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
        var stackHeight= document.querySelectorAll(".Node").length;
        
        if(stackHeight === 7)
        alert("Stack is full...");            
        else
        props.push(); 
        document.querySelector(".Push input").value= "";
    }
    
    function pop(){
        var stackHeight= document.querySelectorAll(".Node").length;

        if(stackHeight === 0)
            alert("Stack is empty...");            

        else
            props.pop(); 
    }  
}

export default Control;