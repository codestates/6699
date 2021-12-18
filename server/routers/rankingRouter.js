const router = require('express').Router();
const { ranking } = require('../controllers');


// Ranking
router.get('/like', ranking.like.get);
router.get('/new', ranking.new.get);

module.exports = router;