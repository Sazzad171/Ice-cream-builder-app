import React, { Component } from 'react'
import axios from 'axios'

import FullCart from './cart-area/FullCart'
import IceCream from './ice-cream-area/IceCream'

export default class Body extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: {},
      iceCreamItem: [],
      totalPrice: 0
    }
  }

  componentDidMount() {
    axios.get('https://ice-cream-builder-806e6-default-rtdb.firebaseio.com/items.json').then((res) => {
      this.setState({
        items: res.data
      })
    }
    )
  }

  // function for add scoop
  addScoop = (scoop) => {
    const { iceCreamItem, items } = this.state;
    const workingScoops = [...iceCreamItem];
    workingScoops.push(scoop);

    this.setState((prevState) => {
      return {
        iceCreamItem: workingScoops,
        totalPrice: prevState.totalPrice + items[scoop]
      }
    })
  }

  // function for remove scoop
  removeScoop = (scoop) => {
    const { iceCreamItem, items } = this.state;
    const workingScoops = [...iceCreamItem];
    
    const scoopIndex = workingScoops.findIndex((sc) => sc === scoop);

    if (scoopIndex >= 0) {
      workingScoops.splice(scoopIndex, 1);

      this.setState((prevState) => {
        return {
          iceCreamItem: workingScoops,
          totalPrice: prevState.totalPrice - items[scoop]
        }
      })
    }
    else alert("You don't add this item!");
  }

  render() {
    const { items, totalPrice, iceCreamItem } = this.state;

    return (
      <div className="mainBody react">
        <div className= { "container" }>

          <IceCream flavourItems={ iceCreamItem } />

          <FullCart flavourItems={ items } totalPrice={ totalPrice } add={ this.addScoop } remove={ this.removeScoop }
           iceCreamItem={ iceCreamItem } />
        </div>
      </div>
    )
  }
}