// backend/models/todoModel.js
const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  days: { type: Number },
  nights: { type: Number },
  activities: [String],
  createdAt: {
    type: Date,
    default: Date.now
  }

});

const packages = mongoose.model('packages', packageSchema);

module.exports = packages;
