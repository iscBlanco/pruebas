import React, {Component} from 'react'

export default class Counter extends Component{
    incrementIfOdd = () =>{console.log('increment if odd')}
    render(){
        return(
            <p>
                Clicked: {this.props.value} times
                <button onClick ={this.props.onIncrement}>+</button>
                <button onClick ={this.props.onDecrement}>-</button>
                <button onClick ={this.incrementIfOdd}>Increment if odd</button>
                
            </p>
        )
    }
}