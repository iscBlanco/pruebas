import React from "react";
import TodoItem from "./components/TodoItem";
import "./style.css";
import "./App.css";
import todosData from "./components/todosData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(id) {
    //console.log('Has Changed!',id)
    this.setState((prevState) => {
      let newList = prevState.todos.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      });
      return {
        newList,
      };
    });
  }
<<<<<<< HEAD:scrimba/todo-scrimba/src/App.js
  /*completedList(){
    //console.log('Has Changed!',id)
  
    
    return list
  }  */
  render(){

=======
  render() {
<<<<<<< HEAD
    let todoList = this.state.todos.map((activity) => (
=======
>>>>>>> b1192403b399c6ca453b81e71df30909b72c5f21:Tutoriales/scrimba/todo-scrimba/src/App.js
    let todoList = this.state.todos.map(activity =>
>>>>>>> a36c8fb4523806c3866a544764340f82a7b7158b
      <TodoItem
        key={activity.id}
        item={activity}
        handleClicked={this.handleChange}
<<<<<<< HEAD
      />
    ));

    let done = this.state.todos.reduce(
      (accum, item) => {
        if (item.completed === true) {
          accum.complete.push(item);
        }
        return accum;
      },
      { complete: [] }
    );
    //done2 retorna un arreglo
    let done2 = this.state.todos.filter((item) => item.completed === true);
=======
        stylized={true}
      />)

<<<<<<< HEAD:scrimba/todo-scrimba/src/App.js
      
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
=======
    let done = this.state.todos.reduce((accum, item) => {
      if (item.completed === true) {
        accum.complete.push(item)
      }
      return accum
    }, { complete: [] })
>>>>>>> a36c8fb4523806c3866a544764340f82a7b7158b

    let doneList = done2.map((activity) => (
      <TodoItem
        key={activity.id}
        item={activity}
        handleClicked={this.handleChange}
      />
    ));
    //la variable done nos retorna un objeto de arreglos
    //por lo tanto done.complete es un arreglo
    console.log(done.complete);

    return (
      <div className="todo-list">
        {todoList}
        <br />
        {doneList}
<<<<<<< HEAD
=======

>>>>>>> b1192403b399c6ca453b81e71df30909b72c5f21:Tutoriales/scrimba/todo-scrimba/src/App.js
>>>>>>> a36c8fb4523806c3866a544764340f82a7b7158b
      </div>
    );
  }
}

export default App;

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
