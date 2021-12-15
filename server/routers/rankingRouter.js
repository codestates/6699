const router = require('express').Router();
const { ranking } = require('../controllers');

// Index
router.get('/', (req, res) => res.send('api.dayily6699.co.kr/ranking'));

// Ranking
router.get('/like', ranking.like.get);
router.get('/new', ranking.new.get);

module.exports = router;