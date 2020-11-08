const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    unique: true,
  },
  accessToken: String,
});

module.exports = mongoose.model('Session', sessionSchema);
