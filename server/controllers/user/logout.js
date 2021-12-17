const { userAuth } = require('../../middlewares/authorized/userAuth')

module.exports = {
  post: (req, res) => {
    try {
      // 쿠키 삭제
      res.cookie('accessToken', null, { maxAge: 0 });
      // 주의! 401 삼총사 return 코드 필요...
      // 로그아웃 성공
<<<<<<< HEAD
      res.status(200).json({ message: 'Logout Success' });
=======
      res.status(200).json({ message: 'Logout Success!' });
>>>>>>> 87cf845c6d0718b0b8a7e23546e756c1eec7655f
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  }
};