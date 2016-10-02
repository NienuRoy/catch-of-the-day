import React from 'react'

import Header from './header'
import Order from './order'
import Inventory from './inventory'

class App extends React.Component {
  constructor() {
    super()
    this.addFish = this.addFish.bind(this)
    this.state = {
      fishes: {},
      order: {}
    }
  }

  addFish(fish) {
    const fishes = Object.assign({}, this.state.fishes)
    fishes[`fish-${Date.now()}`] = fish
    this.setState({ fishes })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    )
  }
}

export default App
