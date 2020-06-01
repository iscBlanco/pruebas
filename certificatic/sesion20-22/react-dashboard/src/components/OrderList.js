import React from 'react'
import OrderItem from './OrderItem'
import orderData from './orderData'

const OrderList =()=>{
    console.log(orderData)
    let list = orderData.map((item)=>{
        return <OrderItem 
            key={item.id}
            item={item}
            />
    })
    console.log(list)
    return(
        <div>
            {list}
        </div>
       
    )
}

export default OrderList