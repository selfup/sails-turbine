import React, { Component } from 'react'
import './css/Merchants.css'

class Merchants extends Component {
  merchantsLoader() {
    return this.props.merchants.map((merchant) => {
      return (
        <div className="container Merchants-container" key={merchant.id}>
          <br/>
          <p><em>Id: {merchant.id}</em></p>
          <h3>Name: {merchant.name}</h3>
        </div>
      )
    })
  }

  render() {
    return(
      <div>
        <h1>Merchants: </h1>
        {this.merchantsLoader()}
      </div>
    )
  }
}

export default Merchants
