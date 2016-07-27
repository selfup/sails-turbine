class Merchant {
  constructor(row) {
    this.id          = parseInt(row.id, 10)
    this.name        = row.name
    this.createdAt   = new Date(row.created_at)
    this.updatedAt   = new Date(row.updated_at)
  }
}

module.exports = Merchant
