import React, { Component } from 'react'

class Items extends Component {
  itemsLoader() {
    return this.props.items.map((item) => {
      return (
        <div className="container Ideas-container" key={item.id}>
          <p>Id: {item.id}</p>
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