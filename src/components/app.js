import React from 'react'

import Header from './header'
import Order from './order'
import Inventory from './inventory'
import SampleFishes from '../sample-fishes.js'
import Fish from './fish'

import base from '../base'

class App extends React.Component {
  static propTypes = {
    params: React.PropTypes.object.isRequired
  }

  state = {
    fishes: {},
    order: {}
  }

  componentWillMount() {
    const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`)

    this.ref = base.syncState(`${this.props.params.storeId}/fishes`, {
      context: this,
      state: 'fishes',
      then: () => {
        if (localStorageRef) {
          this.setState({ order: JSON.parse(localStorageRef) })
        }
      }
    })
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order))
  }

  componentWillUnmount() {
    base.removeBinding(this.ref)
  }

  addFish = (fish) => {
    const fishes = Object.assign({}, this.state.fishes)
    fishes[`fish-${Date.now()}`] = fish
    this.setState({ fishes })
  }

  updateFish = (key, updatedFish) => {
    const fishes = {...this.state.fishes}
    fishes[key] = updatedFish
    this.setState({ fishes })
  }

  removeFish = (key) => {
    const fishes = {...this.state.fishes}
    fishes[key] = null
    this.setState({ fishes })
  }

  loadSamples = () => {
    this.setState({
      fishes: SampleFishes
    })
  }

  addToOrder = (key) => {
    const order = {...this.state.order}
    order[key] = order[key] + 1 || 1
    this.setState({ order })
  }

  removeFromOrder = (key) => {
    const order = {...this.state.order}
    delete order[key]
    this.setState({ order })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="list-of-fishes">
            {Object.keys(this.state.fishes)
              .map(key => (
                <Fish
                  key={key} index={key}
                  details={this.state.fishes[key]}
                  addToOrder={this.addToOrder}
                />
              ))
            }
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          removeFromOrder={this.removeFromOrder}
        />
        <Inventory
          addFish={this.addFish}
          updateFish={this.updateFish}
          removeFish={this.removeFish}
          loadSamples={this.loadSamples}
          fishes={this.state.fishes}
          storeId={this.props.params.storeId}
        />
      </div>
    )
  }
}

export default App
