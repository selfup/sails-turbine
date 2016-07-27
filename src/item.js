class Item {
  constructor(row) {
    this.id          = parseInt(row.id, 10)
    this.name        = row.name
    this.description = row.description
    this.unitPrice   = parseFloat((row.unit_price / 100), 10)
    this.merchantId  = parseInt(row.merchant_id, 10)
    this.createdAt   = new Date(row.created_at)
    this.updatedAt   = new Date(row.updated_at)
  }
}

module.exports = Item
