const ItemRepo = require('./item-repo.js')

class SalesEngine {
  constructor(filesObject) {
    this.items = new ItemRepo(filesObject.items)
  }
}

module.exports = SalesEngine
