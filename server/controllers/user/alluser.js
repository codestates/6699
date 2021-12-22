const { userAuth } = require('../../middlewares/authorized/userAuth')
const { users, sayings, saying_likes, articles, article_likes, comments } = require('../../models');
const { Op } = require('sequelize');

module.exports = {
  get: async (req, res) => {
    try {
      // 로그인 인증 검사
      const userInfo = await userAuth(req, res);

      const userAllInfo = await users.findAll({ where: { 
        id: {
          [Op.ne]: userInfo.id
        }}})

      res.status(200).json({ data: { userAllInfo: userAllInfo }, message: "available nickname!"})

    } catch (err) {
      console.log(err)
      return res.status(500).json({ message: 'Server Error!' });
    }
  }
}