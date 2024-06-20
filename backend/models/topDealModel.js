const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const topDealSchema = new Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    airline: {
        type: String,
        required: true
    },
    baggage: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const TopDeals = mongoose.model('TopDeals', topDealSchema);
module.exports = TopDeals;
