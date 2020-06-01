import React from 'react'
import TodoItem from './components/TodoItem'
import todoFile from './components/todoFile'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      todos:todoFile
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(id){
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
  render(){  
    let taskSelected = this.state.todos.reduce((accum,item)=>{
      if(item.completed === true){
        accum.selected.push(
          <TodoItem
          key={item.id}
          item={item}
          handleClick={this.handleClick}
        />
          )
      }
      return accum
    },{selected:[]}) 

    let list = this.state.todos.map((activity)=>
      <TodoItem
        key={activity.id}
        item={activity}
        handleClick={this.handleClick}
      />
    )
    console.log(list)
    //console.log(taskSelected.selected)
    return(
      <div>
          {list}
          <hr></hr>
          {taskSelected.selected}
      </div>
    
    )
  }    
}
export default App