const mongoose = require('mongoose');

const receiverSchema = mongoose.Schema({
    name: String,
    email: String,
    phoneNumber: String,
    gender: String,
    DOB: date,
    address: { // for finding nearby banks
        location: String,
        lat: Number,
        long: Number
    },
    bloodGroup: String,
    bank: String, // main bank 
    GovtID: {
        type: String,
        IDNum: Number
    },
    isUrgentDonor: Boolean,
    receptionRecords: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Reception"
        }
    ]
});

module.exports = mongoose.model("Receiver", receiverSchema);
