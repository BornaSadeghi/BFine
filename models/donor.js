const mongoose = require('mongoose');

const donorSchema = mongoose.Schema({
    name: String,
    email: String,
    phoneNumber: String,
    gender: String,
    DOB: mongoose.Schema.Types.Date,
    address: {
        location: String,
        lat: Number,
        long: Number
    },
    bloodGroup: String,
    GovtID: {
        type: String,
        IDNum: Number
    },
    isUrgentDonor: Boolean,
    donationRecords: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Donation"
        }
    ]
});

module.exports = mongoose.model("Donor", donorSchema);
