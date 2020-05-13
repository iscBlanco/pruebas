import React from 'react'
import activityList from './activityList'
import Form from './FormComponent'

class Container extends React.Component{
    constructor(){
        super()
        this.state={
            list:activityList
        }
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(id){
        this.setState((prevState)=>{
            let newList= prevState.list.map((item)=>{
                if(item.id === id){
                    return{
                        ...item,
                        completed: !item.completed
                    }
                }
                return item
            })
            return {list:newList}
        })  
    }

    allActivitiesList(){
        let todoList= this.state.list.map((item)=>
        <Form
            key={item.id}
            item={item}
            handleChange={this.handleChange}
        />)
        return todoList
    }


    render(){
        let complete = this.state.list.reduce((accum,item)=>{
            if(item.completed === true){
                accum.done.push(item)
            }
            return accum
        },{done:[]})
        console.log(complete.done)

        let doneList = complete.done.map((item)=>
            <Form
                key={item.id}
                item={item}
                handleChange={this.handleChange}
            />
        )
        let incomplete = this.state.list.reduce((accum,item)=>{
            if(item.completed === false){
                accum.undone.push(item)
            }
            return accum
        },{undone:[]})
        console.log(incomplete.undone)

        let undoneList = incomplete.undone.map((item)=>
            <Form
                key={item.id}
                item={item}
                handleChange={this.handleChange}
            />
        )
        return(
            <div>
                {this.allActivitiesList()}
                <hr/>
               {doneList}
               <hr/>
               {undoneList}
            </div>
        )
    }
}
export default Container