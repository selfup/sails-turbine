import React, { Component } from 'react'
import { Button }           from 'react-bootstrap'
import Fire                 from './helpers/fire'
import SalesEngine          from './sales-engine'

class App extends Component {
  constructor() {
    super()
    this.fire = new Fire().fire
    this.state = {
      items: "",
      merchants: "",
      files: [],
      salesEngine: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.setState({items: this.id('items')}, () => this.items())
    this.setState({merchants: this.id('merchants')}, () => this.merchants())
  }
  
  id(node) {
    return document.getElementById(node)
  }

  handleSubmit() {
    this.setState({salesEngine: new SalesEngine(this.state.files)})
  }

  items() {
    this.fire(this, this.state.items)
  }

  merchants() {
    this.fire(this, this.state.merchants)
  }

  render() {
    return (
      <div className="App">
        <div id="root"></div>
        <div id="page-wrapper"/>
        <div className="container">
          <h1>Sails Turbine</h1>
          <h3>Select the items.csv file:</h3> 
          <input type="file" id="items"/><br/>
          <h3>Select the merchants.csv file:</h3> 
          <input type="file" id="merchants"/><br/>
          <Button
            bsStyle="success" 
            bsSize="small"
            id="submitInputs"
            onClick={this.handleSubmit}
          >
          Submit
          </Button>
        </div>
      </div>
    )
  }
}

export default App;
