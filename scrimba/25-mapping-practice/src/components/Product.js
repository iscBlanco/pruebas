import React from 'react'

export default function Product(props){
    return(
        <div>
            <h1>serie: {props.num}</h1>
            <h1>product: {props.name}</h1>
            <h1>cost: {props.price}</h1>
            <h1>existance: {props.existance}</h1>
            <hr/>
        </div>
    )
}