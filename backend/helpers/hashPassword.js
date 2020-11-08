const crypto = require('crypto');
const argon2 = require('argon2');

module.exports = async password => {
  const salt = crypto.randomBytes(32);
  const hashedPassword = await argon2.hash(password, { salt });
  return hashedPassword;
}
