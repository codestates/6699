const { userAuth } = require('../../middlewares/authorized/userAuth')
const { users, articles } = require('../../models');

module.exports = {
  get: async (req, res) => {
    try {
      // 로그인 인증 검사
      // const userInfo = await userAuth(req, res);
      const { email } = req.body;
      const userInfo = await users.findOne({ where: { email: email }});
      
      const myArticle = await articles.findAll({
        where : { user_id: userInfo.id }
      });
      
      if (myArticle.length === 0) return res.status(200).json({ message: 'There are no article' });
      
      res.status(200).json({ myArticle });
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  }
};