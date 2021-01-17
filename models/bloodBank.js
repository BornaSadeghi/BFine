const mongoose = require('mongoose');

const bloodBankSchema = mongoose.Schema({
    name: String, 
    helplineNumber: String, // for public search result    
    phoneNumber: String, // for login 
    address: {
        address: String,
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
            'A+': Number,
            'B+': Number,
            'AB+': Number,
            'O+': Number,
            'A-': Number,
            'B-': Number,
            'AB-': Number,
            'O-': Number, 
        } 
    }     
});

module.exports = mongoose.model("BloodBank", bloodBankSchema);
