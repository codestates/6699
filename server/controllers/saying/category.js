const { userAuth } = require('../../middlewares/authorized/userAuth')
const { sayings, articles } = require('../../models');
const categoryList = ['건강', '학습', '경제', '인간관계', '사랑'];

module.exports = {
  get: async (req, res) => {
    try {
      // 좋아요순으로 정렬된 모든 명언을 allSaying에 담는다
      const allSaying = await sayings.findAll({ order: [['total_like', 'DESC']] });
      // 좋아요 기준으로 1등 명언, firstSaying
      const firstSaying = allSaying[0]
      // 1등 명언에 종속된 모든 게시물을 좋아요순으로 정렬시켜 articleInfo에 담는다
      const articleInfo = await articles.findAll({ where: { user_id: firstSaying.id }, order: [['total_like', 'DESC']]})
      res.status(200).json({ data: { allSaying: allSaying, articleInfo: articleInfo }, message: '메인페이지!' });
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  },
  post: async (req, res) => {
    try {
      // 주의! 본인인증 코드 작성이 필요!!!
      const { category } = req.query;
      const { content, user_id } = req.body;
      // content, category, user_id 중 하나라도 전달되지 않았다면, 다음을 응답한다
      if(!category || !content || !user_id) return res.status(400).json({ message: 'Bad Request!' });
       // 양식에 맞지 않은 카테고리가 전달된 경우, 다음을 응답한다
      if(categoryList.indexOf(category) === -1) return res.status(400).json({ message: 'Bad Request!' })
      // 명언이 작성되었다면, sayings 테이블에 해당 명언을 저장한다
      const sayingInfo = await sayings.create({ content: content, category: category, user_id: user_id });
      res.status(201).json({ data: { sayingInfo: sayingInfo }, message: 'Create Saying!' });
    } catch (err) {
      console.log(err)
      return res.status(500).json({ message: 'Server Error!' });
    }
  }
};