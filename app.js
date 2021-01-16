require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
<<<<<<< HEAD
const bodyParser = require('body-parser')
=======
const bodyParser = require('body-parser');

>>>>>>> 6b2c58a614448d7a7b49c48f497b852a7dca0942
const PORT = 5000;
const app = express();
///const mongo_url = process.env.DB_URL;
const auth = require('./services/auth');
app.use(bodyParser.json())

/*mongoose.connect(mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to database.")
})*/

app.get('/', (req, res) => {
    res.send('base url');
})

<<<<<<< HEAD
// Authentication endpoints
app.post('/auth/init', async(req, res) => {
    console.log(req.body);
    let result = await auth.init(req.body.number);
    res.send(result);
})

app.post('/auth/establish', async(req, res) => {
    console.log(req.body);
    let result = await auth.establish(req.body.request_id, req.body.otp);
    res.send(result);
})

app.post('/auth/purge', (req, res) => {
=======
// Authentication endpoint

/**
 * Compare login credentials to database credentials, and if they match, allow access
 */
app.post('/auth', bodyParser.json(), (req, res) => {
>>>>>>> 6b2c58a614448d7a7b49c48f497b852a7dca0942
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
