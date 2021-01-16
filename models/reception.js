const mongoose = require('mongoose');

const receptionSchema = mongoose.Schema({
    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    },
    bloodBank: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "BloodBank"
    },
    date: Date,
    type: String,
    units: Number,
});

module.exports = mongoose.model("Reception", receptionSchema);
