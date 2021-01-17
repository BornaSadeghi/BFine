const mongoose = require('mongoose');

const donorSchema = mongoose.Schema({
    name: String,
    phoneNumber: String,
    address: {
        location: String,
        lat: Number,
        long: Number
    },
    bloodType: String,
    isUrgentDonor: Boolean,
    govtId: String
});

module.exports = mongoose.model("Donor", donorSchema);
