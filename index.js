const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//Import routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

dotenv.config();

//connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true },
    () => console.log('Connected to DB!')
);

//middleware
app.use(express.json());

//Route middleware
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.listen(3000, () => console.log('Server up and running'));