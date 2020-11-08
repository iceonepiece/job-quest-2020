const jwt = require('jsonwebtoken');

module.exports = (content, secret = 'JUST-A-MOCK-SECRET') => {
  return jwt.sign(content, secret);
}
