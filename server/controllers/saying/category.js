const { userAuth } = require('../../middlewares/authorized/userAuth')
const { sayings } = require('../../models');
const categoryList = ['건강', '학습', '경제', '인간관계', '사랑'];

module.exports = {
  get: async (req, res) => {
    try {

      // 주의!!! 비회원 유저도 사용가능 => 쿠키 필요없음
      const { category } = req.query;
      // 특정 카테고리 명언 조회 (카테고리가 전달된 경우)
      if(category) {
        // 양식에 맞지 않은 카테고리가 전달된 경우, 다음을 응답한다
        if(categoryList.indexOf(category) === -1) return res.status(400).json({ message: 'Bad Request!' });
        // 전달받은 카테고리와 일치하는 모든 명언을 찾는다
        const filteredSaying = await sayings.findAll({ 
          where: { category: category }, order: [['total_like', 'DESC'], ['updatedAt', 'DESC']]
        }); 
        res.status(200).json({ data: { filteredSaying: filteredSaying }, message: `${category} 명언 카테고리!` });
      } 
      // 명언 전체 조회
      else {
        // 모든 명언을 찾는다
        const allSaying = await sayings.findAll({ order: [['total_like', 'DESC'], ['updatedAt', 'DESC']] });
        res.status(200).json({ data: { allSaying: allSaying }, message: '전체 명언!' });
      }
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
      return res.status(500).json({ message: 'Server Error!' });
    }
  }
};