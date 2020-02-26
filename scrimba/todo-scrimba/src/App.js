import React from 'react'
import TodoItem from './components/TodoItem'
import './style.css'
import './App.css'

function App(){
  return(
    <div className="todo-list">
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
    </div>
  )
}
export default App