const mongoose = require('mongoose');

const bloodBankSchema = mongoose.Schema({
    name: String,
    email: String,
    phoneNumber: String,
    address: {
        location: String,
        lat: Number,
        long: Number
    },
    stock: {
        plasma: {
            A: Number,
            B: Number,
            AB: Number,
            O: Number,
        },
        blood: {
            "A+": Number,
            "B+": Number,
            "AB+": Number,
            "O+": Number,
            "A-": Number,
            "B-": Number,
            "AB-": Number,
            "O-": Number,
        },
    },
    donationRecords: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Donation"
        }
    ],
    distributionRecords: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Reception"
        }
    ]
});

module.exports = mongoose.model("BloodBank", bloodBankSchema);
