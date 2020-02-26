import React, { Component } from 'react'
import ClaseComponente2 from './ClaseComponente2'

class ClaseComponente1 extends Component{
    render(){
        let nameReceived = this.props.name
        return(
            <div>
                <h2>Este es el componente 1</h2>
                <p>recibi de App: {nameReceived}</p>
                <hr/>
                <ClaseComponente2
                    name={nameReceived}
                /> 
         
            </div>
        )
    }
}

export default ClaseComponente1