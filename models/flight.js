const mongoose = require('mongoose');

const flightSchema = new Schema ({
    Airline : String,
    flightNo : Number,
    departs : { type: Number,
    default: function() {
        return new Date().getFullYear() + 1;
    }}
});

module.exports = mongoose.model('Flight', flightSchema);
