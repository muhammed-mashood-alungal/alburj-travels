// backend/models/todoModel.js
const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
  name: {
    type:String,
    required:true
  },
  destination:{
    type:String,
    required:true
  },
  description:{
    type :String ,
    required :true
  },
  duration: {
    days: {
      type: Number,
      required: true
    },
    nights: {
      type: Number,
      required: true
    }
  },
  images: [String], 
  activities: [String],
  reviews:[{
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer',
    },
    customerName:{
      type:String,
      required: true
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  createdAt:{
    type:Date,
    default: Date.now
  }
 
});

const packages = mongoose.model('packages', packageSchema);

module.exports = packages;
