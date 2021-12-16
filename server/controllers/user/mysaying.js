const { userAuth } = require('../../middlewares/authorized/userAuth')
const { users, sayings } = require('../../models');

module.exports = {
  get: async (req, res) => {
    try {
      // 로그인 인증 검사
      // const userInfo = await userAuth(req, res);
      const { email } = req.body;
      const userInfo = await users.findOne({ where: { email: email }});
      
      const mySaying = await sayings.findAll({
        where : { user_id: userInfo.id }
      });
      
      if (mySaying.length === 0) return res.status(200).json({ message: 'There are no saying' });
      
      res.status(200).json({ mySaying });
    } catch (err) {
      return res.status(500).send('Error!');
    }
  },
  delete: async (req, res) => {
    try{
      // 로그인 인증 검사
      // const userInfo = await userAuth(req, res);
      const { email, sayingId } = req.body;
      const userInfo = await users.findOne({ where: { email: email }});

      // 명언 삭제시...관련 게시글&댓글&좋아요취소 후 삭제처리해야함
      // 데이터베이스 무결성 원칙 ㅠㅠ
      sayings.destroy({ 
        where: {
          id: sayingId,
          user_id: userInfo.id
        }
      });

      if (sayings === 0) return res.status(200).json({ message: 'There are no saying' });
      
      res.status(200).json({ sayings });
    } catch (err) {
      return res.status(500).send('Error!');
    }
  }
};