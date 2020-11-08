const Joke = require('../../models/Joke');
const Event = require('../../models/Event');

module.exports = async (req, res) => {
  const { id } = req.params;
  const [joke, likes, dislikes] = await Promise.all([
    Joke.findById(id).lean(),
    Event.count({ joke: id, type: 'like' }),
    Event.count({ joke: id, type: 'dislike' }),
  ]);

  return {
    ...joke,
    likes,
    dislikes,
  };
}
