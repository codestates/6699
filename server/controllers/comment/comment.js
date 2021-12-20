const { userAuth } = require('../../middlewares/authorized/userAuth')
const { users, articles, comments } = require('../../models');

module.exports = {
  get: async (req, res) => {
    try {
      // 로그인 인증 검사
      // const userInfo = await userAuth(req, res);

      // 현재 게시글 id를 params에서 받아온다
      const { articleId } = req.params;
      // articleId가 없을때, 다음을 응답한다
      if(!articleId) return res.status(400).json({ message: 'Bad Request!' })
      // 게시글에 작성된 모든 댓글들을 commentInfo에 담는다
      const commentInfo = await comments.findAll({ where: { article_id: Number(articleId) } });
      // 게시글에 작성된 댓글이 없다면, 다음을 응답한다
      if(commentInfo.length === 0) return res.status(200).json({ message: 'No Comment!' })

      res.status(200).json({ data: { commentInfo: commentInfo }, message: 'All Comment!' });      
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  },
  post: async (req, res) => {
    try {
      // 로그인 인증 검사
      // const userInfo = await userAuth(req, res);

      // 주의! error 분기!!!
      // 요청 바디에서 댓글 내용을 받아온다
      const { user_id, content } = req.body;
      // 현재 게시글 id를 params에서 받아온다
      const { articleId } = req.params;

      // articleId, content가 없을때 error return 
      if(!articleId || !content) return res.status(400).json({ message: 'Bad Request!' })
      const userInfo = await users.findOne({ where: { id: user_id } });
      const articleInfo = await articles.findOne({ where: { id: Number(articleId) } });

      // article의 total_comment +1
      let plusTotalComment = articleInfo.total_comment + 1;
      await articleInfo.update({ total_comment: plusTotalComment });
      // comment 생성
      await comments.create({ content: content, user_id: userInfo.id , article_id: Number(articleId) });

      // 생성 메시지 반환
      res.status(201).json({ data: { articleInfo: articleInfo }, message: 'Create Comment!' });
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  },
  patch: async (req, res) => {
    try {
      // 로그인 인증 검사
      // const userInfo = await userAuth(req, res);

      // 요청 바디에서 댓글 내용을 받아온다
      const { user_id, content } = req.body;
      // 현재 게시글 id를 params에서 받아온다
      const { commentId } = req.params;
      // content가 전달되지 않았을 때, 다음을 응답한다
      if(!content) return res.status(400).json({ message: 'Bad Request!' })

      const userInfo = await users.findOne({ where: { id: user_id } });
      const commentInfo = await comments.findOne({ where: { id: Number(commentId) } });

      // 타인이 작성한 댓글 수정 불가
      if(commentInfo.user_id !== userInfo.id) return res.status(401).json({ message: 'Not Authroized!' });

      // 댓글 수정 & 메시지 반환
      await commentInfo.update({ content });
      res.status(200).json({ data: { commentInfo: commentInfo }, message: 'Edit Comment!' });
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  },
  delete: async (req, res) => {
    try {
      // 로그인 인증 검사
      // const userInfo = await userAuth(req, res);

      const { user_id } = req.body;
      // 현재 게시글 id를 params에서 받아온다
      const { articleId, commentId } = req.params;

      const userInfo = await users.findOne({ where: { id: user_id } });
      const articleInfo = await articles.findOne({ where: { id: Number(articleId) } });
      const commentInfo = await comments.findOne({ where: { id: Number(commentId) } });

      const role = userInfo.role  
      // 관리자일 경우, 다음을 실행한다
      if(role === 1) {
        // article의 total_comment - 1
        let minusTotalComment = articleInfo.total_comment - 1;
        await articleInfo.update({ total_comment: minusTotalComment });
        // 댓글 삭제 & 메시지 반환
        comments.destroy({ where: { id: Number(commentId) } });  // 댓글 삭제
        res.status(200).json({ message: 'Delete Comment!' });
      }
      // 일반 유저일 경우, 다음을 실행한다
      else {
        // 타인이 작성한 댓글 삭제 불가
        if(commentInfo.user_id !== userInfo.id) return res.status(401).json({ message: 'Not Authroized!' });
        // article의 total_comment - 1
        let minusTotalComment = articleInfo.total_comment - 1;
        await articleInfo.update({ total_comment: minusTotalComment });
        // 댓글 삭제 & 메시지 반환
        comments.destroy({ where: { id: Number(commentId) } });  // 댓글 삭제
        res.status(200).json({ message: 'Delete Comment!' });
      }
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  }
};