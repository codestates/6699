const { userAuth } = require('../../middlewares/authorized/userAuth')
const { users } = require('../../models');
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = {
  get: async (req, res) => {
    try {
      // 로그인 인증 검사
      // const userInfo = await userAuth(req, res);

      const { email } = req.body;
      const userInfo = await users.findOne({ where: { email: email }});
      
      // 회원의 민감정보(비밀번호) 삭제
      delete userInfo.dataValues.password;

      // 회원정보 반환
      res.status(200).json({ userInfo });
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  },
  patch: async (req, res) => {
    try {
      // 로그인 인증 검사
      // const userInfo = await userAuth(req, res);
      const { email, username, introduction, password } = req.body;

      const userInfo = await users.findOne({ where: { email: email }});
  
      // 요청 바디에 username이 있다면, 나를 제외한 username 중 이미 존재하는지 검사
      if (username) {
        const isExistedUsername = await users.findOne({ 
          where: { 
            username: username,
            [Op.not]: [{ id: userInfo.id }]
          }
        });
  
        // 이미 존재하는 username이면 요청 거절
        if (isExistedUsername) return res.status(403).json({ message: 'username is already existed' });
      }
      // 요청 바디에 password가 있다면, password를 해싱한다
      
      if (password) {
        const hash = await bcrypt.hash(password, 10);
      }
      
      // 요청 바디가 없는 값은 그대로 유지, 있다면 새로 업데이트 한다
      await users.update(
        {
          username: username ? username : userInfo.username,
          introduction: introduction ? introduction : userInfo.introduction,
          password: password ? hash : userInfo.password
        },
        { where : { id: userInfo.id }}
      );
      
      // 새로 업데이트한 회원정보 조회 후 민감정보(비밀번호) 삭제
      const newUserInfo = await users.findOne({ where: { id: userInfo.id }});
      delete newUserInfo.dataValues.password;
      
      // 업데이트된 회원정보 반환
      res.status(200).json({ userInfo: newUserInfo });
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  },
  delete: async (req, res) => {
    try {
      // 로그인 인증 검사
      // const userInfo = await userAuth(req, res);
      const { email, password } = req.body;

      // email, password 중 하나라도 전달이 되지 않은 경우, 다음을 응답한다
      if(!email || !password) return res.status(400).json({ message: 'insufficient parameters supplied' });

      const userInfo = await users.findOne({ where: { email: email, password: password }});
      // 만약 DB에 일치하는 유저 정보가 없다면, 다음을 응답한다
      if(!userInfo) {
        return res.status(403).json({ message: 'Invalid User!' });
      }
      // 일치하는 유저 정보가 있다면, 해당 유저를 삭제하고 다음을 응답한다
      else {
        users.destroy({ where: { email: email, password: password }});
        return res.status(200).json({ message: 'Goodbye!' });
      }
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  }
};