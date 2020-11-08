const argon2 = require('argon2');
const Boom = require('boom');

const User = require('../../models/User');
const Session = require('../../models/Session');
const { generateAccessToken } = require('../../helpers');

module.exports = async (req, res) => {
  if (req.user) {
    throw Boom.badRequest('already_logged_in');
  }

  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user) {
    throw Boom.notFound('user_not_found');
  }

  const isCorrect = await argon2.verify(user.password, password);

  if (!isCorrect) {
    throw Boom.unauthorized('incorrect_password');
  }

  await Session.deleteMany({ user: user.id });

  const accessToken = generateAccessToken({
    id: user.id,
    username: user.username,
  });

  await Session.create({
    user: user.id,
    accessToken,
  });

  res.cookie('accessToken', accessToken);

  return {
    ok: true,
    accessToken,
  };
}
