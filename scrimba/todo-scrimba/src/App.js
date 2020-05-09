import React from 'react'
import TodoItem from './components/TodoItem'
import './style.css'
import './App.css'
import todosData from './components/todosData'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      todos:todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(id){
    //console.log('Has Changed!',id)
    this.setState((prevState)=>{
      let newList = prevState.todos.map((item)=>{
        if(item.id === id){
          item.completed = !item.completed
        }
        return item
      })
      return{
        newList
      }
    })
  }
  /*completedList(){
    //console.log('Has Changed!',id)
  
    
    return list
  }  */
  render(){

    let todoList = this.state.todos.map(activity =>
      <TodoItem
        key={activity.id}
        item={activity}
        handleClicked={this.handleChange}
        stylized={true}
      />)

      
      let list = this.state.todos.reduce((item,selected)=>{
        if(selected.completed === true){
          item.completed.push(selected)
        }
        return item
      }, { completed:[]})
   
      let doneList = list.completed.map(activity =>
        <TodoItem
          key={activity.id}
          item={activity}
          stylized={false}
          //handleClicked={this.handleChange}
        />)
      console.log(list.completed)
      console.log(todoList.id)

    return(
      <div className="todo-list">
        {todoList}
        <hr></hr>
        <h1>TASKS DONE</h1>
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
