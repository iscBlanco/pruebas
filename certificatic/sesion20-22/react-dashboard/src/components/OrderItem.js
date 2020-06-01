import React from 'react'

const OrderItem =(props)=>{
    const{order,date,name,price,status}=props.item
    return(
        <nav className="level">
            <div className="level-left">
                <div>
                <p className="title is-6 is-marginless">
                   <a>{order}</a> 
                </p>
               
                <small>{date} <a>{name}</a></small>
                </div>
            </div>
            <div className="level-right">
                <div>
                    <p>${price}</p>
                    <span className={`tag is-${status}`}>{status}</span>
                </div>
            </div>
        </nav>
        
    )
}

export default OrderItem