const mongoose = require('mongoose');

const flightSchema = new Schema ({
    Airline : {type:String, required: true, enum: ["United",
    "Southwest", "Delta"]},
    flightNo : {type: Number, required: true, min:10, max:9999},
    departs : { type: Date,
    default: function() {
        return new Date().getFullYear() + 1;
    }},
    airport: {
        type: String, required: true, enum: ["AUS", "DFW", "DEN", "LAX","SAN"]
    },
    destinations:[destinationSchema]
});

const destinationSchema = new Schema ({
    airport: {
        type: String, required: true, enum: ["AUS", "DFW", "DEN", "LAX","SAN"]
    },
    arrival: Date
})

module.exports = mongoose.model('Flight', flightSchema);
