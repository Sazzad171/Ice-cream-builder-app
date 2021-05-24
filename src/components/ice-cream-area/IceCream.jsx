import React from 'react'
import Item from './Item'

export default function IceCream({ flavourItems }) {

  return (
    <div className="icecream react">
      <p className="cone"></p>
      {
        flavourItems.map( (flavourItems, i) => (
          <Item key={i} flavourItems={ flavourItems } />
        ))
      }
      <div className="cherry"></div>
    </div>
  )
}
