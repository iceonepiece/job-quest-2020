const Boom = require('boom');
const Session = require('../../models/Session');

module.exports = async (req, res) => {
  if (!req.user) {
    throw Boom.unauthorized('unauthorized');
  }

  const { accessToken } = req.cookies;

  await Session.deleteMany({
    user: req.user.id,
    accessToken,
  });

  return { ok: true };
}
