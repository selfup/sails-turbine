import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import SalesEngine from './sales-engine';

class App extends Component {
  constructor() {
    super()

    this.state = {
      itemsInput: "",
      merchantsInput: "",
      files: [],
      salesEngine: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.setState({itemsInput: document.getElementById('items')}, () => {
      this.setState({merchantsInput: document.getElementById('merchants')}, () => {
        this.listen()
      })
    })
  }

  listen() {
    this.itemsFire(this)
    this.merchantsFire(this)
  }

  handleSubmit() {
    const files = this.state.files
    this.setState({salesEngine: new SalesEngine(files)})
  }

  itemsFire(that) {
    let itemsInput = that.state.itemsInput
    itemsInput.addEventListener('change', function(e) {
      let file = itemsInput.files[0]
      let reader = new FileReader()
      reader.onload = function(e) {
        let files = that.state.files 
        files.push(reader.result)
        that.setState({files: files})
      }
      reader.readAsText(file)
    })
  }

  merchantsFire(that) {
    let merchantsInput = that.state.merchantsInput
    merchantsInput.addEventListener('change', function(e) {
      let file = merchantsInput.files[0]
      let reader = new FileReader()
      reader.onload = function(e) {
        let files = that.state.files 
        files.push(reader.result)
        that.setState({files: files})
      }
      reader.readAsText(file)
    })
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
