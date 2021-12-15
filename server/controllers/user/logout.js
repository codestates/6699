module.exports = {
  post: (req, res) => {
    try {
      // 쿠키 삭제
      res.cookie('accessToken', null, { maxAge: 0 })
      // 로그아웃 성공
      res.status(200).json({ message: 'logout success' })
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  }
};