import React from 'react'
import './Item.css'

const Item = (props) => {
  return (
    <div className='item'>
     <img src={props.image} alt="item-image"/>
     <p>{props.name}</p>
     <p><strong>{props.price}</strong></p>
    </div>
  )
}

export default Item