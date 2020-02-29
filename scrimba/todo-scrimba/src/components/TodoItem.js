import React from 'react'
import '../style.css'

function TodoItem(props){
    return(
        <div className="todo-item">
            <input 
                type="checkbox"
                checked={props.item.completed}
                onChange={()=>props.handleClicked(props.item.id)}
            />
            <label>{props.item.id} {props.item.text} </label>
        </div>

    )
}
export default TodoItem