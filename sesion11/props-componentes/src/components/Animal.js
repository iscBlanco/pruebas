import React from 'react'

function Animal(props){
    console.log(props)
    return(
        <div className="animal">
            <img alt=""src={props.imgUrl}/>
            <h3>{props.name}</h3>
            <p>Phone:{props.phone}</p>
            <label>Email: {props.email}</label>
        </div>
    )
}

export default Animal