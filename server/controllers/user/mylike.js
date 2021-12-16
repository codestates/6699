const { userAuth } = require('../../middlewares/authorized/userAuth')
const { users, sayings, articles } = require('../../models');

module.exports = {
  get: async (req, res) => {
    try {
      // 로그인 인증 검사
      // const userInfo = await userAuth(req, res);
      const { email } = req.body;
      const userInfo = await users.findOne({ where: { email: email }});
      
      // 요청 쿼리로 category를 받아온다
      const { category } = req.query;

      // 받아온 category 모델을 검색한다
      let myLikes;
      if (category === 'sayings'){
        myLikes = await sayings.findAll({ where : { user_id: userInfo.id } });
      } else {
        myLikes = await articles.findAll({ where : { user_id: userInfo.id } });
      }
      
      if (myLikes.length === 0) return res.status(200).json({ message: 'There are no Likes' });
      res.status(200).json({ myLikes });

    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Server Error!' });
    }
  }
};