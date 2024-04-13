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
        // console.log(item.image);
        const images = [...item.image]
        return (
          <Item 
            key={item.id}
            id={item.id}
            name={item.name}
            image={images}
            price={item.price}
          />
        )
      })}
     </div>
     <button>View more</button>
    </div>
  )
}

export default BestSellers