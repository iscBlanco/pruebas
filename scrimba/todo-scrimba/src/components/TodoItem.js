import React from 'react'
import '../style.css'

function TodoItem(props){
    const doneStyle={
        fontStyle:"italic",
        color:"#cdcdcd",
        textDecoration:"line-through"
    }
    return(
        <div className="todo-item">
            <input 
                type="checkbox"
                checked={props.item.completed}
                onChange={()=>props.handleClicked(props.item.id)}
            />
            
            {props.stylized ? <label style={props.item.completed ? doneStyle:null}>{props.item.id} {props.item.text} </label>:
                <label >{props.item.id} {props.item.text} </label>}
        </div>

    )
}
export default TodoItem