const { userAuth } = require('../../middlewares/authorized/userAuth')
const { users, articles, comments } = require('../../models');

module.exports = {
  post: async (req, res) => {
    try {
      // 로그인 인증 검사
      // const userInfo = await userAuth(req, res);

      // 요청 바디에서 댓글 내용을 받아온다
      const { email, content } = req.body;
      // 현재 게시글 id를 params에서 받아온다
      const { articleId } = req.params;
      const userInfo = await users.findOne({ where: { email: email } });
      const articleInfo = await articles.findOne({ where: { id: articleId } });

      // article의 total_comment +1
      let plusTotalComment = articleInfo.total_comment + 1;
      await articleInfo.update({ total_comment: plusTotalComment });
      // comment 생성
      await comments.create({ content: content, user_id: userInfo.id , article_id: articleId  });

      // 생성 메시지 반환
      res.status(201).json({ message: 'New Comment is created!' });
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  },
  patch: async (req, res) => {
    try {
      // 로그인 인증 검사
      // const userInfo = await userAuth(req, res);

      // 요청 바디에서 댓글 내용을 받아온다
      const { email, content } = req.body;
      // 현재 게시글 id를 params에서 받아온다
      const { commentId } = req.params;
      const userInfo = await users.findOne({ where: { email: email } });
      const commentInfo = await comments.findOne({ where: { id: commentId } });

      // 타인이 작성한 댓글 수정 불가
      if( commentInfo.user_id !== userInfo.id ) return res.status(403).json({ message: 'can not edit this comment!' });

      // 댓글 수정 & 메시지 반환
      await commentInfo.update({ content });
      res.status(201).json({ message: 'Comment is edit!' });
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  },
  delete: async (req, res) => {
    try {
      // 로그인 인증 검사
      // const userInfo = await userAuth(req, res);

      const { email } = req.body;
      // 현재 게시글 id를 params에서 받아온다
      const { articleId, commentId } = req.params;

      const userInfo = await users.findOne({ where: { email: email } });
      const articleInfo = await articles.findOne({ where: { id: articleId } });
      const commentInfo = await comments.findOne({ where: { id: commentId } });

      // 타인이 작성한 댓글 삭제 불가
      if( commentInfo.user_id !== userInfo.id ) return res.status(403).json({ message: 'can not delete this comment!' });

      // article의 total_comment - 1
      let minusTotalComment = articleInfo.total_comment - 1;
      await articleInfo.update({ total_comment: minusTotalComment });
      // 댓글 삭제 & 메시지 반환
      comments.destroy({ where: { id: commentId } });  // 댓글 삭제
      res.status(201).json({ message: 'Comment is delete!' });
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  }
};