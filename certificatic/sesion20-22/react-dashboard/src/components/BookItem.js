import React from 'react'

const BookItem =(props)=>{
    const {id, img, title,amount}=props.item
    return(
        <article className="media">
        <div className="media-left">
          <span className="tag is-rounded is-large is-gray">{id}</span>
        </div>
        <figure className="media-left">
          <p className="image is-48x48">
            <img src={img}></img>
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p className="title is-6 is-marginless">
              <a>{title}</a>
            </p>
          </div>
        </div>
        <div className="media-right">
          {amount} sold
        </div>
      </article>
    )
}
export default BookItem