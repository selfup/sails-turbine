const CSVLoader = require('./helpers/csv-loader')
const Merchant  = require('./merchant')
const _         = require('lodash')

class MerchantRepo {
  constructor(file) {
    this.data = new CSVLoader(file).data
    this.all  = {}
    this.loadRepo()
  }

  loadRepo() {
    _.each(this.data, (row, index) => {
      this.all[index] = new Merchant(row)
    })
  }
}

module.exports = MerchantRepo
