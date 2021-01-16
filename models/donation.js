const mongoose = require('mongoose');

const donationSchema = mongoose.Schema({
    donor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Donor"
    },
    bloodBank: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "BloodBank"
    },
    date: Date,
    type: String,
    stage: String,
    message: String
});

module.exports = mongoose.model("Donation", donationSchema);
