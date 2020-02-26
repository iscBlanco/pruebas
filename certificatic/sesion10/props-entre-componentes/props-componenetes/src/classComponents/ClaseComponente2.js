import React, {Component} from 'react'

class ClaseComponente2 extends Component{
    render(){
        let namereceived2 = this.props.name
        return(
            <div>
                <h2>Este es el componente 2</h2>
                <p>recibi de componente 1: {namereceived2}</p>
                <hr/>
            </div>
        )
    }
}

export default ClaseComponente2