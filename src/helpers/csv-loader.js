const _  = require('lodash')

class CSVLoader {
  constructor(file) {
    this.file = file
    this.data = this.parseData()
  }

  loadData() {
    let trafficData = this.file.split("\n")
    this.csvHeaders = trafficData[0].split(",")
    trafficData.splice(0, 1)
    this.csvData = trafficData
  }

  parseData() {
    this.loadData()
    return _.map(this.csvData, row => {
      return _.zipObject(this.csvHeaders, row.split(","))  
    })
  }
}

module.exports = CSVLoader
