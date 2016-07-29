const CSVLoader = require('./../helpers/csv-loader')
const Merchant  = require('./merchant')
const _         = require('lodash')

class MerchantRepo {
  constructor(file) {
    this.all = []
    this.loadRepo(file)
  }

  loadRepo(file) {
    _.each(new CSVLoader(file).data, (row, index) => {
      this.all.push(new Merchant(row))
    })
  }
}

module.exports = MerchantRepo
