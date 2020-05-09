import React from 'react'

const TodoList =((todos, toggleTodo)=>{
    return(
        <ul>
            {
                todos.map(todo => 
                <Todo
                    key={todo.id}
                    {...todo}
                    onClick={()=> toggleTodo(todo.id)}
                />)
            }
        </ul>
    )
})