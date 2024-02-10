import React from 'react'
import './Item.css'

const Item = (props) => {
  return (
    <div className='item'>
     <img src={props.image[0]} alt="item-image"/>
     <p>{props.name}</p>
     <p>{props.category}</p>
     <p>{props.price}</p>
    </div>
  )
}

export default Item