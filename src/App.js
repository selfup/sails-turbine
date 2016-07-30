import React, { Component } from 'react'
import { Button }           from 'react-bootstrap'
import Fire                 from './helpers/fire'
import Items                from './Items'
import Merchants            from './Merchants'
import SalesEngine          from './sales-engine/sales-engine'

class App extends Component {
  constructor() {
    super()
    this.fire  = new Fire().fire
    this.state = {
      beg: 0,
      end: 3,
      items: "",
      merchants: "",
      files: [],
      salesEngine: {
        items: { all: [] },
        merchants: { all: [] }
      }
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
          </Button><br/><br/>
          <div className="row">
            <div className="col-md-6">
              <h1 className="App-items">Items: </h1>
              <Items 
                items={
                  this.state.salesEngine
                    .items.all
                    .slice(this.state.beg, this.state.end)
                }
              />
            </div>
            <div className="col-md-6">
              <h1 className="App-merchants">Merchants: </h1>
              <Merchants merchants={
                  this.state.salesEngine
                    .merchants.all
                    .slice(this.state.beg, this.state.end)
                }
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
