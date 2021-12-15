const { isAuthorized } = require('../tokenFunction');
const { users } = require('../../models');

module.exports = {
  get: async (req, res) => {
    try {
      // 쿠키에 accessToken이 있는지 판별
      const { accessToken } = req.cookies;
      if(!accessToken) return res.status(200).json({ message: 'accessToken is empty!' });

      // accessToken이 유효한 토큰인지 판별
      const accessTokenData = isAuthorized(accessToken);
      if(!accessTokenData) return res.status(200).json({ message: 'accessToken is not authorized!' });
      
      // accessToken에 담긴 정보가 유효한 정보인지 판별
      const { email } = accessTokenData;
      const userInfo = await users.findOne({ where: { email: email }});
      if(!userInfo) return res.status(200).json({ message: 'userInfo is not authorized!' });

      // accessToken이 유효하고 사용자 정보가 올바른 경우 사용자 정보 리턴
      return userInfo;
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  }
};