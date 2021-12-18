const { userAuth } = require('../../middlewares/authorized/userAuth')
const { users, articles, article_likes, comments } = require('../../models');

module.exports = {
  get: async (req, res) => {
    try {
      // 메인 페이지에서 (좋아요순 / 최신순) 선택했을때... default는 좋아요순!
      const { sayingId } = req.params;
      // order: 좋아요순(like) 혹은 최신순(new)
      const { order } = req.query;
      // 만약 좋아요순 정렬이라면, 다음을 실행한다 (default)
      if(order === 'like') {
        const articleInfo = await articles.findAll({ where: { saying_id: sayingId }, order: [['total_like', 'DESC'], ['updatedAt', 'DESC']] })
        res.status(200).json({ data: { articleInfo: articleInfo }, message: '게시물 좋아요순!' });
      } 
      // 만약 최신순 정렬이라면, 다음을 실행한다
      else if(order === 'new') {
        const articleInfo = await articles.findAll({ where: { saying_id: sayingId }, order: [['updatedAt', 'DESC'], ['total_like', 'DESC']] })
        res.status(200).json({ data: { articleInfo: articleInfo }, message: '게시물 최신순!' });
      } 
      // order에 아무것도 담겨있지 않았다면, 다음을 실행한다
      else {
        res.status(400).json({ message: 'Bad Request!' });
      }
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  },
  post: async (req, res) => {
    try {
      // 주의! cookie!!!
      // 주의! sayingId는 문자열
      const { sayingId } = req.params;
      // Q. content은 필수일 필요는 없지? => 필수가 아니어도 OK
      const { title, content, image, user_id } = req.body;

      // sayingId, title, user_id 중 하나라도 전달되지 않았다면, 다음을 응답한다
      if(!sayingId || !title || !user_id) return res.status(400).json({ message: 'Bad Request!' });
      
      // 새로운 게시글이 작성되었다면, articles 테이블에 해당 명언을 저장한다
      const articleInfo = await articles.create({ title, content, image, user_id, saying_id: Number(sayingId) });
      res.status(201).json({ data: { articleInfo: articleInfo }, message: 'Create Article!' });
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  }
};