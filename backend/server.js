const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const error404Handler = require('./middlewares/error404Handler');
const errorHandler = require('./middlewares/errorHandler');

const jokes = require('./routes/jokes');
const users = require('./routes/users');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/jokes', jokes);
app.use('/users', users);
app.use(error404Handler());
app.use(errorHandler());

const start = async () => {
  await mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost/thai-joke-db');
  await app.listen(3000);
}

start();
