const mongoose = require('mongoose');

const urgentRequestSchema = mongoose.Schema({
    email: String,
    phoneNumber: String,
    bloodGroupRequired: String,
    status: String,
    nearestBloodBanks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "BloodBank"
        }
    ]
});

module.exports = mongoose.model("UrgentRequest", urgentRequestSchema);
