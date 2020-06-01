import React from 'react'
import OrderList from '../components/OrderList'
import BookList from '../components/BookList'

function LayoutRight(){
    return(
        <div className="columns is-multiline">
            <div className="column is-one-third">
                <h1>Ultimas ordenes</h1>
                <OrderList/>
            </div>
            <div className="column is-one-third">
                <h1>Lista de Libros</h1>
                <BookList/>
                
            </div>
            <div className="column is-one-third">
                <h1>ultima Orden</h1>
                <OrderList/>
            </div>
        </div>

    )
}
export default LayoutRight