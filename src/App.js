import React, { Component } from 'react';
import SalesEngine from './sales-engine.js';

class App extends Component {
  constructor() {
    super()

    this.state = {
      fileInput: "",
      items: ""
    }
  }

  componentDidMount() {
    this.setState({fileInput: document.getElementById('fileInput')}, () => {
      this.listen()
      console.log(this.state.items)
    })
  }

  listen() {
    this.fire(this)
  }

  fire(self) {
    let fileInput = self.state.fileInput
    fileInput.addEventListener('change', function(e) {
      let file = fileInput.files[0]
      let reader = new FileReader()
      reader.onload = function(e) {
        self.setState({items: new SalesEngine({items: reader.result}).items.all})
      }
      reader.readAsText(file)
    })
  }

  render() {
    return (
      <div className="App">
      <div id="root"></div>
      <div id="page-wrapper"/>
      <h1>Sails Turbine</h1>
        Select the items csv file: 
      <input type="file" id="fileInput"/>
      </div>
    )
  }
}

export default App;
