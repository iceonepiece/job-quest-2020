const User = require('../../models/User');
const { hashPassword } = require('../../helpers');

module.exports = async (req, res) => {
  const { username, password } = req.body;

  const hashedPassword = await hashPassword(password);

  const user = await User.create({
    username,
    password: hashedPassword,
  })

  return user;
}
