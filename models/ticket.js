const mongoose = require('mongoose');

const ticketSchema = new ticketSchema({
    seat : {type: String},
    price :{type: Number, min: 0},
    flight : {type: ObjectId, ref: 'Flight'}
});