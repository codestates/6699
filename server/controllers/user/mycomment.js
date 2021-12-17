const { userAuth } = require('../../middlewares/authorized/userAuth')
const { users, comments, articles } = require('../../models');

module.exports = {
  get: async (req, res) => {
    try {
      // 로그인 인증 검사
      // const userInfo = await userAuth(req, res);
      const { email } = req.body;
      const userInfo = await users.findOne({ where: { email: email }});
      
      // 내가 쓴 댓글이 없다면 메시지 반환
      const filteredComment = await comments.findAll({ where: { user_id: userInfo.id } });
      if(filteredComment.length === 0) return res.status(200).json({ message: 'No Article' });

      // 내 게시물 배열 안에 Comments 남긴 게시글들을 쌓는다
      let myArticle = [];
      for(let comment of filteredComment) {
        myArticle.push( await articles.findOne({ where : { id: comment.article_id } }) );
      }
      // 배열 내부 중복값 제거
      const uniqeMyArticle = Array.from(new Set(myArticle));

      res.status(200).json({ data: { filteredArticle: uniqeMyArticle }, message: 'My Article' });
    } catch (err) {
      return res.status(500).send('Error!');
    }
  }
};