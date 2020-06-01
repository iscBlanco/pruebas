import React from 'react'
import bookData from './bookData'
import BookItem from './BookItem'

const BookList =()=>{
    let list = bookData.map((item)=>{
        return <BookItem
            key={item.id}
            item={item}
        />
    })
    return(
        <>
            <div className="card">
                {list} 
                <footer className="card-footer is-center">
                    <button class="button is-link is-outlined">Ver Todos</button> 
                </footer>
                
            </div>
        </>
    )
}

export default BookList