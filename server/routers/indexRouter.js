const router = require('express').Router();
const { auth } = require('../controllers');

// Index
router.get('/', (req, res) => res.send('api.dayily6699.co.kr'));

// Auth
router.get('/auth', auth.auth.get);
router.post('/login', auth.login.post);
router.post('/signup', auth.signup.post);

module.exports = router;