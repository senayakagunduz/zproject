import React from 'react'
import "./offer-item.scss"

const OfferItem = ({icon,title,desc}) => {
  return (
    <div className='offer-item'>
      <div className="icon">{icon}</div>  
      <div className="content">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default OfferItem