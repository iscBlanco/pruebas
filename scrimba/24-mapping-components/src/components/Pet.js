import React, { Component } from 'react'

class Pet extends Component{
    render(){
        return(
            <div>
                <h3>Patient key number: {this.props.id}</h3>  
                <h2>Name: {this.props.name}</h2> 
                <p>Gender: {this.props.gender}</p>
                <h3>Breed: {this.props.breed}</h3>
                <hr></hr>
            </div>
        )
    }
}
export default Pet