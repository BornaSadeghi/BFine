const mongoose = require('mongoose');

const urgentRequestSchema = mongoose.Schema({
    id: String,
    status: String,
    bloodType: String,
    unitsNeeded: Number,
    date: mongoose.Schema.Types.Date
});

module.exports = mongoose.model("UrgentRequest", urgentRequestSchema);
