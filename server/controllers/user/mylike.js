const { userAuth } = require('../../middlewares/authorized/userAuth')
const { users, sayings, saying_likes, articles } = require('../../models');

module.exports = {
  get: async (req, res) => {
    try {
      // 로그인 인증 검사
      // const userInfo = await userAuth(req, res);
      const { user_id } = req.body;
      const userInfo = await users.findOne({ where: { id: user_id }});
      
      // 요청 쿼리로 category를 받아온다
      const { category } = req.query;

      // 주의!!! 내가 좋아요한 article와 saying으로 코드 수정이 필요함!!! (현재는 내가 쓴 명언 혹은 게시물을 가지고 오고 있음!)
      // 받아온 category 모델을 검색한다
      let filteredLike;

      // *********** 여기서부터 수정!!!! article이 여러개 일 수 있다는 점 ! 배열이라는 점 ! 을 기억하세요~~
      if(category === 'article') {
        filteredLike = await articles.findAll({ where : { user_id: userInfo.id } });
      }
      // 주의!!! 내가 좋아요에서 명언이 default 값이다 (ex. 내가 좋아요 카테고리를 클릭하면 내가 좋아요를 누른 명언이 먼저 나온다)
      else {
        const sayingLikeInfo = await saying_likes.findAll({ where: { user_id: user_id }})
        if(!sayingLikeInfo) return res.status(200).json({ message: 'Empty!' });
        else {
          filteredLike = []

        for(let i = 0; i < sayingLikeInfo.length; i++) {
          let temp = await sayings.findOne({ where: { id: sayingLikeInfo[i].saying_id }})
          filteredLike.push(temp)
          }
        }
      }
      
      if(filteredLike.length === 0) return res.status(200).json({ message: 'Empty!' });
      res.status(200).json({ data: { filteredLike: filteredLike }, message: 'My Like!' });
    } catch (err) {
      console.log(err)
      return res.status(500).json({ message: 'Server Error!' });
    }
  }
};