import './Node.css';

function Node(props){
    return(
        <div className= {`${props.popNodeClassName} ${props.pushNodeClassName} Node`}>
            {props.nodeVal}
        </div>
    );
}

export default Node;