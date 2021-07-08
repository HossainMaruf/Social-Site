const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// some routes
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const {PORT, MONGO_URL} = require('./config.js');

mongoose.connect(MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('Connected');
});

// bodyParser Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// API Middleware
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
