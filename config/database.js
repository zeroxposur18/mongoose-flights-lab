const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/flights',
{ useNewUrlParser: true, useCreateIndex: true});

const db = mongoose.connection;

db.on('connected', function() {
    console.log('connected')
});