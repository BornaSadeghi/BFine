require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Donor = require('./models/Donor.js');

const PORT = 5000;
const app = express();
const mongo_url = process.env.DB_URL;
const auth = require('./services/auth');
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
 * Takes the mobile number and user type (donor/bloodbank) and responds with a verification code, sent
 * to the user through SMS.
 * (Maybe also send the entire donor?)
 */
app.post('/auth/init', async(req, res) => {
    console.log(req.body);
    let result = await auth.init(req.body.number);
    res.send(result);
})

/**
 * Takes verification code and phone number, responds with session id and if user is already registered
 * (yes/no)
 */
app.post('/auth/establish', async(req, res) => {
    console.log(req.body);
    let result = await auth.establish(req.body.request_id, req.body.otp);
    res.send(result);
})

/**
 * Takes an object with donor fields, updates donor in database, responds true or false
 */
app.post('/updateDonorProfile', bodyParser.json(), (req, res) => {
    console.log(req.body);
    res.send('/updateDonorProfile is hit');
})

/**
 * Takes bank stock object, updates bank in database, responds true or false
 */
app.post('/updateBankStock', bodyParser.json(), (req, res) => {
    console.log(req.body);
    res.send('/updateBankStock is hit')
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

// GET

app.get('/urgent/details/:id', (req, res) => {
    console.log(req.params);
    res.send('/urgent/details/<id> is hit')
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
