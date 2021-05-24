import React from 'react'

export default function CartItem({flavor, add, remove}) {
  return (
    <>
      <li className="item">
        <span>{flavor}</span>
        <span className="quantity">0</span>
        <div className="right">
          <button onClick={ add.bind(this, flavor) } type="button" className="plus rounded">+</button>
          <button onClick={ remove.bind(this, flavor) } type="button" className="minus rounded">-</button>
        </div>
      </li>
    </>
  )
}
