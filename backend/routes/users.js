const { Router } = require('express');
const authentication = require('../middlewares/authentication');
const {
  register,
  login,
  logout,
} = require('../controllers/users');
const asyncHandler = require('../asyncHandler');

const router = Router();

router.post('/', asyncHandler(register));
router.post('/login', asyncHandler(login));
router.post('/logout', authentication, asyncHandler(logout));

module.exports = router
