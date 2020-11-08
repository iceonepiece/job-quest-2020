const { Router } = require('express');
const authentication = require('../middlewares/authentication');
const {
  getJokes,
  getJokeById,
  addJoke,
  likeJoke,
  dislikeJoke,
  deleteJoke,
} = require('../controllers/jokes');
const asyncHandler = require('../asyncHandler');

const router = Router();
router.get('/', asyncHandler(getJokes));
router.get('/:id', asyncHandler(getJokeById));
router.post('/', authentication, asyncHandler(addJoke));
router.post('/:id/like', authentication, asyncHandler(likeJoke));
router.post('/:id/dislike', authentication, asyncHandler(dislikeJoke));
router.delete('/:id', authentication, asyncHandler(deleteJoke));

module.exports = router;
