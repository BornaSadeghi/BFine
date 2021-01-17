const mongoose = require('mongoose');

const urgentRequestSchema = mongoose.Schema({
    bloodBankId: String,
    status: String,
    bloodType: String,
    unitsNeeded: Number,
    attempt: Number,
    date: mongoose.Schema.Types.Date
});

module.exports = mongoose.model("UrgentRequest", urgentRequestSchema);
