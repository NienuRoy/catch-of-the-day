import React from 'react'
import AddFishForm from './add-fish-form'

class Inventory extends React.Component {
  constructor() {
    super()
    this.renderInventory = this.renderInventory.bind(this)
  }

  handleChange(event, key) {
    const fish = this.props.fishes[key]
    const updatedFish = {
      ...fish,
      [event.target.name]: event.target.value
    }

    this.props.updateFish(key, updatedFish)
  }

  renderInventory(key) {
    const fish = this.props.fishes[key]

    return (
      <div className="fish-edit" key={key}>
        <input type="text" name="name" defaultValue={fish.name} onChange={e => this.handleChange(e, key)} placeholder="Fish Name" />
        <input type="text" name="price" defaultValue={fish.price} onChange={e => this.handleChange(e, key)} placeholder="Fish Price" />
        <select name="status" defaultValue={fish.status} onChange={e => this.handleChange(e, key)} >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea type="text" name="desc" defaultValue={fish.desc} onChange={e => this.handleChange(e, key)} placeholder="Fish Desc"></textarea>
        <input type="text" name="image" defaultValue={fish.image} onChange={e => this.handleChange(e, key)} placeholder="Fish Image" />
        <button onClick={() => this.props.removeFish(key)}>Remove Fish</button>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(this.renderInventory)}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </div>
    )
  }
}

Inventory.propTypes = {
  fishes: React.PropTypes.object.isRequired,
  addFish: React.PropTypes.func.isRequired,
  updateFish: React.PropTypes.func.isRequired,
  removeFish: React.PropTypes.func.isRequired,
  loadSamples: React.PropTypes.func.isRequired,
}

export default Inventory
