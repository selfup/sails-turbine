const CSVLoader = require('./helpers/csv-loader.js')
const Item      = require('./item.js')
const _         = require('lodash')

class ItemRepo {
  constructor(file) {
    this.data = new CSVLoader(file).data
    this.all  = {}
    this.loadRepo()
  }

  loadRepo() {
    _.each(this.data, (row, index) => {
      this.all[index] = new Item(row)
    })
  }
}

module.exports = ItemRepo
