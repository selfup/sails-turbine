import React, { Component } from 'react'
import './css/Items.css'

class Items extends Component {
  itemsLoader() {
    return this.props.items.map((item) => {
      return (
        <div className="container Items-container" key={item.id}>
          <br/>
          <p><em>Id: {item.id}</em></p>
          <h3>Name: {item.name}</h3>
          <p>Description: {item.description}</p>
        </div>
      )
    })
  }

  render() {
    return(
      <div>
        {this.itemsLoader()}
      </div>
    )
  }
}

export default Items