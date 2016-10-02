import React from 'react'

import Header from './header'
import Order from './order'
import Inventory from './inventory'
import SampleFishes from '../sample-fishes.js'
import Fish from './fish'

class App extends React.Component {
  constructor() {
    super()
    this.addFish = this.addFish.bind(this)
    this.loadSamples = this.loadSamples.bind(this)
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

  loadSamples() {
    this.setState({
      fishes: SampleFishes
    })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="list-of-fishes">
            {Object.keys(this.state.fishes)
              .map(key => <Fish key={key} details={this.state.fishes[key]} />)
            }
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
      </div>
    )
  }
}

export default App
