const { userAuth } = require('../../middlewares/authorized/userAuth')
const { users, articles, comments } = require('../../models');

module.exports = {
  get: async (req, res) => {
    try {
      // 로그인 인증 검사
      const userInfo = await userAuth(req, res);
      
      // 내가 쓴 댓글이 없다면 메시지 반환
      const filteredComment = await comments.findAll({ where: { user_id: userInfo.id } });
      if(filteredComment.length === 0) return res.status(200).json({ message: 'No Article' });

      // 내 게시물 배열 안에 Comments 남긴 게시글들을 쌓는다
      let myArticle = [];
      for(let i = 0; i < filteredComment.length; i++) {
        myArticle.push( await articles.findOne({ where : { id: filteredComment[i].article_id } }));
      }
      
      // 배열 내부 중복값 제거 => 코드 refactoring이 필요함!
      const uniqueMyArticle = []
      for(let i = 0; i < myArticle.length; i++) {
        if(i === 0) uniqueMyArticle.push(myArticle[i])
        else {
          for(let j = 0; j < uniqueMyArticle.length; j++) {
            if(myArticle[i].id === uniqueMyArticle[j].id) break;
            else if(j === uniqueMyArticle.length - 1) uniqueMyArticle.push(myArticle[i])
          }
        }
      }

      res.status(200).json({ data: { filteredArticle: uniqueMyArticle }, message: 'My Article' });
    } catch (err) {
      return res.status(500).send('Server Error!');
    }
  }
};