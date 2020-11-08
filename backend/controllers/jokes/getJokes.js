const Joke = require('../../models/Joke');

module.exports = async (req, res) => {
  const jokes = await Joke.find().populate('events').exec();

  return jokes;
}
