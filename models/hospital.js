const mongoose = require('mongoose');

const hospitalSchema = mongoose.Schema({
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
    receptionRecords: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Reception"
        }
    ]
});

module.exports = mongoose.model("Hospital", hospitalSchema);
