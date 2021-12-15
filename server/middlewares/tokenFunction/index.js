require('dotenv').config();
const { sign, verify } = require('jsonwebtoken');

module.exports = {
  generateAccessToken: (data) => {
    // accessToken으로 sign한다.
    return sign(data, process.env.ACCESS_SECRET, { expiresIn : '12h' });
  },
  sendAccessToken: (res, accessToken) => {
    // accessToken을 쿠키로 전달한다.
    const cookieOptions = {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true
    };
    res.cookie('accessToken', accessToken, cookieOptions);
  },
  isAuthorized: (req) => {
    // JWT 토큰 정보를 받아서 검증한다.
    const encoded = req.cookies.jwt;
    return verify(encoded, process.env.ACCESS_SECRET);
  }
};
