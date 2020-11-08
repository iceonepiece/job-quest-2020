const Boom = require('boom');
const jwt = require('jsonwebtoken');
const Session = require('../models/Session');

module.exports = async (req, res, next) => {
  try {
    const { accessToken } = req.cookies;

    if (!accessToken) {
      throw Boom.unauthorized('unauthorized');
    }

    const session = await Session.findOne({ accessToken });

    if (!session) {
      throw Boom.unauthorized('unauthorized');
    }

    req.user = jwt.verify(accessToken, 'JUST-A-MOCK-SECRET');


    next()
  } catch (error) {
    next(error)
  }
}
