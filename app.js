require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
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
    console.log(req.body);
    res.send('/auth is hit');
})

// User creation endpoint
app.post('/newuser', (req, res) => {
    console.log(req.body);
    res.send('/newuser is hit');
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
