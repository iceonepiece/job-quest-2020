const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  type: { type: String, enum : ['like', 'dislike'] },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  joke: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Joke',
  },
});

eventSchema.index({ user: 1, joke: 1 }, { unique: true });

module.exports = mongoose.model('Event', eventSchema);
