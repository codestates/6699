const { users, sayings } = require('../../models');
const categoryList = ['건강', '학습', '경제', '인간관계', '사랑'];

module.exports = {
  get: async (req, res) => {
    try {
      const { category } = req.query;
      // 카테고리가 전체 명언이 선택된 경우 (랭킹페이지 default 값)
      if(category === '전체') {
        // 모든 명언을 찾는다
        const allSaying = await sayings.findAll({ 
          include: [{
            model: users,
            attributes: ['image']
          }],
          order: [['total_like', 'DESC'], ['updatedAt', 'DESC']]
        })
        res.status(200).json({ data: { allSaying: allSaying }, message: '전체 명언 좋아요순!' });
      }
      // 특정 카테고리 명언 조회 (카테고리가 전달된 경우)
      else if(category) {
        // 양식에 맞지 않은 카테고리가 전달된 경우, 다음을 응답한다
        if(categoryList.indexOf(category) === -1) return res.status(400).json({ message: 'Bad Request!' });
        // 전달받은 카테고리와 일치하는 모든 명언을 찾는다
        const filteredSaying = await sayings.findAll({ 
          include: [{
            model: users,
            attributes: ['image']
          }],
          where: { category: category }, 
          order: [['total_like', 'DESC'], ['updatedAt', 'DESC']] });
        res.status(200).json({ data: { filteredSaying: filteredSaying }, message: `${category} 카테고리 좋아요순!` });
      } else {
        res.status(400).json({ message: 'Bad Request!'})
      }
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  }
};