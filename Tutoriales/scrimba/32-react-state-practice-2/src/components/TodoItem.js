import React from 'react'

class TodoItem extends React.Component{
    render(){
        return(
            <div>
                <input
                    onChange={() => this.props.handleClick(this.props.item.id)}
                    type="checkbox"
                    checked={this.props.item.completed}
                />
                <label>{this.props.item.id} {this.props.item.activity}</label>
            </div>
        )
    }
}
export default TodoItem