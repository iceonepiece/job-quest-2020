const Boom = require('boom');
const Joke = require('../../models/Joke');

module.exports = async (req, res) => {
  const { id } = req.params;

  const joke = await Joke.findById(id);

  if (!joke) {
    throw Boom.notFound('joke_not_found');
  }

  if (req.user.id != joke.user) {
    throw Boom.unauthorized('permission_denied');
  }

  const result = await Joke.deleteOne({ _id: id });

  return result;
}
