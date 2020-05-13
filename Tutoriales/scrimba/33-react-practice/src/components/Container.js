import React from 'react'
import todoList from './todoList'
import TodoItem from './TodoItem'
//this is the Bussiness logic layer
//En este componente va la logica de negocios
class Container extends React.Component{
  constructor(){
    super()
    this.state={
      activityList:todoList
    }
    this.mapInfo = this.mapInfo.bind(this)
  }
  other(id){
    this.setState((prevState)=>{
      let listUpdated = prevState.activityList.map((item)=>{
        if(item.id === id){
          return{
            ...item,
            completed: !item.completed
          }  
        }
        return item
      })
      console.log(prevState.activityList)
      console.log(listUpdated)

      return {activityList:listUpdated}
    })
  }
  mapInfo(id){
    console.log('hola',id)
    this.other(id)
  }
  lista(){
    let list = this.state.activityList.map((item)=>
    <TodoItem
    key={item.id}
    item={item}
    infoUpdated={this.mapInfo}
    />
  )
  return list
  }
  render(){

    return(
      <div>
        {this.lista()}
        
      </div>
    )
  }

}
export default Container