import React, { Component } from 'react';

export default class TodoItem extends Component{
    componentStyle = () =>{
        return{
            background: 'lightsteelblue',
            padding: '9px',
            borderBottom: '1.5 solid #ccc',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render(){
        return(
            <div style={this.componentStyle()}>
                <p>
                    <input 
                        type="checkbox"
                        onChange={this.props.markComplete.bind(this, this.props.todo.id)}
                        style={{ marginRight:'6px'}}
                    />
                    {this.props.todo.title}
                    <button style={closeBtnStyle}>X</button>
                </p>
            </div>
        );
    }
    
}
const closeBtnStyle={
    background:'#FF0000',
    color:'#FFF',
    border:'none',
    padding:'6px 9px',
    cursor:'pointer',
    float:'right'

}