const express = require('express');
// const artistController = require('../controllers/ArtistController');
const router = express.Router();
const tickerController = require('../controllers/tickerController')

router.get('/api/getAllPosts', tickerController.tickerGetAllPosts)
router.get('/api/getPost/:id', tickerController.tickerGetPost)
router.get('/api/ticker/:tickerId', tickerController.tickerGetPosts)
router.post('/api/ticker/createPost', tickerController.tickerCreatePost)
router.post('/api/ticker/createComment', tickerController.tickerCreateComment)

router.get('/api/value/:id', tickerController.getValue)


module.exports = router;