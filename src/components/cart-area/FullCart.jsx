import React from 'react'
import CartItem from './CartItem'

export default function FullCart({flavourItems, totalPrice = 0, add, remove}) {

  const flavors = Object.keys(flavourItems);

  return (
    <div className="react">
      <div className="builder">
        <h3>Build your own Ice Cream Sundae</h3>
        {/* <!-- items start --> */}
        <div className="react">
          <ul>
            {
              flavors.map( (flavor, i) => (
                <CartItem key={ i } flavor={ flavor } add={ add } remove={ remove } />
              ) )
            }
          </ul>
        </div>
        {/* <!-- items end --> */}

        {/* <!-- total price start --> */}
        <div className="total react">
          <div>Total Price</div>
          <div>{ totalPrice.toFixed(2) } Taka</div>
        </div>
        {/* <!-- total price end --> */}
        <button type="button" className="order rounded">
          Add to Cart
        </button>
      </div>
    </div>
  )
}
