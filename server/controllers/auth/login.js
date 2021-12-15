const { generateAccessToken, sendAccessToken, isAuthorized } = require('../../middlewares/tokenFunction');
const { User } = require('../../models');

module.exports = {
  post: async (req, res) => {
    try {
      const { email, password } = req.body;

      // 잘못된 요청의 경우
      if (!email || !password) return res.status(400).json({ message: 'Bad Request!' });

      console.log('------',User);
      const userInfo = await User.findOne({ where: { email: email }});
      console.log('------',userInfo);
      
      if(!userInfo){
        return res.status(404).json({ message: 'invalid user' });
      } else {
        // 회원의 민감정보(비밀번호) 삭제
        delete userInfo.dataValues.password;

        // accessToken을 발급하고 쿠키에 저장
        const accessToken = generateAccessToken(userInfo.dataValues);
        sendAccessToken(res, accessToken);

        // 회원정보를 반환
        res.status(200).json({ userInfo });
      }

    } catch (err) {
      return res.status(500).send('Error!');
    }
  }
};