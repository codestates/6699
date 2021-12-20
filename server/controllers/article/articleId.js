const { userAuth } = require('../../middlewares/authorized/userAuth')
const { users, articles, article_likes, comments } = require('../../models');

module.exports = {
  get: async (req, res) => {
    try {
      // 중요!!! article 작성 중에, 참조하고 있는 명언이 삭제될때... 다른 API 메소드도 마찬가지...
      const { sayingId, articleId } = req.params;
      // sayingId, articleId 중 하나라도 전달되지 않았다면, 다음을 응답한다: Q. 필요한 코드일까?
      if(!sayingId || !articleId) return res.status(400).json({ message: 'Bad Request!' });
      
      // articleId와 id가 일치하는 article이 있는지 확인한다
      const articleInfo = await articles.findOne({ where: { id: Number(articleId) }});
      
      // 만약 id가 일치하지 않다면, 다음을 응답한다
      if(!articleInfo) return res.status(404).json({ message: 'No Matched Article!' });
      // 만약 id가 일치한다면, 해당 article을 전달한다
      else {
        // 해당 게시물에 조회수를 +1 한다
        let plusView = articleInfo.view + 1;
        await articleInfo.update({ view: plusView });
        return res.status(200).json({ data: { articleInfo: articleInfo }, message: 'Matched Article!' });
      }
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  },
  patch: async (req, res) => {
    try {
      // 중요!!! user_id를 가지고 와서 수정권한 확인 !!!
      // 중요!!! article 수정권한 (현재는 타인이 수정할 수 있음!)
      // 로그인 인증 검사
      const userInfo = await userAuth(req, res);

      // Q. sayingId 변수를 가져올 필요가 있을까?
      const { sayingId, articleId } = req.params;
      const { title, content, image } = req.body;
      // 요청바디가 전달되지 않은 경우, 다음을 응답한다
      if(!sayingId || !articleId || !title ) return res.status(400).json({ message: 'Bad Request!' });
      
      // articleId와 일치하는 게시글을 찾는다
      let articleInfo = await articles.findOne({ where: { id: Number(articleId) }});
      // 타인이 작성한 댓글 수정 불가
      if(articleInfo.user_id !== userInfo.id) return res.status(401).json({ message: 'Not Authroized!' });
      
      // 만약 전달된 articleId와 게시물 id가 일치하지 않은 경우, 다음을 응답한다
      if(!articleInfo) return res.status(404).json({ message: 'No Matched Article!' });
      // 만약 전달된 articleId와 게시물 id가 일치하면, 전달된 parameter를 적용해 게시물 정보를 수정한다
      else {
        // Q. saying_id는 수정할 수 있게 할 것인가?! => 2주차 때는 너무 heavy한 이슈!
        await articleInfo.update({ title: title, content: content, image: image, saying_id: Number(sayingId) });
        return res.status(200).json({ data: { articleInfo: articleInfo }, message: 'Edit Article!' });
      }
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  },
  delete: async (req, res) => {
    try {
      // 로그인 인증 검사
      const userInfo = await userAuth(req, res);

      // Q. sayingId 변수를 가져와야 할까?
      const { sayingId, articleId } = req.params;
      // 주의! user_id는 문자열
      // articleId, sayingId 중 하나라도 전달되지 않은 경우, 다음을 응답한다
      if(!articleId || !sayingId ) return res.status(400).json({ message: 'Bad Request!' });
      
      // 유저의 관리자 정보를 가져온다
      const role = userInfo.role
      // 관리자일 경우, 다음을 실행한다 (sayingId, articleId 모두 주어져있다)
      if(role === 1) {
        // 해당 게시물에 좋아요한 기록 삭제 (article_likes 테이블)
        article_likes.destroy({ where: { article_id: Number(articleId) } });
        // 해당 게시물에 작성된 댓글들 삭제 (comments 테이블)
        comments.destroy({ where: { article_id: Number(articleId) } });
        // 해당 게시물 삭제 (articles 테이블)
        articles.destroy({ where: { id: Number(articleId) } });

        return res.status(200).json({ message: 'Delete Article!' });
      } 
      // 관리자가 아닐 경우, (sayingId, articleId, user_id 모두 주어져있다)
      else if(role === 0) {
        // articleId와 user_id가 일치하는 게시물이 있는지 확인
        const articleInfo = await articles.findOne({ where: {id: Number(articleId), user_id: userInfo.id } });
        // 만약 일치하는 게시물이 없다면, 다음을 응답한다
        if(!articleInfo) return res.status(404).json({ message: 'No Matched Article!' });
        // 만약 일치하는 게시물이 있다면, 다음을 실행한다
        else {
          // 해당 게시물에 좋아요한 기록 삭제 (article_likes 테이블)
          article_likes.destroy({ where: { article_id: Number(articleId) } });
          // 해당 게시물에 작성된 댓글들 삭제 (comments 테이블)
          comments.destroy({ where: { article_id: Number(articleId) } });
          // 해당 게시물 삭제 (articles 테이블)
          articles.destroy({ where: { id: Number(articleId) } });
          
          return res.status(200).json({ message: 'Delete Article!' });
        }
      }
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  }
};