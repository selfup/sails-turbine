const CSVLoader = require('./helpers/csv-loader.js')
const Item      = require('./item.js')
const _         = require('lodash')

class ItemRepo {
  constructor(file) {
    this.all  = []
    this.loadRepo(file)
  }

  loadRepo(file) {
    _.each(new CSVLoader(file).data, row => {
      this.all.push(new Item(row))
    })
  }
}

module.exports = ItemRepo
