const router = require('express').Router();
const { saying, article, comment } = require('../controllers');

// Select Saying Category
router.get('/', saying.category.get);
// Create Saying
router.post('/', saying.category.post);

// Select Saying, 특정 명언 조회하기
router.get('/:sayingId', saying.saying.get);

// Saying Like
router.get('/:sayingId/like', saying.like.get);
router.post('/:sayingId/like', saying.like.post);
router.delete('/:sayingId/like', saying.like.delete);

// Create, Select, Edit, Delete Article
router.post('/:sayingId/article', article.article.post);
router.get('/:sayingId/article/:articleId', article.article.get);
router.patch('/:sayingId/article/:articleId', article.article.patch);
router.delete('/:sayingId/article/:articleId', article.article.delete);

// Article Like
router.get('/:sayingId/article/:articleId/like', article.like.get);
router.post('/:sayingId/article/:articleId/like', article.like.post);
router.delete('/:sayingId/article/:articleId/like', article.like.delete);

// Create, Edit, Delete Comment
router.post('/:sayingId/article/:articleId/comment', comment.comment.post);
router.patch('/:sayingId/article/:articleId/comment/:commentId', comment.comment.patch);
router.delete('/:sayingId/article/:articleId/comment/:commentId', comment.comment.delete);

module.exports = router;