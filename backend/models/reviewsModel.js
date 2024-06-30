const mongoose = require('mongoose')

const reviewsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  }

})
const Reviews = mongoose.model('Reviews', reviewsSchema)
module.exports = Reviews