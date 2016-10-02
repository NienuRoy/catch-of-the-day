import React from 'react'
import { getFunName } from '../helpers'

export default class StorePicker extends React.Component {
  goToStore(event) {
    event.preventDefault()
    const storeId = this.storeInput.value
  }

  // `this` in a component lifecycle method (like `render`) is bound to the
  // component instance; all other custom methods are not bound by default
  render() {
    return (
      <form className="store-selector" onSubmit={e => this.goToStore(e)}>
        <h2>Please Enter A Store</h2>
        {/* function refs > string refs  */}
        <input type="text" required
          placeholder="Store Name"
          defaultValue={getFunName()}
          ref={input => this.storeInput = input}
        />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}
