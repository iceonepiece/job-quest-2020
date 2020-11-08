const Event = require('../../models/Event');

module.exports = async (req, res) => {
  const { id } = req.params;

  const event = await Event.findOneAndUpdate(
    {
      user: req.user.id,
      joke: id,
    },
    {
      user: req.user.id,
      joke: id,
      type: 'dislike',
    },
    {
      new: true,
      upsert: true,
    },
  );

  return event;
}
