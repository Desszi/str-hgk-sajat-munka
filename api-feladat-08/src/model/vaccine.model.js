
const mongoose = require('mongoose');

const VaccineSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    efficiency: {
        type: Number,
        min: 1,
        max: 100,
      },
}, {
    timeStamps: true
});

module.exports = mongoose.model('Vaccine', VaccineSchema);