require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Donor = require('/models/donor.js');

const PORT = 5000;
const app = express();
const mongo_url = process.env.DB_URL;


mongoose.connect(mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to database.")
})

app.get('/', (req, res) => {
    res.send('base url');
})

// Authentication endpoint

/**
 * Compare login credentials to database credentials, and if they match, allow access
 */
app.post('/auth', bodyParser.json(), (req, res) => {
    console.log(req.body);
    res.send('/auth is hit');
})

// User creation endpoints

/**
 * Create a new donor user and add it to the database.
 */
app.post('/newuser-donor', bodyParser.json(), (req, res) => {
    const user = req.body;
    console.log(user);
    res.send('/newuser-donor is hit');
})

/**
 * Create a new receiver user and add it to the database.
 */
app.post('/newuser-receiver', bodyParser.json(), (req, res) => {
    const user = req.body;
    console.log(user);
    res.send('/newuser-reciever is hit');
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
