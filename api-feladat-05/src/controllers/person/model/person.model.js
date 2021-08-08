const mongoose = require('mongoose');

const PersonSchema = mongoose.Schema({
    fistName: String,
    lastName: String,
    vaccine: String,
}, {
    timeStamps: true
});

module.exports = mongoose.model('Person', PersonSchema);