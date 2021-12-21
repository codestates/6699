const { userAuth } = require('../../middlewares/authorized/userAuth')
const { users, sayings, saying_likes, articles, article_likes, comments } = require('../../models');

module.exports = {
  get: async (req, res) => {
    try {
      // 로그인 인증 검사
      const userInfo = await userAuth(req, res);
      const filteredSaying = await sayings.findAll({ where : { user_id: userInfo.id } });
      
      if(filteredSaying.length === 0) return res.status(200).json({ message: 'Empty!' });
      
      res.status(200).json({ data: { filteredSaying: filteredSaying }, message: 'My Saying!' });
    } catch (err) {
      console.log(err)
      return res.status(500).send('Server Error!');
    }
  },
  delete: async (req, res) => {
    try{
      // 로그인 인증 검사
      const userInfo = await userAuth(req, res);
      // params로 받은 sayingId 이 잘못된 요청일 경우 에러메시지 반환
      const { sayingId } = req.params;
      
      if(isNaN(sayingId)) return res.status(400).json({ message: 'Bad Request!' });

      // 명언 정보 확인 후 존재하지 않는 명언일 경우 에레메시지 반환
      const sayingInfo = await sayings.findOne({ where: { id: Number(sayingId) } });
      if(!sayingInfo) return res.status(404).json({ message: 'Not Found!' });

      // 올바른 명언일 경우 params로 받은 sayingId에 종속된 게시글 테이블 검색
      const filteredArticle = await articles.findAll({ where: { saying_id: Number(sayingId) } });

      if(filteredArticle.length === 0) { // 종속된 게시글이 없는 경우
        saying_likes.destroy({ where: { saying_id: Number(sayingId) } });  // 명언 좋아요 삭제
        sayings.destroy({ where: { id: Number(sayingId) } });  // 명언 삭제

        return res.status(200).json({ message: 'Saying Delete Success!' });
      } else {
        // 종속된 게시글이 있는 경우, 하위 테이블 역순으로 삭제
        for(let i = 0; i < filteredArticle.length; i++) {
          comments.destroy({ where: { article_id: filteredArticle[i].id } });  // 댓글 삭제
          article_likes.destroy({ where: { article_id: filteredArticle[i].id } });  // 게시물 좋아요 삭제
        }
        articles.destroy({ where: { saying_id: Number(sayingId) } });  // 게시물 삭제
        saying_likes.destroy({ where: { saying_id: Number(sayingId) } });  // 명언 좋아요 삭제
        sayings.destroy({ where: { id: Number(sayingId) } });  // 명언 삭제
        
        res.status(200).json({ message: 'Saying Delete Success!' });
      }
    } catch (err) {
      return res.status(500).send('Server Error!');
    }
  }
};
