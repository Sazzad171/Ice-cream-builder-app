import React, { Component } from 'react'

import FullCart from './cart-area/FullCart'
import IceCream from './ice-cream-area/IceCream'

export default class Body extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flavourItems: {
        Vanilla: 45,
        Chocolate: 50,
        Lemon: 35,
        Orange: 40,
        Strawberry: 60
      },
      iceCreamItem: [],
      totalPrice: 0
    }
  }

  // function for add scoop
  addScoop = (scoop) => {
    const { iceCreamItem, flavourItems } = this.state;
    const workingScoops = [...iceCreamItem];
    workingScoops.push(scoop);

    this.setState((prevState) => {
      return {
        iceCreamItem: workingScoops,
        totalPrice: prevState.totalPrice + flavourItems[scoop]
      }
    })
  }

  // function for remove scoop
  removeScoop = (scoop) => {
    const { iceCreamItem, flavourItems } = this.state;
    const workingScoops = [...iceCreamItem];
    
    const scoopIndex = workingScoops.findIndex((sc) => sc === scoop);

    if (scoopIndex >= 0) {
      workingScoops.splice(scoopIndex, 1);

      this.setState((prevState) => {
        return {
          iceCreamItem: workingScoops,
          totalPrice: prevState.totalPrice - flavourItems[scoop]
        }
      })
    }
    else alert("You don't add this item!");
  }

  render() {
    const { flavourItems, totalPrice, iceCreamItem } = this.state;

    return (
      <div className="mainBody react">
        <div className= { "container" }>

          <IceCream flavourItems={ iceCreamItem } />

          <FullCart flavourItems={ flavourItems } totalPrice={ totalPrice } add={ this.addScoop } remove={ this.removeScoop }
           iceCreamItem={ iceCreamItem } />
        </div>
      </div>
    )
  }
}