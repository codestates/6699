const { userAuth } = require('../../middlewares/authorized/userAuth')
const { users, articles, comments } = require('../../models');

module.exports = {
  get: async (req, res) => {
    try {
      // userId를 클라이언트로부터 전달받는다!
      const { userId } = req.params

      // userId가 전달되지 않으면, 다음을 응답한다
      if(!userId) res.status(400).json({ message: 'Bad Request!' })
      // users 테이블에서 userId와 일치하는 유저를 찾아 정보를 userInfo에 저장한다
      const userInfo = await users.findOne({ where: { id: userId } })
      // 만약 일치하는 유저가 없다면, 다음을 응답한다
      if(!userInfo) res.status(404).json({ message: 'No Matched User!' })
      // 해당 유저의 이미지를 image에 저장한다
      const image = userInfo.image 

      res.status(200).json({ data: { userImage: image }, message: 'Matched User!' });      
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  }
};