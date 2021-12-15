const router = require('express').Router();
const { saying, post, comment, rank } = require('../controllers');

// Index
router.get('/', (req, res) => res.send('api.dayily6699.co.kr/category'));

// Saying Category
router.get('/all', saying.all.get);
router.get('/health', saying.health.get);
router.get('/study', saying.study.get);
router.get('/economy', saying.economy.get);
router.get('/relationship', saying.relationship.get);
router.get('/love', saying.love.get);

// Create Saying
router.post('/:category', saying.create.post);

// Saying Like
router.get('/:category/like', saying.like.get);
router.post('/:category/like', saying.like.post);
router.delete('/:category/like', saying.like.delete);

// Create, Edit, Delete Post
router.post('/:category/post', post.post.post);
router.patch('/:category/post', post.post.patch);
router.delete('/:category/post', post.post.delete);

// Post Like
router.get('/:category/post/like', post.like.get);
router.post('/:category/post/like', post.like.post);
router.delete('/:category/post/like', post.like.delete);

// Create, Edit, Delete Comment
router.post('/:category/post/comment', comment.comment.post);
router.patch('/:category/post/comment', comment.comment.patch);
router.delete('/:category/post/comment', comment.comment.delete);

// Ranking
router.get('/:category/post/rank/like', rank.like.get);
router.get('/:category/post/rank/like', rank.new.get);

module.exports = router;