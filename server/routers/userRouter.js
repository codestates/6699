const router = require('express').Router();
const { user } = require('../controllers');

// Index
router.get('/', (req, res) => res.send('api.dayily6699.co.kr/user'));

// Mypage
router.get('/me', user.me.get);
router.patch('/me', user.me.patch);
router.delete('/me', user.me.delete);

// Picture
router.post('/picture', user.picture.post);

// Logout
router.post('/logout', user.logout.post);

// Mysaying
router.get('/mysaying', user.mysaying.get);
router.delete('/mysaying', user.mysaying.delete);

// Mypost
router.get('/mypost', user.mypost.get);

// Mycomment
router.get('/mycomment', user.mycomment.get);

// Mylike
router.get('/mylike', user.mylike.get);

module.exports = router;