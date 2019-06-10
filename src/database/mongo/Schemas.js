const { Schema } = require('mongoose')

module.exports = {
  // User Schema
  User: new Schema({
    _id: String,
    blacklisted: { type: Boolean, default: false },
    accounts: { type: Array, default: [] }
  }),

  // Guild Schema
  Guild: new Schema({
    _id: String,
    prefix: { type: String, default: process.env.PREFIX }
  })
}
