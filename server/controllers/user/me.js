const { users } = require('../../models');

module.exports = {
  get: (req, res) => {
    try {
      res.send('MyPage Ok!');
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  },
  patch: (req, res) => {
    try {
      res.send('MyPage Edit Ok!');
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  },
  delete: async (req, res) => {
    try {
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
        users.destroy({ where: { email: email, password: password }})
        return res.status(200).json({ message: 'Goodbye!' })
      }
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  }
};