import React from 'react'
import '../style.css'

function TodoItem(props){
<<<<<<< HEAD
    const completedStyle={
        fontStyle:"italic",
        textDecoration:"line-through",
        color:"#cdcdcd"
=======
    const doneStyle={
        fontStyle:"italic",
        color:"#cdcdcd",
        textDecoration:"line-through"
>>>>>>> a36c8fb4523806c3866a544764340f82a7b7158b
    }
    return(
        <div className="todo-item">
            <input 
                type="checkbox"
                checked={props.item.completed}
                onChange={()=>props.handleClicked(props.item.id)}
            />
<<<<<<< HEAD
            <label style={props.item.completed ? completedStyle : null}>
                {props.item.id} {props.item.text} 
            </label>
=======
            
            {props.stylized ? <label style={props.item.completed ? doneStyle:null}>{props.item.id} {props.item.text} </label>:
                <label >{props.item.id} {props.item.text} </label>}
>>>>>>> a36c8fb4523806c3866a544764340f82a7b7158b
        </div>

    )
}
export default TodoItem