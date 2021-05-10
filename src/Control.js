import React from 'react';
import "./Control.css";

const Control= React.forwardRef((props, ref) => {

    function push(){
        var stackHeight= props.nodeListRef.current.children.length;
        
        if(stackHeight === 7)
            alert("Stack is full...");            
        
        else{
            props.push(); 
            var input= ref.current;
            input.value= "";
            input.focus();
        }
    }
    
    function pop(){
        var stackHeight=  props.nodeListRef.current.children.length;

        if(stackHeight === 0)
            alert("Stack is empty...");            

        else
            props.pop(); 
    }  

    return(
        <div className= "Control">
            <div className= "Push">
                <button onClick= {push} >Push</button>
                <input placeholder= "Push a value..." maxLength= "5" autoFocus= {true} ref= {ref} />
            
            </div>
            <div className= "Pop">
                <button onClick= {pop}>Pop</button>
            </div>
        </div>
    )

});

export default Control;