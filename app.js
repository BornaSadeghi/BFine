require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const PORT = 5000;
const app = express();

const Donor = require('./models/donor.js');
const BloodBank = require('./models/bloodBank');

const mongo_url = process.env.DB_URL;
const auth = require('./services/auth');
const donor = require('./models/donor.js');

app.use(bodyParser.json())

mongoose.connect(mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to database.")
})

app.get('/', (req, res) => {
    res.send('base url');
})

// POST

/**
 * Takes the mobile number and and responds with a verification code, sent
 * to the user through SMS.
 */
app.post('/auth/init', async(req, res) => {
    let result = await auth.init(req.body.phoneNumber);
    res.send(result);
})

/**
 * Takes verification code and phone number, responds with session id and if user already exists
 * (yes/no)
 * 
 * Takes:
 * {
 *  phoneNumber
 *  request_id
 *  verificationCode (otp)
 *  type
 * }
 * 
 * Responds with:
 * {
 *  res
 *  exists
 *  sessionId
 * }
 * 
 */
app.post('/auth/establish', async(req, res) => {
    let result = await auth.establish(req.body.request_id, req.body.otp, req.body.phoneNumber, req.body.type);
    
    res.send(result);
})

/**
 * Takes an object with donor fields, updates donor in database, responds true or false
 */
app.post('/updateDonorProfile', bodyParser.json(), async (req, res) => {
    console.log(req.body);

    const donor = await Donor.findOneAndUpdate({ phoneNumber: req.body.phoneNumber }, {
        name: req.body.name,
        // TODO use gmaps api to find lat and long of address
        address: {
            location: req.body.address,
            lat: 0, // temporary
            long: 0
        },
        bloodType: req.body.bloodType,
        isUrgentDonor: req.body.isUrgentDonor,
        govtId: req.body.govtId
    }, {
        useFindAndModify: false
    })

    res.send(`updated donor profile: ${donor}`);
})

/**
 * Takes bank stock object, updates bank in database, responds true or false
 */
app.post('/updateBankStock', bodyParser.json(), async (req, res) => {
    console.log(req.body);

    const bloodBank = await BloodBank.findOneAndUpdate({ officeNumber: req.body.officeNumber }, {
        stock: {
            plasma: {
                A: req.body.stock.plasma.A,
                B: req.body.stock.plasma.B,
                AB: req.body.stock.plasma.AB,
                O: req.body.stock.plasma.O,
            },
            blood: {
                'A+': req.body.stock.blood['A+'],
                'B+': req.body.stock.blood['B+'],
                'AB+': req.body.stock.blood['AB+'],
                'O+': req.body.stock.blood['O+'],
                'A-': req.body.stock.blood['A-'],
                'B-': req.body.stock.blood['B-'],
                'AB-': req.body.stock.blood['AB-'],
                'O-': req.body.stock.blood['O-'], 
            } 
        }  
    }, {
        useFindAndModify: false
    })

    res.send(`updated bank stock for bank: ${bloodBank}`);
})

/**
 * Takes lat and long of donor, responds with best locations by priority (distance and stock)
 */
app.post('/search', bodyParser.json(), (req, res) => {
    console.log(req.body);
    res.send('/search is hit')
})

/**
 * Takes UrgentRequest object, returns true or false
 */
app.post('/urgent/make', bodyParser.json(), (req, res) => {
    console.log(req.body);
    res.send('/updateBankStock is hit')
})

/**
 * Takes session ID, returns true/false depending on whether session id is valid
 */
app.post('/checkLoggedIn', bodyParser.json(), (req, res) => {
    res.send(auth.verifySession(req.body.sessionId))
})

/**
 * Takes session ID, destroys session record in database.
 */
app.post('/logout', bodyParser.json(), (req, res) => {
    res.send(auth.purgeSession(req.body.sessionId))
})

// GET

app.get('/urgent/details/:id', (req, res) => {
    console.log(req.params);
    res.send('/urgent/details/<id> is hit')
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
