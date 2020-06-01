import React from 'react'
//import App from '../App'

//esta es la interfaz de usuario 
//this ih the user interface
export default function TodoItem(props){
    
    return (
        <div>
            <input
                type="checkbox"
                checked={props.item.completed}
                onChange={()=>props.infoUpdated(props.item.id)}
            />
            <label>{props.item.activity} {props.item.activity}</label>
            
            
        </div>
    )
}