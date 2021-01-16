require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

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
app.post('/auth', (req, res) => {
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
