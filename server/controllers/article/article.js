const { articles } = require('../../models');
const { comments } = require('../../models');

module.exports = {
  post: async (req, res) => {
    try {
      // 주의! sayingId는 문자열
      const { sayingId } = req.params;
      // Q. content은 필수일 필요는 없지?
      const { title, content, image, user_id } = req.body;

      // sayingId, title, user_id 중 하나라도 전달되지 않았다면, 다음을 응답한다
      if(!sayingId || !title || !user_id) return res.status(400).json({ message: 'insufficient parameters supplied' });

      // 유저가 같은 게시글을 작성했는지 확인: Q. 꼭 필요할까?!
      // const isRepeated = await articles.findOne({ where: { content, category, user_id }});
      // 유저가 같은 게시글을 작성한 경우, 다음을 응답한다: Q. 꼭 필요할까?!
      // if(isRepeated) return res.status(400).json({ message: 'saying is already posted!' });
      
      // 새로운 게시글이 작성되었다면, articles 테이블에 해당 명언을 저장한다
      await articles.create({ title, content, image, user_id, saying_id: Number(sayingId) });
      res.status(201).json({ message: 'new article is posted!' });

    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  },
  get: async (req, res) => {
    try {
      const { sayingId, articleId } = req.params;
      // sayingId, articleId 중 하나라도 전달되지 않았다면, 다음을 응답한다: Q. 필요한 코드일까?
      if(!sayingId || !articleId) return res.status(400).json({ message: 'insufficient parameters supplied' });
      // articleId와 id가 일치하는 article이 있는지 확인한다
      const articleInfo = await articles.findOne({ where: { id: articleId }});
      // 만약 id가 일치하지 않다면, 다음을 응답한다
      if(!articleInfo) return res.status(400).json({ message: 'no matched article!' });
      // 만약 id가 일치한다면, 해당 article을 전달한다
      else return res.status(200).json({ articleInfo });
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  },
  patch: async (req, res) => {
    try {
      const { sayingId, articleId } = req.params;
      const { title, content, image, saying_id } = req.body;
      // title과 content가 둘다 전달되지 않은 경우, 다음을 응답한다
      if(!title && !content) return res.status(400).json({ message: 'insufficient parameters supplied' });
      // articleId와 일치하는 게시글을 찾는다
      const articleInfo = await articles.findOne({ where: { id: articleId }});
      // 만약 전달된 articleId와 게시물 id가 일치하지 않은 경우, 다음을 응답한다
      if(!articleInfo) return res.status(400).json({ message: 'no matched article!' });
      // 만약 전달된 articleId와 게시물 id가 일치하면, 전달된 parameter를 적용해 게시물 정보를 수정한다
      else {
        // Q. saying_id는 수정할 수 있게 할것인가?!
        await articleInfo.update({ title, content, image, saying_id });
        return res.status(201).json({ message: 'Article Edit Ok!'});
      }
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  },
  delete: async (req, res) => {
    try {

      const { sayingId, articleId } = req.params;
      // 주의! user_id는 문자열
      const { user_id } = req.body;

      // articleId와 user_id 둘 중 하나가 전달되지 않은 경우, 다음을 응답한다
      if(!articleId || !user_id) return res.status(400).json({ message: 'insufficient parameters supplied' });

      const articleInfo = await articles.findOne({ where: {id: articleId, user_id }})

      if(!articleInfo) return res.status(400).json({ message: 'no matched article' })
      else {

        // 해당 article에 좋아요한 기록 삭제 (article_likes)

        // 해당 article에 작성된 댓글들 삭제 (comments)
        comments.destroy({ where: { article_id: articleId }});
        // 해당 article 삭제 (articles)
        articles.destroy({ where: {id: articleId, user_id }})

        return res.status(200).json({ message: 'article is deleted' })
      }
    } catch (err) {
      console.log(err)
      return res.status(500).json({ message: 'Server Error!' });
    }
  }
};