const router = require('express').Router();
const { auth } = require('../controllers');

// Auth
router.get('/', auth.auth.get);
router.post('/login', auth.login.post);
router.post('/signup', auth.signup.post);


module.exports = router;