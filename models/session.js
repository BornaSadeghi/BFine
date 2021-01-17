const mongoose = require('mongoose');

const sessionSchema = mongoose.Schema({
    phoneNumber: String,
    type: String,
    timestamp: Date
});

module.exports = mongoose.model("session", sessionSchema);
