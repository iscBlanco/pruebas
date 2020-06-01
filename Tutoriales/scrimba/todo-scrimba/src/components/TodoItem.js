import React from 'react'
import '../style.css'

function TodoItem(props){
    const completedStyle={
        fontStyle:"italic",
        textDecoration:"line-through",
        color:"#cdcdcd"
    }
    return(
        <div className="todo-item">
            <input 
                type="checkbox"
                checked={props.item.completed}
                onChange={()=>props.handleClicked(props.item.id)}
            />
            <label style={props.item.completed ? completedStyle : null}>
                {props.item.id} {props.item.text} 
            </label>
        </div>

    )
}
export default TodoItem