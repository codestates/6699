const { articles } = require('../../models');
const { article_likes } = require('../../models');

module.exports = {
  get: async (req, res) => {
    try {
      // Q. sayingId 가져와야할까?
      const { sayingId, articleId } = req.params;
      // user_id는 문자열
      const { user_id } = req.body;
      // articleId, user_id 중 하나라도 전달되지 않았다면, 다음을 응답한다
      if(!articleId || !user_id) return res.status(400).json({ message: 'insufficient parameters supplied' });
      // 유저가 해당 게시글에 좋아요를 눌렀는지 확인
      const articleLikeInfo = await article_likes.findOne({ where: { user_id: Number(user_id), article_id: articleId }});
      // 만약 유저가 해당 게시글에 좋아요를 누르지 않았다면, 다음을 응답한다.
      if(!articleLikeInfo) return res.status(200).json({ state: false, message: 'you did not like it before!' });
      // 만약 유저가 게시글에 좋아요를 눌렀다면, 다음을 응답한다.
      else return res.status(200).json({ state: true, message: 'you liked it!' });
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  },
  post: async (req, res) => {
    try {
      // Q. sayingId 가져와야할까?
      const { sayingId, articleId } = req.params;
      // 주의! user_id는 문자열
      const { user_id } = req.body;
      // articleId, user_id 중 하나라도 전달되지 않았다면, 다음을 응답한다
      if(!articleId || !user_id) return res.status(400).json({ message: 'insufficient parameters supplied' });
       // 유저가 해당 게시글에 좋아요를 눌렀는지 확인
      const articleLikeInfo = await article_likes.findOne({ where: { user_id: Number(user_id), article_id: articleId }})
      // 이미 유저가 게시물에 좋아요를 눌렀다면, 다음을 응답한다
      if(articleLikeInfo) return res.status(400).json({ message: 'you already liked it!'})
      // 만약 유저가 게시물에 좋아요를 누르지 않았다면, 해당 게시물에 total_like 수에 +1 한다
      // article_likes 테이블에 user_id와 article_id 정보를 담은 행을 생성한다
      else {
        const articleInfo = await articles.findOne({ where: { id: articleId } });
        let plusTotalLike = articleInfo.total_like + 1;
        await articleInfo.update({ total_like: plusTotalLike });
        await article_likes.create({ user_id:Number(user_id), article_id: articleId });

        return res.status(201).json({ message: 'like it!'});
      }
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  },
  delete: async (req, res) => {
    try {
      // Q. sayingId 가져와야할까?
      const { sayingId, articleId } = req.params;
      // 주의! user_id는 문자열
      const { user_id } = req.body;
      // articleId, user_id 중 하나라도 전달되지 않았다면, 다음을 응답한다
      if(!articleId || !user_id) return res.status(400).json({ message: 'insufficient parameters supplied' });
      // 유저가 게시물에 좋아요를 눌렀는지 확인한다
      const articleLikeInfo = await article_likes.findOne({ where: { user_id: Number(user_id), article_id: articleId }})
      // 만약 유저가 게시물에 좋아요를 눌렀었다면, 해당 게시물에 total_like에 수를 -1 한다
      // article_likes 테이블에서 user_id와 article_id와 일치한 행을 삭제한다
      if(articleLikeInfo) {
        const articleInfo = await articles.findOne({ where: { id: articleId } });
        let minusTotalLike = articleInfo.total_like - 1;
        await articleInfo.update({ total_like: minusTotalLike });

        article_likes.destroy({ where: { user_id: Number(user_id), article_id: articleId }});

        return res.status(200).json({ message: 'no more like it!'});
      } 
      else {
        return res.status(400).json({ message: 'invalid request'});
      }
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  }
};

