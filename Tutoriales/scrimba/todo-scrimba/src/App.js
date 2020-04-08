import React from 'react'
import TodoItem from './components/TodoItem'
import './style.css'
import './App.css'
import todosData from './components/todosData'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(id) {
    //console.log('Has Changed!',id)
    this.setState((prevState) => {
      let newList = prevState.todos.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed
        }
        return item
      })
      return {
        newList
      }
    })
  }
  render() {
    let todoList = this.state.todos.map(activity =>
      <TodoItem
        key={activity.id}
        item={activity}
        handleClicked={this.handleChange}
      />)

    let done = this.state.todos.reduce((accum, item) => {
      if (item.completed === true) {
        accum.complete.push(item)
      }
      return accum
    }, { complete: [] })

    let doneList = done.complete.map(activity =>
      <TodoItem
        key={activity.id}
        item={activity}
        handleClicked={this.handleChange}
      />)


    return (
      <div className="todo-list">
        {todoList}
        <br/>
        {doneList}

      </div>
    )
  }
}

export default App

/*
function App(){
  let todoList = todosData.map(activity =>
    <TodoItem
      key={activity.id}
      item={activity}
      //item={item}
      //order={activity.id}
      //text={activity.text}
      //done={activity.completed}
    />
  )
  return(
    <div className="todo-list">
      {todoList}
    </div>
  )
}*/
