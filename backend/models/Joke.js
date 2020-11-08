const mongoose = require('mongoose');

const jokeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  title: String,
  content: String,
});

module.exports = mongoose.model('Joke', jokeSchema);
