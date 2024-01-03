const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: String,
  serie: String,
  media: Number,
})

const Model = mongoose.model('students', schema)

module.exports = Model