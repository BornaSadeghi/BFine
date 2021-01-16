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
    IsUrgentDonor: Bool,
    govtId: String
});

module.exports = mongoose.model("Donor", donorSchema);
