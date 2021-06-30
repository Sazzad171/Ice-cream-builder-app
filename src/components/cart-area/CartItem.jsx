import React from 'react'
import { countBy } from 'lodash'

export default function CartItem({ flavor, add, remove, i, flavorsPrice, iceCreamItem = {} }) {
  const countItem = countBy(iceCreamItem);
  return (
    <>
      <li className="item">
        <span>{flavor}</span>
        <span className="quantity">{ countItem[flavor] }</span>
        <span className="price"> ({ flavorsPrice[i] } TK)</span>
        <div className="right">
          <button onClick={ add.bind(this, flavor) } type="button" className="plus rounded">+</button>
          <button onClick={ remove.bind(this, flavor) } type="button" className="minus rounded">-</button>
        </div>
      </li>
    </>
  )
}
