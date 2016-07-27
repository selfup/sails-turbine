import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import SalesEngine from './sales-engine.js';

class App extends Component {
  constructor() {
    super()

    this.state = {
      itemsInput: "",
      files: [],
      salesEngine: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.setState({itemsInput: document.getElementById('itemsInput')}, () => {
      this.listen()
      console.log(this.state.salesEngine)
    })
  }

  listen() {
    this.fire(this)
  }

  handleSubmit() {
    const files = this.state.files
    this.setState({salesEngine: new SalesEngine(files)})
  }


  fire(self) {
    let itemsInput = self.state.itemsInput
    itemsInput.addEventListener('change', function(e) {
      let file = itemsInput.files[0]
      let reader = new FileReader()
      reader.onload = function(e) {
        let files = self.state.files 
        files.push(reader.result)
        self.setState({files: files})
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
          <h3>Select the items csv file:</h3> 
          <input type="file" id="itemsInput"/>
          <br/>
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
