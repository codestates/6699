const { userAuth } = require('../../middlewares/authorized/userAuth')
const { articles, article_likes } = require('../../models');

module.exports = {
  get: async (req, res) => {
    try {
      // Q. sayingId 가져와야할까?
      const { sayingId, articleId } = req.params;
      const { user_id } = req.body;
      // articleId, user_id 중 하나라도 전달되지 않았다면, 다음을 응답한다
      if(!articleId || !user_id) return res.status(400).json({ message: 'Bad Request!' });
      // 유저가 해당 게시글에 좋아요를 눌렀는지 확인
      const articleLikeInfo = await article_likes.findOne({ where: { user_id: user_id, article_id: Number(articleId) }});
      // 만약 유저가 해당 게시글에 좋아요를 누르지 않았다면, 다음을 응답한다.
      if(!articleLikeInfo) return res.status(200).json({ state: false, message: 'No Like!' });
      // 만약 유저가 게시글에 좋아요를 눌렀다면, 다음을 응답한다.
      else return res.status(200).json({ state: true, message: 'Yes Like!' });
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
      if(!articleId || !user_id) return res.status(400).json({ message: 'Bad Request!' });
       // 유저가 해당 게시글에 좋아요를 눌렀는지 확인
      const articleLikeInfo = await article_likes.findOne({ where: { user_id: user_id, article_id: Number(articleId) }})
      // 이미 유저가 게시물에 좋아요를 눌렀다면, 다음을 응답한다
      if(articleLikeInfo) return res.status(409).json({ message: 'Already Like It!'})
      // 만약 유저가 게시물에 좋아요를 누르지 않았다면, 해당 게시물에 total_like 수에 +1 한다
      // article_likes 테이블에 user_id와 article_id 정보를 담은 행을 생성한다
      else {
        const articleInfo = await articles.findOne({ where: { id: Number(articleId) } });
        let plusTotalLike = articleInfo.total_like + 1;
        await articleInfo.update({ total_like: plusTotalLike });
        await article_likes.create({ user_id: user_id, article_id: Number(articleId) });

        return res.status(200).json({ data: { articleInfo: articleInfo }, message: 'Like It!' });
      }
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  },
  delete: async (req, res) => {
    try {
      // 주의! delete 유저권한 확인 코드 필요!!!
      // Q. sayingId 가져와야할까?
      const { sayingId, articleId } = req.params;
      // 주의! user_id는 문자열
      const { user_id } = req.body;
      // articleId, user_id 중 하나라도 전달되지 않았다면, 다음을 응답한다
      if(!articleId || !user_id) return res.status(400).json({ message: 'Bad Request!' });
      // 유저가 게시물에 좋아요를 눌렀는지 확인한다
      const articleLikeInfo = await article_likes.findOne({ where: { user_id: user_id, article_id: Number(articleId) }})
      // 만약 유저가 게시물에 좋아요를 눌렀었다면, 해당 게시물에 total_like에 수를 -1 한다
      // article_likes 테이블에서 user_id와 article_id와 일치한 행을 삭제한다
      if(articleLikeInfo) {
        const articleInfo = await articles.findOne({ where: { id: Number(articleId) } });
        let minusTotalLike = articleInfo.total_like - 1;
        await articleInfo.update({ total_like: minusTotalLike });

        article_likes.destroy({ where: { user_id: user_id, article_id: Number(articleId) }});

        return res.status(200).json({ message: 'No More Like It!' });
      } 
      else {
        return res.status(400).json({ message: 'Bad Request!' });
      }
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  }
};

