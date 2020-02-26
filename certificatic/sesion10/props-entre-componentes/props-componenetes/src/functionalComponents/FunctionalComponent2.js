import React from 'react'

export default function FunctionalComponent2(props){
    return(
        <div>
            <h2>Este es el componente funcional 2</h2>
            <p>recibi del componente funcional 1: {props.sameNameReceived}</p>
        </div>
    )
}