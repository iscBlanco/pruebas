import React from 'react'
import FunctionalComponent2 from './FunctionalComponent2'

const FunctionalComponent1=(props)=>{
    let nameReceived=props.name

    return(
        <div>
            <h1>Este es el componente funcional 1</h1>
            <p>recibi de App {nameReceived}</p>
            <hr/>
            <FunctionalComponent2
                sameNameReceived={nameReceived}
            />
        </div>
    )
}

export default FunctionalComponent1