const { userAuth } = require('../../middlewares/authorized/userAuth')
const { users, sayings, saying_likes, articles, article_likes } = require('../../models');

module.exports = {
  get: async (req, res) => {
    try {
      // 로그인 인증 검사
      const userInfo = await userAuth(req, res);
      // 요청 쿼리로 category를 받아온다
      const { category } = req.query;

      // 주의!!! 내가 좋아요한 article와 saying으로 코드 수정이 필요함!!! (현재는 내가 쓴 명언 혹은 게시물을 가지고 오고 있음!)
      // 받아온 category 모델을 검색한다
      let filteredLike;

      // 만약 카테고리가 게시물(article)일 때, 다음을 실행한다
      if(category === 'article') {
        // 현재 유저가 좋아요를 누른 게시물 정보가 articleLikeInfo에 담긴다
        articleLikeInfo = await article_likes.findAll({ where : { user_id: userInfo.id } });
        // 만약, 유저가 좋아요를 누른 게시물이 없다면, 다음을 응답한다
        if(articleLikeInfo.length === 0) return res.status(200).json({ message: 'Empty!' })
        // 만약 유저가 좋아요를 누른 게시물이 있다면, 다음을 실행한다
        else {
          filteredLike = []
          // 좋아요를 누른 게시물 각각을, filteredLikt 배열에 담는다
          for(let i = 0; i < articleLikeInfo.length; i++) {
            let filteredArticle = await articles.findOne({ where: { id: articleLikeInfo[i].article_id } })
            filteredLike.push(filteredArticle)
          }
        }
      }
      // 만약 카테고리가 명언(sayings)일 때, 다음을 실행한다 (명언이 default 값이다)
      else {
        // 현재 유저가 좋아요를 누른 명언 정보가 sayingLikeInfo에 담긴다
        const sayingLikeInfo = await saying_likes.findAll({ where: { user_id: userInfo.id } })
        // 만약, 유저가 좋아요를 누른 명언이 없다면, 다음을 응답한다
        if(sayingLikeInfo.length === 0) return res.status(200).json({ message: 'Empty!' });
        // 만약 유저가 좋아요를 누른 게시물이 없다면, 다음을 실행한다
        else {
          filteredLike = []
          // 좋아요를 누른 명언 각각을, filteredLikt 배열에 담는다
          for(let i = 0; i < sayingLikeInfo.length; i++) {
            let filteredSaying = await sayings.findOne({ where: { id: sayingLikeInfo[i].saying_id } })
            filteredLike.push(filteredSaying)
          }
        }
      }
      
      res.status(200).json({ data: { filteredLike: filteredLike }, message: 'My Like!' });
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  }
};