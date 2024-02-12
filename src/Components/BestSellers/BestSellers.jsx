import React from 'react'
import './BestSellers.css'
import Item from '../Item/Item'
import bestsellers from '../Assets/bestsellers'

const BestSellers = () => {
  return (
    <div className='bestsellers'>
     <h1>Best Sellers</h1>
     <div className="bestsellers-items">
      {bestsellers.map(item=>{
        return (
          <Item 
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image[1]}
            price={item.price}
          />
        )
      })}
     </div>
    </div>
  )
}

export default BestSellers