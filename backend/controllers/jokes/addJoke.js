const Joke = require('../../models/Joke');

module.exports = async (req, res) => {
  const { title, content } = req.body;
  const { id } = req.user;
  
  const joke = await Joke.create({
    user: id,
    title,
    content,
  });

  return joke;
}
