import React from 'react'
import './style.css'

function TodoItem(){
    return(
        <div className="todo-item">
            <input type="checkbox"/>
            <label>list element </label>
        </div>

    )
}
export default TodoItem