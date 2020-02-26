const mongoose = require('mongoose');

const flightSchema = new Schema ({
    Airline : {type:String, required: true, enum: ["United",
    "Southwest", "Delta"]},
    flightNo : {type: Number, required: true, min:10, max:9999},
    departs : { type: Date,
    default: function() {
        return new Date().getFullYear() + 1;
    }}
});

module.exports = mongoose.model('Flight', flightSchema);
