const mongoose = require('mongoose');

const flightSchema = new Schema ({
    Airline : String,
    flightNo : Number,
    departs : { type: Number,
    default: function() {
        return new Date().getFullYear();
    }}
});

module.exports = mongoose.model('Flight', flightSchema);
