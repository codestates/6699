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
router.get('/:sayingId/article', article.article.get);
router.post('/:sayingId/article', article.article.post);
router.get('/:sayingId/article/:articleId', article.articleId.get);
router.patch('/:sayingId/article/:articleId', article.articleId.patch);
router.delete('/:sayingId/article/:articleId', article.articleId.delete);

// Article Like
router.get('/:sayingId/article/:articleId/like', article.like.get);
router.post('/:sayingId/article/:articleId/like', article.like.post);
router.delete('/:sayingId/article/:articleId/like', article.like.delete);

// Create, Edit, Delete Comment
router.get('/:sayingId/article/:articleId/comment', comment.comment.get);
router.get('/:sayingId/article/:articleId/comment/:commentId/:userId', comment.commenter.get);
router.post('/:sayingId/article/:articleId/comment', comment.comment.post);
router.patch('/:sayingId/article/:articleId/comment/:commentId', comment.comment.patch);
router.delete('/:sayingId/article/:articleId/comment/:commentId', comment.comment.delete);

module.exports = router;