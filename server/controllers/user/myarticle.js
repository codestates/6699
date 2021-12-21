const { userAuth } = require('../../middlewares/authorized/userAuth')
const { users, articles, sayings } = require('../../models');

module.exports = {
  get: async (req, res) => {
    try {
      // 로그인 인증 검사
      const userInfo = await userAuth(req, res);
      const filteredArticle = await articles.findAll({ 
        include : [{
          model: sayings,
          attributes: ['category']
        }],
        where : { user_id: userInfo.id } });
      
      if(filteredArticle.length === 0) return res.status(200).json({ message: 'No Article!' });
      
      res.status(200).json({ data: { filteredArticle: filteredArticle }, message: 'My Article!' });
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  }
};