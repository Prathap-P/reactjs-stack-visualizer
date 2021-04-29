import {React, Component} from 'react';
import './NodeList.css';
import Node from './Node.js';
import Control from './Control.js';

class NodeList extends Component{

    constructor(props){
        super(props);
        this.props= props;
        this.state= {
            nodeList : ["9", "89"],
            popNodeClassName : "",
            pushNodeClassName : ""
        };
    }

    // addPushAnimation(){
    //     this.setState({
    //         pushNodeClassName : "pushNodeAnimation"
    //     });
    // }

    removePushAnimation(){
        this.setState({
            pushNodeClassName : ""
        })
    }

    pushNode(){
        var valToPush= document.querySelector(".Push input").value;
        if(valToPush.trim() === "")
            return;

        this.setState((prevState, props) => {
            var newNodeList= [valToPush, ...prevState.nodeList]

            return ({
                nodeList : newNodeList,
                pushNodeClassName : "pushNodeAnimation"
            })
        });

        setTimeout(() =>  this.removePushAnimation(), 1000);

    }   
    
    addPopAnimation(){
        this.setState({
            popNodeClassName : "popNodeAnimation"
        })
    }

    removePopAnimation(){
        this.setState({
            popNodeClassName : ""
        })
    }

    popNode(){
        this.addPopAnimation();
        
        setTimeout(() => {
            this.setState((prevState, props) => {
                var newNodeList= [...prevState.nodeList].splice(1);
                return ({nodeList: newNodeList})
            }, 
            
            () => {
                this.removePopAnimation();
            })
        }, 1000)
        
    }
    
    render(){
        return(
            <div className= "NodeListControl">
                <div class= "NodeList">
                    {this.state.nodeList.map((value, index) => {
                        if(index === 0)
                            return <Node nodeVal= {value} popNodeClassName= {this.state.popNodeClassName} pushNodeClassName= {this.state.pushNodeClassName} />
                        
                        return <Node nodeVal= {value} popNodeClassName= "" pushNodeClassName= ""/>
                    })}
                </div>

                <Control push= {this.pushNode.bind(this)} pop= {this.popNode.bind(this)}/>
            </div>
        )
    }
}

export default NodeList;