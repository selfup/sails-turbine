const ItemRepo = require('./item-repo')
const MerchantRepo = require('./merchant-repo')

class SalesEngine {
  constructor(filesObject) {
    this.items = new ItemRepo(filesObject[0])
    this.merchants = new MerchantRepo(filesObject[1])
  }
}

module.exports = SalesEngine
