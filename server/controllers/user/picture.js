const { userAuth } = require('../../middlewares/authorized/userAuth')
const { users, sayings, saying_likes, articles, article_likes, comments } = require('../../models');

module.exports = {
  post: async (req, res) => {
    try {
      // 로그인 인증 검사
      const userInfo = await userAuth(req, res);
      // 클라이언트에서 전달받은 이미지 url 정보
      const { image } = req.body;
      // 만약 전달된 이미지 url 정보가 없으면, 다음을 응답한다
      if(!image) return res.status(400).json({ message: 'Bad Request!'})
      // 현재 유저를 찾는다
      const filteredUser = await users.findOne({ where: { id: userInfo.id } });
      // 현재 유저의 이미지(프로필 사진) 정보를 저장한다
      await filteredUser.update({
        image: image
      });
      // 요청 성공 응답!
      return res.status(201).json({ message: 'Image Save!' });
    } catch (err) {
      console.log(err)
      return res.status(500).json({ message: 'Server Error!' });
    }
  }
};